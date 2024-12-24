/** 1 Node - Modules, Components, Hooks, Icons */
import React from 'react';

/** 2 App - Components, Hooks */
/** 3 Entities, Stores, Packages, Enums ... */
import {cn} from "@/packages/utils";

/**
 * @interface CaptionProps
 */
interface CaptionProps {
    description?: string;
    className?: string;
    children?: React.ReactNode;
}

/**
 * @return {React.ReactElement} Сформированный DOM узел.
 */
export const Caption: React.FC<CaptionProps> = ({
    description,
    className = '',
    children,
}): React.ReactElement => {

    return (
        <div className={cn('max-w-sm mx-auto', className)}>
            <h2 className="text-4xl text-center font-bold flex justify-center items-center gap-2">
                {children}
            </h2>
            {description && (
                <p className="mt-2 text-sm text-center opacity-80">
                    {description}
                </p>
            )}
        </div>
    );
};