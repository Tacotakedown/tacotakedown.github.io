import {TextHoverEffect} from "@/components/textHover/TextHover";
import usePageSize from "@/hooks/UsePageSize";
import React, {useState, useEffect} from "react";

type HomeProps = {
    favIconCallback: React.Dispatch<React.SetStateAction<string>>
}

const Home: React.FC<HomeProps> = (props: HomeProps) => {
    const size = usePageSize();
    const [descriptionText, setDescriptionText] = useState("hide-description");
    const [coverImageUrl, setCoverImageUrl] = useState("");

    const fetchCoverImage = async (): Promise<string> => {
        const response = await fetch('https://api.github.com/users/tacotakedown');
        const json = await response.json();

        return json.avatar_url;
    }

    useEffect(() => {
        setTimeout(() => {
            setDescriptionText("text-appear");
        }, 1000);

        fetchCoverImage().then((url) => {
            setCoverImageUrl(url)
            props.favIconCallback(url)
        });

    }, [props]);


    return (
        <div className="flex flex-col items-center justify-center overflow-hidden h-screen w-full">
            <img
                src={coverImageUrl}
                alt="cover"
                className={`w-60 rounded-lg shadow-sky-700 shadow-2xl ${descriptionText}`}
            />

            {size.width > 768 ? (
                <>
                    <TextHoverEffect wrap={false} text="Taco"/>
                    <div
                        className={`text-2xl pointer-events-none select-none text-center text-sky-700 ${descriptionText}`}
                    >
                        Full-Stack Developer
                    </div>
                </>
            ) : (
                <>
                    <TextHoverEffect wrap text="Taco"/>
                    <div
                        className={`text-2xl pointer-events-none select-none text-center text-sky-700 ${descriptionText}`}
                    >
                        Full-Stack Developer
                    </div>
                </>
            )}
        </div>
    );
}

export default Home;
