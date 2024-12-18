/** 1 Node - Modules, Components, Hooks, Icons */
/** 2 App - Components, Hooks */
/** 3 Entities, Stores, Packages, Enums ... */
import React from "react";
import {Video} from "@/components/shared/video/Video";
import {Icon} from "@/components/shared/icon/Icon";
import {Send} from "lucide-react";
import {ExternalLink} from "lucide-react";
import {cn} from "@/packages/utils";

interface BannerProps {
    className?: string;
}

/**
 * @return {React.ReactElement} Сформированный DOM узел.
 */
export const Banner: React.FC<BannerProps> = ({ className = '' }): React.ReactElement => {

    return (
        <div className={cn('flex w-full flex-col items-center justify-center gap-5 rounded-3xl lg:flex-row bg-secondary md:items-center p-5 lg:gap-10 xl:gap-20', className)}>
            <Video
                as="div"
                className="aspect-w-16 aspect-h-4 h-40 max-w-xs w-full"
                rounded="3xl"
                src="/video/girl-meditating-in-yoga-pose-at-sunset.mp4"
            />
            <div className="flex w-full flex-col gap-5 text-start max-w-xs lg:gap-10">
                <div className="flex justify-center items-center">
                    <div className="flex flex-col items-center space-y-2 w-full text-center max-w-sm">
                        <h2 className="text-2xl md:text-4xl lg:text-5xl font-extrabold">
                            Сеансы регрессивного гипноза
                        </h2>
                        <p className="text-sm rounded-md px-3 py-0.5">
                            Как вам идея, освоить техники работы с подсознанием
                            и добиваться в жизни всего, чего захочешь.
                        </p>
                        <a
                            className="whitespace-nowrap dark:bg-secondary bg-secondary-foreground/70 hover:bg-secondary-foreground/90 duration-300 px-10 py-6 text-white rounded-2xl flex items-center cursor-pointer justify-center transition-all focus-visible:outline-none outline-none focus:outline-none disabled:pointer-events-none disabled:opacity-50 gap-1.5 font-medium"
                            href="https://t.me/ekangash"
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

    return (
        <Video
            as="section"
            className={cn('aspect-w-16 aspect-h-5 h-xs', className)}
            rounded="3xl"
            src="/video/exploding-ink-underwater.mp4"
        >
            <div className="flex justify-center items-center p-4">
                <div className="flex flex-col items-center space-y-2 w-full text-center max-w-sm">
                    <h2 className="text-2xl md:text-5xl font-extrabold text-white">
                        Сеансы регрессивного гипноза
                    </h2>
                    <p className="text-white text-sm rounded-md px-3 py-0.5">
                        Как вам идея, освоить техники работы с подсознанием
                        и добиваться в жизни всего, чего захочешь.
                    </p>
                    <a
                        className="whitespace-nowrap dark:bg-secondary bg-secondary-foreground/70 hover:bg-secondary-foreground/90 duration-300 px-10 py-6 text-white rounded-2xl flex items-center cursor-pointer justify-center transition-all focus-visible:outline-none outline-none focus:outline-none disabled:pointer-events-none disabled:opacity-50 gap-1.5 font-medium"
                        href="https://t.me/ekangash"
                        target="_blank"
                    >
                        <Icon path={Send} />
                        Записаться через Telegram
                        <Icon path={ExternalLink} size={4} />
                    </a>
                </div>
            </div>
        </Video>
    )
}