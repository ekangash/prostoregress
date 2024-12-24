/** 1 Node - Modules, Components, Hooks, Icons */
import React from "react";
import {ScrollingCarousel} from "@trendyol-js/react-carousel";
import {Settings, CalendarHeart, Headset, ChevronsLeft, ChevronsRight} from "lucide-react";

/** 2 App - Components, Hooks */
import {Icon} from "@/components/shared/icon/Icon";

/** 3 Entities, Stores, Packages, Enums ... */

const howwoks = [
    {
        icon: CalendarHeart,
        title: "Подбор удобного времени",
        desc: "После оформления заявки мы подберем удобное для вас время и подготавливаемся к интересному путешествию. ",
    },
    {
        icon: Settings,
        title: "Настройка гарнитура для связи",
        desc: "Опционе...",
    },
    {
        icon: Headset,
        title: "Проведение сеанса",
        desc: "Описание...",
    },
];

/**
 * @return {React.ReactElement} Сформированный DOM узел.
 */
export const HowItWork: React.FC = (): React.ReactElement => {

    return (
        <div className="flex w-full flex-col justify-center space-y-4">
            <ScrollingCarousel
                leftIcon={(
                    <Icon
                        path={ChevronsLeft}
                        size={6}
                    />
                )}
                rightIcon={(
                    <Icon
                        path={ChevronsRight}
                        size={6}
                    />
                )}
            >
                {howwoks.map((data, index: number): React.ReactElement => (
                    <div
                        key={index}
                        className="flex w-[550px] w-full items-center gap-5 rounded-3xl bg-secondary px-8 py-4 sm:justify-center select-none"
                    >
                        <Icon
                            path={data.icon}
                            size={10}
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
            </ScrollingCarousel>
            <p className="items-center justify-center transition-all text-lg rounded-lg straight text-minor font-bold hidden lg:flex gap-0.5">
                <Icon
                    path={ChevronsLeft}
                    size={6}
                />
                Двигайте элементы
                <Icon
                    path={ChevronsRight}
                    size={6}
                />
            </p>
        </div>
    )
}