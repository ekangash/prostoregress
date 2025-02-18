'use client'
/** 1 Node - Modules, Components, Hooks, Icons */
import React from 'react';
import {cn} from "@/packages/utils";

/** 2 App - Components, Hooks */
import NextLink from "next/link";
import {usePathname} from "next/navigation";

/** 3 Entities, Stores, Packages, Enums ... */
import {str} from "data-support";

/**
 * @interface NavigateProps
 */
interface NavigateProps {
    children: React.ReactNode;
    href: string;
    className?: string;
    target?: string;
}

/**
 * @return {React.ReactNode} Сформированные DOM узлы.
 */
export const Navigate: React.FC<NavigateProps> = ({
    href,
    children,
    target = '',
    className = '',
})  => {
    const pathname = usePathname();

    const hrefIsExternal = href.includes('http://') || href.includes('https://')

    return (
        <NextLink
            href={href[0] === '/' || hrefIsExternal ? href : `${pathname}/${href}`}
            className={cn('transition-all cursor-pointer', className)}
            {...(str.contains(target) && { target })}
        >
            {children}
        </NextLink>
    );
};