document.addEventListener("DOMContentLoaded", () => {
    const lastModifiedElement = document.getElementById("lastModified");
    const lastModifiedDate = new Date(document.lastModified);
    lastModifiedElement.textContent = lastModifiedDate.toLocaleString();

    const hamburgerButton = document.getElementById("hamburger-button");
    const menu = document.getElementById("menu");

    hamburgerButton.addEventListener("click", () => {
        menu.classList.toggle("active");
    });
});￼Enter
