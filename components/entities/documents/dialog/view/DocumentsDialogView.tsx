/** 1 Node - Modules, Components, Hooks, Icons */
import React from "react";
import {toast} from "sonner";

/** 2 App - Components, Hooks */
import {Dialog} from "@/components/shared/dialog/Dialog";
import {Button} from "@/components/shared/button/Button";
import {Form} from "@/components/shared/form/Form";

/** 3 Entities, Stores, Packages, Enums ... */
import {yup} from "@/packages/yup";
import {obj} from "@/packages/support";
import {yupSupport} from "@/packages/yup/support";
import {Image} from "@/components/shared/image/Image";


/**
 * @interface CastsButtonsReceptionProps
 */
interface CastsButtonsReceptionProps {
    title: string;
    description: string;
    cover: string;
}

/**
 * @return {React.ReactElement} Сформированный DOM узел.
 */
export const DocumentsDialogView: React.FC<CastsButtonsReceptionProps> = ({ title,description, cover }): React.ReactElement => {

    return (
        <Dialog>
            <Dialog.Trigger asChild>
                <Button
                    variant="secondary"
                    size="oblong-2"
                >
                    Читать подробнее
                </Button>
            </Dialog.Trigger>
            <Dialog.Content className="sm:max-w-sm">
                <Dialog.Header>
                    <Dialog.Title>
                        <p className="text-2xl font-bold link-title line-clamp-2">
                            {title}
                        </p>
                    </Dialog.Title>
                    <Dialog.Description asChild={true}>

                    </Dialog.Description>
                </Dialog.Header>
                <Dialog.Main className="pb-5">
                    <Image
                        className="w-full aspect-h-7 aspect-w-16 mb-4"
                        src={cover}
                        alt={title}
                        width={450}
                        height={230}
                        rounded="2xl"
                    />
                    <p className="text-left text-md font-normal text-minor transition-all">
                        {description}
                    </p>
                </Dialog.Main>
            </Dialog.Content>
        </Dialog>
    );
}