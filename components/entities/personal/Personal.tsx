/** 1 Node - Modules, Components, Hooks, Icons */
import React from "react";

/** 2 App - Components, Hooks */
import {Video} from "@/components/shared/video/Video";
import {Image} from "@/components/shared/image/Image";
import {Button} from "@/components/shared/button/Button";

/** 3 Entities, Stores, Packages, Enums ... */
import {cn} from "@/packages/utils";

interface PersonalProps {
    className?: string;
}

/**
 * @return {React.ReactElement} Сформированный DOM узел.
 */
export const Personal: React.FC<PersonalProps> = ({ className }): React.ReactElement => {

    return (
        <>
            <Video
                as="section"
                className={cn('aspect-w-16 aspect-h-5 h-xs mb-16', className)}
                rounded="3xl"
                src="/video/abstract-pattern-ink-abstract-blue-background-colors.mp4"
            >
                <div className="flex flex-col lg:flex-row items-center p-4">
                    <div className="flex flex-col items-center space-y-1 w-full text-center">
                        <h2 className="text-4xl sm:text-5xl font-extrabold text-white">
                            Алёна Малькова
                        </h2>
                        <p className="text-white text-sm bg-foreground/80 dark:bg-secondary rounded-md px-3 py-0.5">
                            Любую проблему можно решить, помните об этом!
                        </p>
                    </div>
                    <div className="flex justify-center items-end w-full h-full relative">
                        <Image
                            className="h-80 lg:h-96 -mb-4"
                            src="/img/girl.png"
                        />
                        <div data-aos="fade-up" data-aos-delay="300" data-aos-once="true" className="absolute left-10 top-52 floating-4 aos-init aos-animate">
                            <Button
                                variant="transparent"
                                text="sm"
                            >
                                Классический гипноз
                            </Button>
                        </div>
                        <div data-aos="fade-up" data-aos-delay="400" data-aos-once="true" className="absolute top-32 right-16 floating aos-init aos-animate">
                            <Button
                                variant="transparent"
                                text="sm"
                            >
                                Экзорегресс
                            </Button>
                        </div>

                        <div data-aos="fade-up" data-aos-delay="400" data-aos-once="true" className="absolute bottom-28 right-8 floating aos-init aos-animate">
                            <Button
                                variant="transparent"
                                text="sm"
                            >
                                НЛП
                            </Button>
                        </div>

                        <div data-aos="fade-up" data-aos-delay="500" data-aos-once="true" className="absolute left-10 floating aos-init aos-animate">
                            <Button
                                variant="transparent"
                                text="sm"
                            >
                                Регрессивный гипноз
                            </Button>
                        </div>
                        <div data-aos="fade-up" data-aos-delay="600" data-aos-once="true" className="absolute bottom-10 right-8 floating-4 aos-init aos-animate">
                            <Button
                                variant="transparent"
                                text="sm"
                            >
                                Самогипноз
                            </Button>
                        </div>
                    </div>
                </div>
            </Video>
        </>
    );
}