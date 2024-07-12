mod app;
mod data_field;
mod header;

use app::*;
use leptos::*;

fn main() {
    mount_to_body(|| view! { <App/>})
}
