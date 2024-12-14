import {cn} from "@/lib/utils";
import React, {useEffect} from "react";

type CardProps = {
    items: {
        imageUrl: string,
        name: string,
    }[];
    className?: string;
}

export const InfiniteMovingCards: React.FC<CardProps> = ({items, className}: CardProps): React.ReactNode => {

    const containerRef = React.useRef<HTMLDivElement>(null);
    const scrollerRef = React.useRef<HTMLUListElement>(null);

    useEffect(() => {
        const handleResize = () => {
            const containerWidth = containerRef.current?.offsetWidth;
            const listWidth = scrollerRef.current?.scrollWidth;
            const animationDistance = listWidth! - containerWidth!;
            containerRef.current?.style.setProperty("--container-width", `${-animationDistance}px`);
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [containerRef, scrollerRef]);

    return (
        <div
            ref={containerRef}
            id="movingContainer"
            className={cn(
                "relative z-20  max-w-full overflow-hidden  [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
                className
            )}
        >
            <ul
                ref={scrollerRef}
                className={cn(
                    "flex min-w-full shrink-0 gap-4 py-4 w-1/2 flex-nowrap",
                    "animate-scroll",
                    "hover:[animation-play-state:paused]"
                )}
            >
                {items.map((item) => (
                    <li
                        className="w-[150px] flex items-center justify-center max-w-full relative rounded-2xl border border-b-0 flex-shrink-0 border-sky-700 px-8 py-6"
                        style={{
                            background: "linear-gradient(180deg, rgba(7, 89, 133,0.5), rgba(12, 74, 110,0.5))"
                        }}
                        key={item.name}
                    >
                        <div className={'h-full flex flex-col justify-around items-center'}>

                            <img src={item.imageUrl} className="w-20" alt={item.name}/>
                            <span className="text-center pt-2 text-md text-gray-400 font-normal">
                                {item.name}
                              </span>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};
