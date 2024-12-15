/** 1 Node - Modules, Components, Hooks, Icons */
import React from 'react';

/** 2 App - Components, Hooks */
import {useTheme} from "@/components/app/theme/provider/AppThemeProvider";
import {Button} from "@/components/shared/button/Button";
import {Moon, Sunset} from "lucide-react";
import {Icon} from "@/components/shared/icon/Icon";

/** 3 Entities, Stores, Packages, Enums ... */


/**
 * @return {React.ReactElement} Сформированный DOM узел.
 */
export const AppThemeToggle: React.FC = (): React.ReactElement => {
    const { theme, setTheme } = useTheme();

    return (
      <Button
          onClick={(): void => {
              setTheme(theme === 'dark' ? 'light' : 'dark');
          }}
      >
          <Icon
              className="fill-violet-700 block dark:hidden"
              path={Moon}
          />
          <Icon
              className="fill-yellow-500 hidden dark:block"
              path={Sunset}
          />
      </Button>
    );
};