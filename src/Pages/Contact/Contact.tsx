import * as React from "react";
import {Input} from "@/components/form/input";
import {Label} from "@/components/form/label";
import {
    ModalTrigger,
    ModalBody,
    ModalContent,
    ModalFooter,
    useModal,
} from "@/components/modal/Modal";
import {cn} from "@/lib/utils";
import {FormEvent} from "react";


function Contact(): React.ReactNode {

    const [messageSent, setMessageSent] = React.useState(false);

    const {setOpen} = useModal();
    const sendToDiscord = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault();
        const form = e.currentTarget as typeof e.currentTarget & {
            name: { value: string };
            email: { value: string };
            message: { value: string };
        };

        const data = {
            content: `Name: ${form.name.value}\nEmail: ${form.email.value}\nMessage: ${form.message.value}`,
        };

        await fetch(
            "https://discord.com/api/webhooks/1299498656684310661/7aqWtXuCUr61jsqhtgHG7lw41LKxcP4rmFxa6nwkEyQbYKIlgOsgQhvfkB-ZOCrdaz8_",
            {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(data),
            }
        );
        setOpen(false);
        setMessageSent(true);
    };

    React.useEffect(() => {
        if (messageSent) {
            setTimeout(() => {
                setMessageSent(false);
            }, 5000)
        }
    }, [messageSent]);


    return (
        <div className=" flex items-center justify-center flex-col">
            <h1 className="text-3xl">Contact</h1>

            {messageSent ? (
                <div>Message Sent!</div>
            ) : (
                <ModalTrigger>
                    <button
                        className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xl font-semibold leading-6  text-white inline-block">
                      <span className="absolute inset-0 overflow-hidden rounded-full">
                        <span
                            className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"/>
                      </span>
                        <div
                            className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-2 px-4 ring-1 ring-white/10 ">
                            <span> Send me a message</span>
                            <svg
                                fill="none"
                                height="16"
                                viewBox="0 0 24 24"
                                width="16"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M10.75 8.75L14.25 12L10.75 15.25"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="1.5"
                                />
                            </svg>
                        </div>
                        <span
                            className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-sky-900/0 via-sky-900/90 to-sky-9000/0 transition-opacity duration-500 group-hover:opacity-40"/>
                    </button>
                </ModalTrigger>
            )}

            <ModalBody>
                <form className="h-full w-full" onSubmit={sendToDiscord}>
                    <ModalContent>
                        <h4 className="text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-8">
                            Contact Me
                        </h4>
                        <div className="flex gap-4 flex-col justify-center items-center">
                            <LabelInputContainer>
                                <Label htmlFor="name">Name</Label>
                                <Input id="name" placeholder="Your Name" required type="text"/>
                            </LabelInputContainer>
                            <LabelInputContainer>
                                <Label htmlFor="email">Contact Email</Label>
                                <Input
                                    id="email"
                                    placeholder="Your Email"
                                    required
                                    type="email"
                                />
                            </LabelInputContainer>
                            <LabelInputContainer>
                                <Label htmlFor="message">Message</Label>
                                <Input
                                    isTextarea
                                    name="message"
                                    placeholder="Your Message"
                                    type="text"
                                    required
                                ></Input>
                            </LabelInputContainer>
                        </div>
                    </ModalContent>
                    <ModalFooter className="gap-4">
                        <button
                            onClick={() => {
                                setOpen(false);
                            }}
                            className="px-2 py-1 bg-gray-200 text-black dark:bg-black dark:border-black dark:text-white border border-gray-300 rounded-md text-sm w-28"
                        >
                            Cancel
                        </button>
                        <button className="p-[3px] relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-sky-400 to-indigo-500 rounded-lg"/>
                            <div
                                className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
                                Submit
                            </div>
                        </button>
                    </ModalFooter>
                </form>
            </ModalBody>
        </div>
    );
}

export default Contact;

const LabelInputContainer = ({
                                 children,
                                 className,
                             }: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <div className={cn("flex flex-col space-y-2 w-full", className)}>
            {children}
        </div>
    );
};

// <form onSubmit={sendToDiscord}>
//           <input type="text" name="name" placeholder="Your Name" required />
//           <input type="email" name="email" placeholder="Your Email" required />
//           <textarea
//             name="message"
//             placeholder="Your Message"
//             required
//           ></textarea>
//           <button type="submit">Send</button>
//         </form>
