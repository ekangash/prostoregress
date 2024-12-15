/** 1 Node - Modules, Components, Hooks, Icons */
/** 2 App - Components, Hooks */
/** 3 Entities, Stores, Packages, Enums ... */
import React from 'react'
import {AppLayoutHeader} from "./header/AppLayoutHeader";
import {AppLayoutFooter} from "./footer/AppLayoutFooter";

interface AppLayoutLayoutProps {
  children: React.ReactNode;
}

/**
 *
 * @constructor
 */
export const AppLayout: React.FC<AppLayoutLayoutProps> = ({ children }) => {

  return (
      <>
          <div id="scroll-to-top" />
          <AppLayoutHeader className="p-4 mx-auto max-w-7xl sticky top-0 z-10 bg-card" />
          <main id="home" className="mx-auto max-w-7xl px-4">
              {children}
          </main>
          <AppLayoutFooter className="p-4 mx-auto max-w-7xl" />
      </>
  );
}
