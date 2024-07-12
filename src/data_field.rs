use leptos::*;

#[component]
pub fn DataField(header: String, content: Vec<String>) -> impl IntoView {
    view! {
        <section class="text-xl font-semibold">
            <h1 class="text-3xl pt-6 pb-6 text-[#ee82f8]" >{header}</h1>
            <hr class="border-[#ee82f8] "/>
            {content.iter().map(|s| {
                view!{<div class="pt-6">{s}</div>}
            }).collect::<Vec<_>>()}
        </section>
    }
}

#[component]
pub fn DataFieldList(header: String, content: Vec<String>) -> impl IntoView {
    view! {
        <section class="text-xl font-semibold">
            <h1 class="text-3xl pt-6 pb-6 text-[#ee82f8]">{header}</h1>
            <hr class="border-[#ee82f8]"/>
            <ul class="pt-6 pl-5">
            {content.iter().map(|s| {
                view!{<li class="list-disc">{s}</li>}
            }).collect::<Vec<_>>()}
           </ul>
        </section>
    }
}
