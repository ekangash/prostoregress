'use client'
import React, {FunctionComponent, MouseEvent, useState, useRef, useCallback} from 'react';
import {cn} from "@/packages/utils";
import {Button} from "@/components/shared/button/Button";
import {ArrowLeft, ArrowRight} from "lucide-react";
import "@/components/shared/scrolling-carousel/scrolling-carousel.scss"

export interface SliderProps {
	children: React.ReactNode;
	className?: string;
	showIcons?: boolean;
	useScrollbar?: boolean;
	triggerClickOn?: number;
}

export type Arrows = {
	left: boolean;
	right: boolean;
};

export enum SlideDirection {
	Right = -1,
	Left = 1,
}

export function getOuterWidth(el: HTMLElement) {
	const style = getComputedStyle(el);

	return (
		el.offsetWidth +
		(parseInt(style.marginLeft, 10) || 0) +
		(parseInt(style.marginRight, 10) || 0)
	);
}

/**
 *
 * @param userProps
 *
 * @constructor
 */
export const ScrollingCarousel: FunctionComponent<SliderProps> = ({
	children = [],
	className = '',
	showIcons = false,
	useScrollbar = false,
	triggerClickOn = 3,
}: SliderProps,) => {
	const slider = useRef<HTMLDivElement>(null);
	const [isDown, setIsDown] = useState(false);
	const [position, setPosition] = useState({startX: 0, scrollLeft: 0});

	const showArrows = (): Arrows => {
		const sliderElement = slider.current;

		return {
			left: !!sliderElement && sliderElement.scrollLeft > 0,
			right: !!sliderElement && sliderElement.scrollWidth > sliderElement.scrollLeft + sliderElement.offsetWidth,
		};
	};
	const [showArrow, setShowArrow] = useState<Arrows>(showArrows());

	const onScroll = (_: Event) => {
		setShowArrow(showArrows());
	};

	const ref = useCallback((node) => {
			if (node !== null) {
				Object.defineProperty(slider, 'current', { value: node });
				setShowArrow(showArrows());
				node.addEventListener('scroll', onScroll);
			}
		},
		[slider, children],
	);

	/**
	 * @param e
	 */
	const mouseDown = (e: MouseEvent) => {
		setIsDown(true);
		setPosition({
			startX: e.pageX - slider.current!.offsetLeft,
			scrollLeft: slider.current!.scrollLeft,
		});
	};

	/**
	 * @param _
	 */
	const mouseUp = (_: MouseEvent) => {
		setIsDown(false);
		setShowArrow(showArrows());
		slider.current!.classList.remove('scrolling-carousel-sliding');
	};

	/**
	 * @param e
	 */
	const mouseMove = (e: MouseEvent) => {
		if (!isDown) return;
		e.preventDefault();
		const eventPosition = e.pageX - slider.current!.offsetLeft;
		const slide = eventPosition - position.startX;

		if (Math.abs(slide) > triggerClickOn) {
			slider.current!.classList.add('scrolling-carousel-sliding');
		}
		slider.current!.scrollLeft = position.scrollLeft - slide;
	};

	/**
	 * @param direction
	 */
	const calculateSlideAmount = (direction: SlideDirection): number => {
		const _slider = slider.current!;
		const currentView = direction === SlideDirection.Left ? _slider.scrollLeft + _slider.offsetWidth : _slider.scrollLeft;

		const childNodes = Array.from(_slider.children) as HTMLElement[];
		let nodeWidthSum = 0;

		for (const node of childNodes) {
			const nodeWidth = getOuterWidth(node);
			nodeWidthSum += nodeWidth;

			if (nodeWidthSum >= currentView) {
				const showingPart = direction === SlideDirection.Left ? nodeWidthSum - currentView : nodeWidth;

				return (_slider.offsetWidth - showingPart) * direction;
			}
		}

		return _slider.offsetWidth;
	};

	/**
	 * @param direction
	 */
	const slide = (direction: SlideDirection) => {
		const slideAmount = calculateSlideAmount(direction);
		const start = slider.current!.scrollLeft;

		smoothHorizontalScroll(500, slideAmount, start);
	};

	/**
	 * @param time
	 * @param amount
	 * @param start
	 */
	const smoothHorizontalScroll = (time: number, amount: number, start: number) => {
		let curTime = 0;

		for (let scrollCounter = 0; curTime <= time; scrollCounter++) {
			window.setTimeout(smoothHorizontalScrollBehavior, curTime, (scrollCounter * amount) / 100 + start);
			curTime += time / 100;
		}
	};

	/**
	 * @param amount
	 */
	const smoothHorizontalScrollBehavior = (amount: number) => {
		slider.current!.scrollLeft = amount;
	};

	return (
		<>
			<div
				ref={ref}
				onMouseDown={mouseDown}
				onMouseLeave={mouseUp}
				onMouseUp={mouseUp}
				onMouseMove={mouseMove}
				className={cn(
					'scrolling-carousel', {
						"scrolling-carousel-scrollbar": useScrollbar
					}, className
				)}
			>
				{children}
			</div>
			{showIcons && (
				<div className="flex items-center justify-center mt-5 space-x-2">
					<Button
						variant="secondary"
						size="square-1.5"
						onClick={() => {
							slide(SlideDirection.Right);
						}}
						disabled={!showArrow.left}
					>
						<ArrowLeft className="h-5 w-5" />
					</Button>
					<Button
						variant="secondary"
						size="square-1.5"
						onClick={() => {
							slide(SlideDirection.Left);
						}}
						disabled={!showArrow.right}
					>
						<ArrowRight className="h-5 w-5" />
					</Button>
				</div>
			)}
		</>
	);
};