/** 1 Node - Modules, Components, Hooks, Icons */
import React from "react";

/** 2 App - Components, Hooks */
import {Dialog} from "@/components/shared/dialog/Dialog";
import {Button} from "@/components/shared/button/Button";

/** 3 Entities, Stores, Packages, Enums ... */
import {Image} from "@/components/shared/image/Image";


/**
 * @interface CastsButtonsReceptionProps
 */
interface CastsButtonsReceptionProps {
    title: string;
    description: string;
    cover: string;
    preview: string;
}

/**
 * @return {React.ReactElement} Сформированный DOM узел.
 */
export const DocumentsDialogView: React.FC<CastsButtonsReceptionProps> = ({ title,description, preview, cover }): React.ReactElement => {

    return (
        <Dialog>
            <Dialog.Trigger asChild>
                <Button
                    variant="secondary"
                    size="oblong-2"
                >
                    Читать подробнее
                </Button>
            </Dialog.Trigger>
            <Dialog.Content className="sm:max-w-xl">
                <Dialog.Header>
                    <Dialog.Title>
                        <p className="text-2xl font-bold link-title line-clamp-2">
                            {title}
                        </p>
                    </Dialog.Title>
                </Dialog.Header>
                <Dialog.Scroll className="pb-5">
                    <Image
                        className="w-full aspect-16/9 mb-4"
                        src={cover}
                        alt={title}
                        width={450}
                        height={230}
                        rounded="2xl"
                    />
                    <div className="text-left text-sm font-normal text-minor transition-all mb-2 text-minor">
                        {description}
                    </div>
                    <div className="text-left text-md font-normal transition-all">
                        {preview}
                    </div>
                </Dialog.Scroll>
            </Dialog.Content>
        </Dialog>
    );
}