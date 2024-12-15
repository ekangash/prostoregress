/** 1 Node - Modules, Components, Hooks, Icons */
/** 2 App - Components, Hooks */
/** 3 Entities, Stores, Packages, Enums ... */
import React from "react";
import {PriceCardValue} from "@/components/widgets/price/card/value/PriceCardValue";

interface CastCardProps {
    title: string;
    cast: string;
    values: string[];
    children: ({ title, cast }: { title: string, cast: string}) =>  React.ReactNode;
}

/**
 * @param title
 * @param cast
 * @param values
 * @param children
 *
 * @constructor
 */
export const PriceCard: React.FC<CastCardProps> = ({ title, cast, values, children }) => {

    return (
        <div className="flex flex-col items-center border-2 border-secondary p-8 rounded-3xl shadow-sm max-w-sm">
            <div>
                <h2 className="font-extrabold text-3xl text-center mb-2">{title}</h2>
                <p className="opacity-60 text-center">
                    Для индивидуальных пользователей
                </p>
                <div className="flex flex-col text-minor items-center my-8">
                    <p className="font-extrabold text-4xl">
                        {cast}
                    </p>
                    <p className="text-sm opacity-60">
                        /сеанс
                    </p>
                </div>
            </div>
            <div className="flex flex-col justify-between h-full">
                <div className="space-y-1">
                    {values.map((value, index) => (
                        <PriceCardValue key={index}>{value}</PriceCardValue>
                    ))}
                </div>
                <div className="flex justify-center mt-8 ">
                    {children({ title, cast })}
                </div>
            </div>
        </div>
    )
}