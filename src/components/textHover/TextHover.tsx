"use client";
import {useRef, useEffect, useState} from "react";
import {motion} from "framer-motion";

export const TextHoverEffect = ({
                                    text,
                                    wrap,
                                    duration,
                                }: {
    text: string;
    wrap: boolean;
    duration?: number;
    automatic?: boolean;
}) => {
    const svgRef = useRef<SVGSVGElement>(null);
    const [cursor, setCursor] = useState({x: 0, y: 0});
    const [hovered, setHovered] = useState(false);
    const [maskPosition, setMaskPosition] = useState({cx: "50%", cy: "50%"});

    useEffect(() => {
        if (svgRef.current && cursor.x !== null && cursor.y !== null) {
            const svgRect = svgRef.current.getBoundingClientRect();
            const cxPercentage = ((cursor.x - svgRect.left) / svgRect.width) * 100;
            const cyPercentage = ((cursor.y - svgRect.top) / svgRect.height) * 100;
            setMaskPosition({
                cx: `${cxPercentage}%`,
                cy: `${cyPercentage}%`,
            });
        }
    }, [cursor]);

    const textLines = wrap ? text.split(" ") : [text];

    return (
        <svg
            ref={svgRef}
            width="90%"
            height={`90%`}
            viewBox="0 0 300 100"
            xmlns="http://www.w3.org/2000/svg"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onMouseMove={(e) => setCursor({x: e.clientX, y: e.clientY})}
            className="select-none home-text"
        >
            <defs>
                <linearGradient
                    id="textGradient"
                    gradientUnits="userSpaceOnUse"
                    cx="50%"
                    cy="50%"
                    r="25%"
                >
                    {hovered && (
                        <>
                            <stop offset="0%" stopColor={"var(--sky-700)"}/>
                            <stop offset="25%" stopColor={"var(--sky-700)"}/>
                            <stop offset="50%" stopColor={"var(--sky-700)"}/>
                            <stop offset="75%" stopColor={"var(--sky-700)"}/>
                            <stop offset="100%" stopColor={"var(--sky-700)"}/>
                        </>
                    )}
                </linearGradient>

                <motion.radialGradient
                    id="revealMask"
                    gradientUnits="userSpaceOnUse"
                    r="20%"
                    animate={maskPosition}
                    transition={{duration: duration ?? 0, ease: "easeOut"}}
                >
                    <stop offset="0%" stopColor="white"/>
                    <stop offset="100%" stopColor="black"/>
                </motion.radialGradient>
                <mask id="textMask">
                    <rect
                        x="0"
                        y="0"
                        width="100%"
                        height="100%"
                        fill="url(#revealMask)"
                    />
                </mask>
            </defs>

            <text
                x="50%"
                y="50%"
                textAnchor="middle"
                dominantBaseline="middle"
                strokeWidth="0.5"
                className={`font-[helvetica] font-bold stroke-neutral-200 fill-transparent  ${
                    wrap ? "text-6xl" : "text-2xl"
                }`}
                style={{opacity: hovered ? 0.7 : 0}}
            >
                {textLines.map((word, index) => (
                    <tspan key={index} x="50%" dy={index === 0 ? 0 : "1.2em"}>
                        {word}
                    </tspan>
                ))}
            </text>

            <motion.text
                x="50%"
                y="50%"
                textAnchor="middle"
                dominantBaseline="middle"
                strokeWidth="0.5"
                className={`font-[helvetica] font-bold fill-transparent  ${
                    wrap ? "text-6xl" : "text-2xl"
                } stroke-neutral-200`}
                initial={{strokeDashoffset: 1000, strokeDasharray: 1000}}
                animate={{
                    strokeDashoffset: 0,
                    strokeDasharray: 1000,
                }}
                transition={{
                    duration: 4,
                    ease: "easeInOut",
                }}
            >
                {textLines.map((word, index) => (
                    <tspan key={index} x="50%" dy={index === 0 ? 0 : "1.2em"}>
                        {word}
                    </tspan>
                ))}
            </motion.text>

            <text
                x="50%"
                y="50%"
                textAnchor="middle"
                dominantBaseline="middle"
                stroke="url(#textGradient)"
                strokeWidth="0.5"
                mask="url(#textMask)"
                className={`font-[helvetica] font-bold fill-transparent ${
                    wrap ? "text-6xl" : "text-2xl"
                }`}
            >
                {textLines.map((word, index) => (
                    <tspan key={index} x="50%" dy={index === 0 ? 0 : "1.2em"}>
                        {word}
                    </tspan>
                ))}
            </text>
        </svg>
    );
};
