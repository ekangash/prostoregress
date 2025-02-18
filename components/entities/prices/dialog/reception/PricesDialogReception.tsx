'use client'
/** 1 Node - Modules, Components, Hooks, Icons */
import React, {useCallback, useState} from "react";
import {toast} from "sonner";

/** 2 App - Components, Hooks */
import {Dialog} from "@/components/shared/dialog/Dialog";
import {Button} from "@/components/shared/button/Button";
import {Form} from "@/components/shared/form/Form";

/** 3 Entities, Stores, Packages, Enums ... */
import {yup} from "@/packages/yup";
import {obj} from "data-support";
import {yupSupport} from "@/packages/yup/support";
import axios from "axios";


/**
 * @interface CastsButtonsReceptionProps
 */
interface CastsButtonsReceptionProps {
    title: string;
    cast: string;
}

/**
 * @return {React.ReactElement} Сформированный DOM узел.
 */
export const PricesDialogReception: React.FC<CastsButtonsReceptionProps> = ({ title, cast }): React.ReactElement => {
    const [shipped, setShipped] = useState(false);
    /**
     * Обновляет персональные атрибуты профиля.
     *
     * @param {object} data Данные формы.
     *
     * @return {void}
     */
    const updateProfileSignature = useCallback((data: object): void => {
        toast.promise(new Promise((resolve, reject) => {
            const props = { title, cast, ...obj.only(data, ['fullname', 'email', 'message', "tg_login"]) };

            axios.post('/api/telegram', props).then(() => {
                resolve();
                setShipped(true);
            });
        }), {
            loading: 'Отправка заявки...',
            success: 'Заявка успешно отправлена',
            error: 'Упс, неудачная отправка заявки :(',
        });
    })

    const resolver = useCallback(() => yupSupport.prepareSchemaWithLabels(['firstname', 'lastname'], {
        fullname: 'Наименование',
        email: 'Почтовый адрес',
        tg_login: 'Логин телеграмма',
        message: 'Cообщение',
        access: 'Персональные данные',
    }, yup.object({
        email: yup
            .string()
            .email('Это должен быть действительный адрес электронной почты')
            .required('Требуется указать электронную почту'),
        tg_login: yup.string(),
        fullname: yup
            .string()
            .required('Требуется указать как к вам обращаться :)'),
        privacy: yup.boolean().oneOf([true], 'Требуется подтвердить обработку персональных данных :)'),
    })))

    return (
        <Dialog>
            <Dialog.Trigger asChild>
                <Button
                    variant="primary"
                    className="w-full"
                    text="sm"
                >
                    Оставить заявку
                </Button>
            </Dialog.Trigger>
            <Dialog.Content
                autoFocus={false}
            >
                <Dialog.Header>
                    <Dialog.Title>{title}</Dialog.Title>
                    <Dialog.Description asChild={true}>
                        <div className="flex items-center space-x-2">
                            <p className="font-extrabold">
                                {cast}
                            </p>
                            <p className="text-sm opacity-60">
                                /сеанс
                            </p>
                        </div>
                    </Dialog.Description>
                </Dialog.Header>
                <Dialog.Scroll className="py-5">
                    {  shipped ? (
                        <div className="space-y-2 text-center">
                            <h2 className="text-2xl font-bold leading-none text-primary">
                                Заявка успешно отправлена
                            </h2>
                            <p className="text-gray-400 text-xs">
                                В скором времени мы с Вами свяжемся.
                            </p>
                        </div>

                    ) : (
                        <Form
                            className="space-y-5"
                            defaultValues={{ title }}
                            resolver={resolver}
                            onSubmit={updateProfileSignature}
                        >
                            {({ formState: { isSubmitting } }) => (
                                <>
                                    <div className="space-y-3">
                                        <Form.Text
                                            label="Наименование"
                                            placeholder="Ваше имя"
                                            name="fullname"
                                            className="w-full"
                                            withPlaceholder
                                            withLabel
                                        />
                                        <div className="flex gap-5 w-full">
                                            <Form.Text
                                                label="Логин телеграмма"
                                                placeholder="@my_login"
                                                name="tg_login"
                                                className="w-full"
                                                withPlaceholder
                                                withLabel
                                            />
                                            <Form.Text
                                                label="Почтовый адресс"
                                                placeholder="zvesda@yandex.ru"
                                                name="email"
                                                className="w-full"
                                                withPlaceholder
                                                withLabel
                                            />
                                        </div>
                                        <Form.Text
                                            label="Cообщение"
                                            placeholder="Тут моглы бы быть ваше пожелания"
                                            name="message"
                                            as="textarea"
                                            className="w-full"
                                            withPlaceholder
                                            withLabel
                                        />
                                        <Form.Checkbox
                                            label="Согласие на обработку персональных данных"
                                            name="privacy"
                                            className="w-full"
                                            withLabel
                                            filled
                                        />
                                    </div>
                                    <Button
                                        type="submit"
                                        loading={isSubmitting}
                                        disabled={isSubmitting}
                                        size="oblong-1.5"
                                        className="w-40 ml-auto"
                                        variant="primary"
                                    >
                                        Записаться
                                    </Button>
                                </>
                            )}
                        </Form>
                    )}

                </Dialog.Scroll>
            </Dialog.Content>
        </Dialog>
    );
}