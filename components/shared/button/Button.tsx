/** 1 Node - Modules, Components, Hooks, Icons */
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import NextLink from "next/link";
import {Loader} from "lucide-react";

/** 2 App - Components, Hooks */
import {Icon, IconProps} from "@/components/shared/icon/Icon";
import {AppExceptionHandler} from "@/components/app/exception/AppExceptionHandler";

/** 3 Entities, Stores, Packages, Enums ... */
import { cn } from "@/packages/utils"
import {obj, str} from "data-support";


const buttonVariants = cva(
    `flex items-center cursor-pointer justify-center transition-all cursor-pointer 
  focus-visible:outline-none outline-none focus:outline-none disabled:pointer-events-none disabled:opacity-50 gap-1.5 font-medium`,
    {
        variants: {
            variant: {
                primary: "text-white shadow bg-primary hover:bg-primary/90",
                destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
                outline: "border border-input border-gray-200 hover:border-gray-100 bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground",
                secondary: "bg-secondary hover:bg-secondary-hoverable text-accent-foreground",
                accent: "bg-primary-foreground hover:bg-accent text-accent-foreground",
                transparent: "text-white/90 hover:text-white bg-secondary/60 hover:bg-secondary-hoverable/50",
                ghost: "hover:bg-secondary text-accent-foreground",
                link: "link-title underline-offset-4",
                none: "",
            },
            feature: {
                scale: 'active:scale-y-95 active:scale-x-95',
                none: '',
            },
            text: {
                tiny: 'text-tiny',
                xs: 'text-xs',
                sm: 'text-sm',
                md: 'text-md',
                lg: 'text-lg',
                none: '',
            },
            size: {
                oblong: "px-3 py-1",
                'oblong-1.5': "px-3 py-1.5",
                'oblong-2': "px-4 py-2",
                'oblong-2.5': "px-4 py-2.5",
                'oblong-3': "px-5 py-3",
                'square-0.5': "p-0.5",
                square: "p-1",
                'square-1.5': "p-1.5",
                'square-2': "p-2",
                none: "",
            },
            rounded: {
                'none': '',
                'md': 'rounded-md',
                'lg': 'rounded-lg',
                'xl': 'rounded-xl',
            }
        },
        defaultVariants: {
            variant: "ghost",
            size: "oblong-1.5",
            text: "xs",
            feature: "none",
            rounded: "lg",
        },
    }
)

/**
 * @interface ButtonProps
 */
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
    asChild?: boolean;
    asWrap?: string;
    loading?: boolean;
    disabled?: boolean;
    href?: string;
    target?: string;
    icon?: IconProps;
}

/**
 * @returns {React.ReactElement} Сформированные DOM узлы.
 */
const Button: React.ForwardRefExoticComponent<ButtonProps> = React.forwardRef<HTMLButtonElement, ButtonProps>(({
   className,
   variant,
   size,
   text,
   feature,
   rounded,
   disabled = false,
   href = '',
   target = '',
   children,
   icon = null,
   onClick = null,
   asWrap = 'button',
   asChild = false,
   loading = false,
   ...props
}, ref) => {
    let hrefIsDefined = str.contains(href) && href;
    let Comp = asChild ? Slot : (hrefIsDefined ? NextLink : asWrap);

    /**
     * Промежуточное событие 'onClick' кнопки.
     *
     * @param {Event} event Событие клика.
     *
     * @return {Promise<void>}
     */
    const onClickMiddleware = async (event): Promise<void> =>  {
        try {
            if (typeof onClick === 'function') {
                await onClick(event);
            }
        } catch (exception) {
            (new AppExceptionHandler()).handle(exception);
        }
    }

    return (
        <Comp
            className={cn(buttonVariants({ variant, size, text, rounded, feature }), className)}
            ref={ref}
            {...Comp === 'button' && { disabled }}
            onClick={onClick}
            {...(typeof onClick === 'function' && { onClick: onClickMiddleware })}
            {...(hrefIsDefined && { href, target })}
            {...props}
        >
            {loading ? (
                <Icon size={4} path={Loader} variant="spinner" />
            ) : obj.isset(icon, 'path') && (
                <Icon size={4} color="secondaryForeground" {...icon as IconProps} />
            )}
            {children}
        </Comp>
    );
});
Button.displayName = "Button"

export { Button, buttonVariants };