/** 1 Node - Modules, Components, Hooks, Icons */
/** 2 App - Components, Hooks */
/** 3 Entities, Stores, Packages, Enums ... */
import React from "react";
import {Icon} from "@/components/shared/icon/Icon";
import {Rocket} from "lucide-react";

interface CastCardFeatureProps {
    badge?: string;
    children: React.ReactNode;
}

export const PriceCardFeature: React.FC<CastCardFeatureProps> = ({ badge = 'Популярный', children }) => {

    return (
        <div className="flex flex-col items-center light:bg-gradient-to-br from-secondary via-orange-100 to-purple-100 dark:bg-secondary rounded-3xl shadow-sm relative border-4 border-orange-200 max-w-sm">
            <Icon size={16} path={Rocket} className="absolute -top-8 -left-8 text-red-400"/>
            <p className="mono text-sm absolute -top-4 bg-red-400 text-zinc-100 py-1 px-2.5 font-bold tracking-wider rounded-md">
                {badge}
            </p>
            {children}
        </div>
    )
}