/** 1 Node - Modules, Components, Hooks, Icons */
import React from 'react';

/** 2 App - Components, Hooks */
import {Button} from "@/components/shared/button/Button";

/** 3 Entities, Stores, Packages, Enums ... */

/**
 * @return {React.ReactElement} Сформированный DOM узел.
 */
export const AppLayoutLogo: React.FC = (): React.ReactElement => {
    return (
        <Button
            href="/"
            className="font-bold items-start justify-center flex-col gap-0 border-l-2 border-solid border-pink-500 pl-2 rounded-none group"
            size="none"
            variant="none"
        >
            <p className="text-pink-500 bg-gradient-to-tr bg-clip-text from-blue-500 via-pink-500 to-red-500 dark:from-sky-300 dark:via-pink-300 dark:to-red-500 font-extrabold group-hover:text-foreground duration-300 text-xs leading-none">
                Оговорки подсознания
            </p>
            <p className="text-pink-500 font-extrabold group-hover:text-foreground duration-300 text-xs leading-none">
                Мастерская регресса
            </p>
        </Button>
    );
};