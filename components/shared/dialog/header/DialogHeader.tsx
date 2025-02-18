/** 1 Node - Modules, Components, Hooks, Icons */
import * as React from "react"

/** 2 App - Components, Hooks */
/** 3 Entities, Stores, Packages, Enums ... */
import { cn } from "@/packages/utils";
import {Separator} from "@/components/shared/separator/Separator";


export interface DialogHeaderFC extends React.FC<React.HTMLAttributes<HTMLDivElement>> {}

/**
 * @returns {React.ReactElement} Сформированный DOM узел.
 */
export const DialogHeader: DialogHeaderFC = ({ className = '', children, ...props }) => (
  <div
    className={cn("flex flex-col text-center sm:text-left pt-4 px-4 pb-2", className)}
    {...props}
  >
    {children}
    <Separator className="w-full mt-2" />
  </div>
);
DialogHeader.displayName = "DialogHeader";