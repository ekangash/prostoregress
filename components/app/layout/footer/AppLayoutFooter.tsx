/** 1 Node - Modules, Components, Hooks, Icons */
import React from 'react';
import {AppLayoutLogo} from "@/components/app/layout/logo/AppLayoutLogo";
import {Button} from "@/components/shared/button/Button";
import {cn} from "@/packages/utils";
import {Separator} from "@radix-ui/react-separator";

/** 2 App - Components, Hooks */
/** 3 Entities, Stores, Packages, Enums ... */

interface AppLayoutFooterProps {
    className: string;
}

/**
 * @return {React.ReactElement} Сформированный DOM узел.
 */
export const AppLayoutFooter: React.FC<AppLayoutFooterProps> = ({ className }): React.ReactElement => {

    return (
        <footer className={cn('w-full mx-auto layout-px py-4 space-y-4 md:space-y-6', className)}>
            <div className="sm:flex sm:items-center sm:justify-between">
                <AppLayoutLogo />
                <ul className="flex flex-wrap justify-center items-center mb-6 sm:mb-0 gap-1">
                    <li>
                        <Button
                            href={`/privacy`}
                        >
                            Приватность
                        </Button>
                    </li>
                    <li>
                        <Button
                            href={`/terms`}
                        >
                            Соглашение
                        </Button>
                    </li>
                </ul>
            </div>
            <Separator className="sm:mx-auto" />
            <p className={cn('text-xs text-minor', className)}>
                ©2025 - авторские права сайта и интеллектуальные идеи защищены
            </p>
        </footer>
    );
}
