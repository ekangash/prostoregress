/** 1 Node - Modules, Components, Hooks, Icons */
import React from 'react';
import {cn} from "@/packages/utils";

/** 2 App - Components, Hooks */
/** 3 Entities, Stores, Packages, Enums ... */

/**
 * @interface ImageProps
 */
interface ImageProps {
    src: string;
    alt?: string;
    scale?: boolean;
    rounded?: string;
    className?: string;
    children?: React.ReactNode;
}

/**
* @returns {React.ReactElement} Сформированный DOM узел.
*/
export const Image: React.FC<ImageProps> = ({
    src,
    alt = '',
    scale = false,
    rounded= '',
    className = '',
    children
}): React.ReactElement => {

    return (
        <div {...className.length > 0 ? { className: className } : {}}>
            <img
                src={src}
                className={cn({
                    [`rounded-${rounded}`]: rounded.length > 0,
                    ['hover:scale-y-105 hover:scale-x-105 translate-x translate-y skew-x skew-y scale-x scale-y transition-transform duration-300']: scale,
                }, 'object-cover object-center h-full w-full')}
                alt={alt}
            />
            {children && children}
        </div>
    );
};