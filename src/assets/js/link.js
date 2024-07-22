export function link() {
    document.querySelectorAll("a[href^='https://memekey.streamlit.app/']").forEach((anchor) => {
        anchor.addEventListener("click", function(e){
            e.preventDefault();

            const targetId = this.getAttribute("href");
            const targetElement = document.querySelector(targetId);

            if(targetElement){
                targetElement.scrollIntoView({ behavior: "smooth"});
            }
        });
    });
}
