import {IoIosHome, IoIosMail} from "react-icons/io";
import {
    FaGithub,
    // FaLaptopCode,
    FaDiscord, FaRust
} from "react-icons/fa";

import {type FloatingDockItems} from "./floatingDock";


export const HomeDockItems: FloatingDockItems[] = [
    {
        title: "Home",
        icon: (
            <IoIosHome
                className="text-sky-700 w-full h-full"
                style={{filter: "drop-shadow(0px 0px 7px rgba(3,105,161,0.9))"}}
            />
        ),
        href: "/",
        redirect: false,
    },


    {
        title: "Skills",
        icon: (
            <FaRust
                className="text-sky-700 w-full h-full"
                style={{filter: "drop-shadow(0px 0px 7px rgba(3,105,161,0.9))"}}
            />
        ),
        href: "/skills",
        redirect: false,
    },


    // {
    //     title: "Projects",
    //     icon: (
    //         <FaLaptopCode
    //             className="text-sky-700 w-full h-full"
    //             style={{filter: "drop-shadow(0px 0px 7px rgba(3,105,161,0.9))"}}
    //         />
    //     ),
    //     href: "/projects",
    //     redirect: false,
    // },

    {
        title: "Contact",
        icon: (
            <IoIosMail
                className="text-sky-700 w-full h-full"
                style={{filter: "drop-shadow(0px 0px 7px rgba(3,105,161,0.9))"}}
            />
        ),
        href: "/contact",
        redirect: false,
    },

    {
        title: "GitHub",
        icon: (
            <FaGithub
                className="text-sky-700 w-full h-full"
                style={{filter: "drop-shadow(0px 0px 7px rgba(3,105,161,0.9))"}}
            />
        ),
        href: "https://www.github.com/tacotakedown",
        redirect: true,
    },
    {
        title: "Discord",
        icon: (
            <FaDiscord
                className="text-sky-700 w-full h-full"
                style={{filter: "drop-shadow(0px 0px 7px rgba(3,105,161,0.9))"}}
            />
        ),
        href: "https://www.github.com/tacotakedown",
        redirect: true,
    },


];
