/** 1 Node - Modules, Components, Hooks, Icons */
import React from 'react';
import {cn} from "@/packages/utils";

/** 2 App - Components, Hooks */
/** 3 Entities, Stores, Packages, Enums ... */

/**
 * @interface ImagePlaceholderProps
 */
interface ImagePlaceholderProps {
    path: React.FC<React.SVGProps<SVGSVGElement>>;
    className?: string;
}

/**
 * @return {React.ReactNode} Сформированные DOM узлы.
 */
export const ImagePlaceholder: React.FC<ImagePlaceholderProps> = ({
    path: Icon,
    className = ''
}): React.ReactElement => (
    <div className={cn('object-cover h-full flex items-center justify-center bg-secondary text-neutral-600', className)}>
        <Icon className="max-w-[50%] h-1/2 w-full" />
    </div>
);

