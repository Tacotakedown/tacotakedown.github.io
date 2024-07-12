use crate::data_field::*;
use crate::header::*;
use leptos::*;

#[component]
pub fn App() -> impl IntoView {
    view! {
        <main class="">
            <Header/>
            <div class="max-w-[90vw] md:max-w-[60vw]  m-auto">
                <DataField header="About Me".to_string() content=vec!["Full-Stack Software Engineer, proficient in C++, Rust, C#, Python and TypeScript.".to_string(), "Specializing in Backend, Systems, Tooling and website development.".to_string() ]/>
                <DataFieldList header="Languages".to_string() content=vec!["C / C++.".to_string(), "Rust".to_string(),"C#".to_string(), "TypeScript / JavaScript".to_string(), "Python".to_string(), "Go".to_string() ]/>
                <DataFieldList header="Web Frameworks".to_string() content=vec!["React / Preact".to_string(), "SolidJS".to_string(),"Leptos".to_string() ]/>
                <DataFieldList header="Desktop UI Frameworks".to_string() content=vec!["Win32".to_string(), ".NET".to_string(),"Tauri / Electron".to_string() ]/>

                <div class="pt-6 pb-10 flex flex-row items-center justify-center gap-8">
                    <a href="https://discordapp.com/users/279054249919381505" target="_blank">
                        <img class="w-20" src="https://gas-kvas.com/grafic/uploads/posts/2024-01/gas-kvas-com-p-logotip-diskord-prozrachnii-fon-14.png" alt="discord"/>
                    </a>
                    <a href="https://github.com/Tacotakedown" target="_blank">
                        <img class="w-20" src="https://www.logolynx.com/images/logolynx/48/486bcc72e68c5f880850d9c76082af86.png" alt="github"/>
                    </a>
                </div>
            </div>
        </main>
    }
}
