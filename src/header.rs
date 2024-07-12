use leptos::*;

#[component]
pub fn Header() -> impl IntoView {
    view! {
        <div class="max-w-[90vw] md:max-w-[60vw]  m-auto pt-10">
            <h1 class="m-0 text-5xl gradient-text font-extrabold pb-2">"Taco"</h1>
            <h2 class="m-0 text-xl text-[#ee82f8]" >"Software Engineer"</h2>
       </div>
    }
}
