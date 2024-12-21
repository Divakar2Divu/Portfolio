// Add any animations or interactivity here
document.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
        document.querySelector(link.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

function toggleMenu() {
    const navLinks = document.querySelector(".nav-links");
    navLinks.classList.toggle("show");
}
