"use client";
/** 1 Node - Modules, Components, Hooks, Icons */
import React, {useEffect, useState} from 'react';
import {ThemeProvider as AppThemeProviderPackage, type ThemeProviderProps} from "next-themes";

/** 2 App - Components, Hooks */
/** 3 Entities, Stores, Packages, Enums ... */

/**
 * @returns {React.FC} Сформированные DOM узлы.
 */
export const AppThemeProvider: React.FC<ThemeProviderProps> = ({
   children,
}: ThemeProviderProps): React.ReactElement => {
    /* -------------------------------------------------------------------------- */
    /*                                   States                                   */
    /* -------------------------------------------------------------------------- */
    const [mounted, setMounted] = useState(false);

    /* -------------------------------------------------------------------------- */
    /*                                 JSX Return                                 */
    /* -------------------------------------------------------------------------- */
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return <></>;
    }
    return (
        <AppThemeProviderPackage
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
            storageKey="theme"
        >
            {children}
        </AppThemeProviderPackage>
    );
};