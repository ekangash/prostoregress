/** 1 Node - Modules, Components, Hooks, Icons */
import React from "react";
import {ScrollingCarousel} from "@trendyol-js/react-carousel";

/** 2 App - Components, Hooks */
import {Image} from "@/components/shared/image/Image";

/** 3 Entities, Stores, Packages, Enums ... */

const howwoks = [
    {
        img: "/img/calendar.png",
        title: "Подбор удобного времени",
        desc: "После оформления заявки мы подберем удобное для вас время и подготавливаемся к интересному путешествию. ",
    },
    {
        img: "/img/settings.png",
        title: "Настройка гарнитура для связи",
        desc: "Опционе...",
    },
    {
        img: "/img/brain.png",
        title: "Проведение сеанса",
        desc: "Описание...",
    },
];

/**
 * @return {React.ReactElement} Сформированный DOM узел.
 */
export const HowItWork: React.FC = (): React.ReactElement => {

    return (
        <div className="flex w-full flex-col justify-center gap-4 sm:flex-row">
            <ScrollingCarousel>
                <div className="flex space-x-5">
                    {howwoks.map((data, index: number): React.ReactElement => (
                        <div
                            key={index}
                            className="flex w-sm w-full items-center gap-5 rounded-3xl bg-secondary p-4 sm:justify-center select-none"
                        >
                            <span className="text-2xl font-extrabold text-primary rounded-full leading-4">
                                {index + 1  }.
                            </span>
                            <Image
                                src={data.img}
                                alt="img"
                                rounded="2xl"
                                className="w-32"
                            />
                            <div className="flex flex-1 flex-col space-y-1">
                                <div className="text-base font-semibold lg:text-xl">
                                    {data.title}
                                </div>
                                <div className="text-sm font-normal normal-case leading-4 opacity-80">
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