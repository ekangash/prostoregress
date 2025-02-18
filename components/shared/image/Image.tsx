/** 1 Node - Modules, Components, Hooks, Icons */
import React from 'react';
import {cn} from "@/packages/utils";

/** 2 App - Components, Hooks */
import ImageNext from 'next/image';
import {ImagePlaceholder} from "@/components/shared/image/placeholder/ImagePlaceholder";
import {Image as ImageIcon} from "lucide-react";

/** 3 Entities, Stores, Packages, Enums ... */
import {str, fls} from "data-support"
import {defailtDarkBlur} from "@/components/shared/image/ImageBlur";

/**
 * @interface ImageProps
 */
interface ImageProps {
    src: string;
    alt?: string;
    width?: number;
    height?: number;
    quality?: number;
    sizes?: string;
    placeholder?: "blur" | "empty" | undefined;
    fill?: boolean;
    contentEditable?: boolean;
    scale?: boolean;
    rounded?: string;
    domain?: string;
    icon?: React.FC<React.SVGProps<SVGSVGElement>>;
    className?: string;
}

/**
 * Использовать домен для медиа изображений.
 *
 *
 * @param {string} src Источник изображения
 * @param {string} domain Домен
 *
 * @return {string}
 */
export const prepareSrcWithDomainForMediaPath = (src: string, domain: string = ''): string => {
    return src?.includes('/media/') && src[0] === '/' ? `${domain}${src}` : src;
};

/**
 * @return {React.ReactNode} Сформированные DOM узлы.
 */
export const Image: React.FC<ImageProps> = ({
    src,
    alt = '',
    width = 1920,
    height = 1080,
    quality = 60,
    sizes= '100vw',
    placeholder= 'blur',
    fill = false,
    scale = false,
    rounded= 'none',
    domain = process.env.NEXT_PUBLIC_API_HOST,
    icon = ImageIcon,
    contentEditable = false,
    className = ''
}): React.ReactElement => {
    const classes = cn({
        [`rounded-${rounded}`]: str.contains(rounded),
        ['hover:scale-y-105 hover:scale-x-105 translate-x translate-y skew-x skew-y scale-x scale-y transition-transform duration-300']: scale,
    }, 'object-cover object-center z-[-1] w-full h-full', className);

    const srcIsValid = str.contains(src) && (fls.srcImageHasAllowedMimetype(src) || src.includes('blob:'));
    const imgSrc = prepareSrcWithDomainForMediaPath(src, domain);

    return srcIsValid ? (
        <ImageNext
            src={imgSrc}
            blurDataURL={defailtDarkBlur}
            {...(fill ? { fill } : { height, width })}
            quality={quality}
            className={classes}
            alt={alt}
            sizes={sizes}
            contentEditable={contentEditable}
            placeholder={placeholder}
            loading='lazy'
        />
    ) : (
        <ImagePlaceholder
            path={icon}
            className={classes}
        />
    );
};