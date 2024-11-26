// Add any animations or interactivity here
document.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
        document.querySelector(link.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});
