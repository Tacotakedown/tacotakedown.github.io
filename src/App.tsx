import {Route, Routes} from "react-router-dom";
import "./App.css";
import {FloatingDock} from "@/components/floatingDock/floatingDock";
import {HomeDockItems} from "@/components/floatingDock/HomeDock";
import {Home, Skills, Contact, Projects} from "./Pages/pages";
import {HeroHighlight} from "./components/heroHighlight/HeroHighlight";
import AnimatedCursor from "react-animated-cursor";
import {Modal} from "./components/modal/Modal";
import {useState, useEffect} from "react";

function App() {

    const [favIcon, setFavIcon] = useState<string>("");

    const updateFavicon = (url: string) => {
        const link: HTMLLinkElement =
            document.querySelector("link[rel='icon']") ||
            document.createElement("link");
        link.rel = "icon";
        link.href = url;
        document.head.appendChild(link);
    };

    useEffect(() => {
        updateFavicon(favIcon);
    }, [favIcon]);

    return (
        <HeroHighlight>
            <AnimatedCursor
                clickables={[".clickable"]}
                innerSize={8}
                outerSize={35}
                innerScale={1}
                outerScale={2}
                outerAlpha={0}
                showSystemCursor={false}
                // hasBlendMode={true}
                outerStyle={{
                    border: "3px solid var(--cursor-color)",
                }}
                innerStyle={{
                    backgroundColor: "var(--cursor-color)",
                }}
            />
            <div className="flex flex-col justify-center">
                <div className="flex items-center justify-center h-screen w-full">
                    <Routes>
                        <Route path="/" element={<Home favIconCallback={setFavIcon}/>}/>
                        <Route path="/skills" element={<Skills/>}/>
                        <Route path='/projects' element={<Projects/>}/>
                        <Route
                            path="contact"
                            element={
                                <Modal>
                                    <Contact/>
                                </Modal>
                            }
                        />
                    </Routes>
                </div>

                <FloatingDock
                    desktopClassName="sticky bottom-0 -mt-20"
                    items={HomeDockItems}
                />
            </div>
        </HeroHighlight>
    );
}

export default App;
