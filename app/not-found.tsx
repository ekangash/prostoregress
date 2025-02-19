/** 1 Node - Modules, Components, Hooks, Icons */
import React from "react";
import {Metadata} from "next";

/** 2 App - Components, Hooks */
import {Button} from "@/components/shared/button/Button";
import {Image} from "@/components/shared/image/Image";

/** 3 Entities, Stores, Packages, Enums ... */

export const metadata: Metadata = {
  title: 'Страница не найдена',
  description: 'Текущая страница не существует в реестре сервиса',
}

/**
 * @return {React.ReactNode} Сформированные DOM узлы.
 */
const NotFoundPage: React.FC = (): React.ReactElement => {

  return (
      <div className="layout-px title-heading text-center flex flex-col items-center justify-center mt-5 md:mt-10 h-full">
        <div className="relative w-72 sm:w-xs mb-5">
          <Image
              className="dark:block hidden"
              src="/img/placeholder/error-dark.png"
              alt="Страница не найдена"
          />
          <Image
              className="dark:hidden block"
              src="/img/placeholder/error.png"
              alt="Страница не найдена"
          />
        </div>
        <div className="space-y-2 text-center">
          <h2 className="text-3xl font-bold leading-none text-foreground">
              Страница не найдена
          </h2>
          <div className="text-gray-400 text-sm">
              Упс, это так неловко. Похоже, страница, которую вы искали, не найдена
          </div>
        </div>
        <Button
            href={'/'}
            className="mt-4"
            variant="secondary"
            size="oblong-1.5"
        >
          Переместиться на главную
        </Button>
      </div>
  );
};

export default NotFoundPage;