/** 1 Node - Modules, Components, Hooks, Icons */
import React from "react";

/** 2 App - Components, Hooks */
import {PriceCardValue} from "@/components/widgets/price/card/value/PriceCardValue";

/** 3 Entities, Stores, Packages, Enums ... */

interface CastCardProps {
    title: string;
    description: string;
    cast: string;
    values: string[];
    children: ({ title, cast }: { title: string, cast: string}) =>  React.ReactNode;
}

/**
 * @returns {React.ReactElement} Сформированный DOM узел.
 */
export const PriceCard: React.FC<CastCardProps> = ({ title, description, cast, values, children }): React.ReactElement => {

    return (
        <div className="flex flex-col items-center border-2 border-secondary p-8 rounded-3xl shadow-sm max-w-sm h-full">
            <div>
                <h2 className="font-extrabold text-2xl text-center mb-2">{title}</h2>
                <p className="text-minor text-center">
                    {description}
                </p>
                <div className="flex flex-col text-minor items-center my-8">
                    <p className="font-extrabold text-4xl text-pink-500">
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
    );
}