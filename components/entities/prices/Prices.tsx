/** 1 Node - Modules, Components, Hooks, Icons */
/** 2 App - Components, Hooks */
/** 3 Entities, Stores, Packages, Enums ... */
import React from "react";
import {PriceCardFeature} from "@/components/widgets/price/card/featute/PriceCardFeature";
import {PriceCard} from "@/components/widgets/price/card/PriceCard";
import {PricesDialogReception} from "@/components/entities/prices/dialog/reception/PricesDialogReception";

export const Prices: React.FC = () => {

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <PriceCard
                title="Регрессивная гипнотерапия"
                cast="15 000 руб."
                values={[
                    'Нахождение первоначальной травмы',
                    'Деактивация негативных установок',
                    'Стимуляция абреакции',
                    'Невербальные техники проработки травмы',
                    'Методика быстрой корректировки личной истории',
                    'Проработка частей личности',
                    '1 сессия длительностью до 2-х часов',
                    'Оплата дополнительного времени сеанса осуществляется пропорционально затраченному времени',
                ]}
            >
                {({ title, cast }) => (
                    <PricesDialogReception
                        title={title}
                        cast={cast}
                    />
                )}
            </PriceCard>
            <PriceCard
                title="Техника 6 - шагового рефрейминга"
                cast="10 000 руб."
                values={[
                    'Нахождение первоначальной травмы',
                    'Деактивация негативных установок',
                    'Стимуляция абреакции',
                    'Невербальные техники проработки травмы',
                    'Методика быстрой корректировки личной истории',
                    'Проработка частей личности',
                    '1 сессия длительностью до 2-х часов',
                    'Оплата дополнительного времени сеанса осуществляется пропорционально затраченному времени',
                ]}
            >
                {({ title, cast }) => (
                    <PricesDialogReception
                        title={title}
                        cast={cast}
                    />
                )}
            </PriceCard>
            <PriceCardFeature>
                <PriceCard
                    title="Экзорегресс — чистка биополя"
                    cast="30 000 руб."
                    values={[
                        'Сеанс проходит с участием контактёра/слипера',
                        'Сканирование биополя',
                        'Выявление наличия негативной чужеродной энергии в биополе',
                        'Работа с фантомами',
                        'Сканирование по 5 частотам',
                        'Расторжение контрактов и соглашений',
                        'Общение с высшим «Я»',
                        'Наполнение энергией: работа с энергией Жива(Ци',
                        'Работа с Родом (в большинстве случаев для проработки Рода требуется ряд отдельных сеансов)',
                        '1 сессия длительностью до 2-х часов',
                        'Оплата дополнительного времени сеанса осуществляется пропорционально затраченному времени',
                    ]}
                >
                    {({ title, cast }) => (
                        <PricesDialogReception
                            title={title}
                            cast={cast}
                        />
                    )}
                </PriceCard>
            </PriceCardFeature>
        </div>
    )
}