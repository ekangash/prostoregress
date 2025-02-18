/** 1 Node - Modules, Components, Hooks, Icons */
import * as React from "react"

/** 2 App - Components, Hooks */
import {Scroll} from "@/components/shared/scroll-area/Scroll";

/** 3 Entities, Stores, Packages, Enums ... */
import {cn} from "@/packages/utils";

interface DialogScrollProps {
    children: React.ReactNode;
    className?: string;
}

export type DialogScrollFC = React.FC<DialogScrollProps>;

/**
 * @returns {React.ReactElement} Сформированный DOM узел.
 */
export const DialogScroll: DialogScrollFC = ({
   className,
   children
}) => (
    <Scroll.Area className={cn('px-5 mx-1', className)}>
        {children}
        <Scroll.Bar />
    </Scroll.Area>
);

DialogScroll.displayName = 'DialogScroll';