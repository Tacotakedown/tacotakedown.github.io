import * as React from "react";
import {InfiniteMovingCards} from "@/components/movingCards/movingCards.tsx";

function Skills(): React.ReactNode {

    const OperatingSystems = [{
        imageUrl:
            "https://static-00.iconduck.com/assets.00/archlinux-icon-512x512-4qh8bdwi.png",
        name: "Arch Linux",
    }, {
        imageUrl:
            "https://upload.wikimedia.org/wikipedia/commons/c/c1/Windows_icon_logo.png",
        name: "Windows",
    }, {
        imageUrl:
            "https://static-00.iconduck.com/assets.00/distributor-logo-endeavouros-icon-2048x1707-6lrk99z2.png",
        name: "EndeavourOS",
    }, {
        imageUrl: "https://img.icons8.com/ios7/600/FFFFFF/mac-os.png",
        name: "MacOS",
    }]

    const CodingLanguages = [{
        imageUrl:
            "https://cdn-icons-png.flaticon.com/512/6132/6132222.png",
        name: "C++",
    }, {
        imageUrl:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Rustacean-orig-noshadow.svg/1200px-Rustacean-orig-noshadow.svg.png",
        name: "Rust",
    }, {
        imageUrl:
            "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/c-program-icon.png",
        name: "C",
    }, {
        imageUrl: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/c-sharp-programming-language-icon.png",
        name: "C#",
    }, {
        imageUrl: "https://static-00.iconduck.com/assets.00/typescript-icon-icon-2048x2048-2rhh1z66.png",
        name: "Typescript",
    }, {
        imageUrl: "https://img.icons8.com/?size=512&id=44442&format=png",
        name: "Go",
    }, {
        imageUrl: "https://cdn3.iconfinder.com/data/icons/logos-and-brands-adobe/512/267_Python-512.png",
        name: "Python",
    }, {
        imageUrl: "https://cdn-icons-png.flaticon.com/512/732/732212.png",
        name: "HTML",
    }, {
        imageUrl: "https://cdn-icons-png.flaticon.com/512/5968/5968358.png",
        name: "Sass",
    }, {
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/c/cf/Lua-Logo.svg",
        name: "Lua",
    }]

    const FrameworksUtils = [{
        imageUrl:
            "https://static-00.iconduck.com/assets.00/cmake-icon-512x511-fvtgv3ne.png",
        name: "CMake",
    }, {
        imageUrl:
            "https://static-00.iconduck.com/assets.00/dotnet-icon-2048x2048-6nj1im30.png",
        name: ".NET",
    }, {
        imageUrl:
            "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png",
        name: "ReactJS",
    }, {
        imageUrl: "https://www.solidjs.com/img/logo/without-wordmark/logo.png",
        name: "SolidJS",
    }, {
        imageUrl: "https://static-00.iconduck.com/assets.00/tailwind-css-icon-2048x1229-u8dzt4uh.png",
        name: "Tailwind",
    }, {
        imageUrl: "https://www.svgrepo.com/show/374167/vite.svg",
        name: "Vite",
    }, {
        imageUrl: "/coding/qt.png",
        name: "QT",
    }, {
        imageUrl: "https://cdn.worldvectorlogo.com/logos/tauri-1.svg",
        name: "Tauri",
    }, {
        imageUrl: "https://static-00.iconduck.com/assets.00/electron-icon-1889x2048-istwe9sw.png",
        name: "Electron",
    }, {
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/WebAssembly_Logo.svg/1200px-WebAssembly_Logo.svg.png",
        name: "WASM",
    }]

    const IDEs = [{
        imageUrl:
            "https://static-00.iconduck.com/assets.00/clion-icon-512x512-tvyolucv.png",
        name: "CLion",
    }, {
        imageUrl:
            "https://camo.githubusercontent.com/f9deca294ada9b8c90c44376bf217cd49ab665808faac82988739627ca2f8a84/68747470733a2f2f7265736f75726365732e6a6574627261696e732e636f6d2f68656c702f696d672f696465612f52757374526f7665725f69636f6e3235362e737667",
        name: "RustRover",
    }, {
        imageUrl:
            "https://static-00.iconduck.com/assets.00/webstorm-icon-2048x2048-dj0at5b7.png",
        name: "WebStorm",
    }, {
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/JetBrains_Rider_Icon.svg/1200px-JetBrains_Rider_Icon.svg.png",
        name: "Rider",
    }]

    return (

        <div className={`w-screen h-screen overflow-y-scroll flex flex-col items-center justify-center`}>
            <div className=" w-full md:gap-40 flex flex-col md:flex-row items-center justify-center h-[100%]">
                <div className={" md:w-1/3 w-full flex flex-col items-center justify-center"}>
                    <h1 className={"text-3xl text-sky-700"}>Operating Systems</h1>
                    <InfiniteMovingCards items={OperatingSystems}/>
                    <h1 className={"text-3xl text-sky-700"}>Coding Languages</h1>
                    <InfiniteMovingCards items={CodingLanguages}/>
                </div>
                <div className={"md:w-1/3 w-full flex  flex-col items-center justify-center"}>
                    <h1 className={"text-3xl text-sky-700"}>Frameworks / Utils</h1>
                    <InfiniteMovingCards items={FrameworksUtils}/>
                    <h1 className={"text-3xl text-sky-700"}>IDEs</h1>
                    <InfiniteMovingCards items={IDEs}/>
                </div>
            </div>

        </div>);
}

export default Skills;
