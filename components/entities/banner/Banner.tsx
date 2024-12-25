/** 1 Node - Modules, Components, Hooks, Icons */
import React from "react";
import {Send, ExternalLink} from "lucide-react";

/** 2 App - Components, Hooks */
import {Video} from "@/components/shared/video/Video";
import {Icon} from "@/components/shared/icon/Icon";

/** 3 Entities, Stores, Packages, Enums ... */
import {cn} from "@/packages/utils";

interface BannerProps {
    className?: string;
}

/**
 * @return {React.ReactElement} Сформированный DOM узел.
 */
export const Banner: React.FC<BannerProps> = ({ className = '' }): React.ReactElement => {

    return (
        <div className={cn('flex w-full flex-col items-center justify-center gap-5 lg:flex-row md:items-center   lg:gap-10 xl:gap-20', className)}>
            <div className="flex w-full flex-col gap-5 text-start max-w-xl lg:gap-10">
                <div className="flex justify-center items-center">
                    <div className="flex flex-col items-center w-full text-center max-w-md">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold">
                            Сеансы регрессивного гипноза
                        </h2>
                        <p className="text-sm rounded-md px-3 py-0.5 mt-3 text-minor">
                            Как вам идея, освоить техники работы с подсознанием
                            и добиваться в жизни всего, чего захочешь.
                        </p>
                        <a
                            className="mt-6 whitespace-nowrap dark:bg-secondary bg-secondary-foreground/70 hover:bg-secondary-foreground/90 duration-300 px-10 py-6 text-white rounded-2xl flex items-center cursor-pointer justify-center transition-all focus-visible:outline-none outline-none focus:outline-none disabled:pointer-events-none disabled:opacity-50 gap-1.5 font-medium"
                            href="https://t.me/alenkaproregress"
                            target="_blank"
                        >
                            <Icon path={Send} />
                            Записаться через Telegram
                            <Icon path={ExternalLink} size={4} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}