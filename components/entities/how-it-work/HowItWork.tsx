/** 1 Node - Modules, Components, Hooks, Icons */
/** 2 App - Components, Hooks */
/** 3 Entities, Stores, Packages, Enums ... */
import React from "react";
import {ScrollingCarousel} from "@trendyol-js/react-carousel";

const howwoks = [
    {
        img: "https://www.tailwindtap.com/assets/crypto/workicon1.png",
        title: "Подбор удобного времени",
        desc: "После оформления заявки мы подберем удобное для вас время и подготавливаемся к интересному путешествию. ",
    },
    {
        img: "https://www.tailwindtap.com/assets/crypto/workicon2.png",
        title: "Подготовка гарнитура",
        desc: "Опционе...",
    },
    {
        img: "https://www.tailwindtap.com/assets/crypto/workicon3.png",
        title: "Настройка программы Skype",
        desc: "Описание...",
    },
];

/**
 * @return {React.ReactElement} Сформированный DOM узел.
 */
export const HowItWork: React.FC = () => {

    return (
        <div className="flex w-full flex-col justify-center gap-4 sm:flex-row">
            <ScrollingCarousel>
                <div className="flex space-x-5">
                    {howwoks.map((data, index: number): React.ReactElement => (
                        <div
                            key={index}
                            className="flex w-md w-full items-center gap-5 rounded-3xl bg-secondary p-4 sm:justify-center select-none"
                        >
                            <div>
                                <img
                                    src={data.img}
                                    alt="img"
                                    className="h-40 w-40"
                                />
                            </div>
                            <div className="flex w-full flex-col gap-2.5">
                                <div className="text-base font-semibold lg:text-2xl">
                                    {data.title}
                                </div>
                                <div className="text-xs font-normal normal-case leading-4 lg:text-base opacity-80">
                                    {data.desc}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <></>
            </ScrollingCarousel>
        </div>
    )
}