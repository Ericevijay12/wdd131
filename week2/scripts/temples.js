document.addEventListener("DOMContentLoaded", () => {
    const lastModifiedElement = document.getElementById("lastModified");
    const lastModifiedDate = new Date(document.lastModified);
    lastModifiedElement.textContent = lastModifiedDate.toLocaleString();

    const hamburgerButton = document.getElementById("hamburger-button");
    const menu = document.getElementById("menu");

    // Toggle the menu and update aria-expanded for accessibility
    hamburgerButton.addEventListener("click", () => {
        const isExpanded = hamburgerButton.getAttribute("aria-expanded") === "true";
        hamburgerButton.setAttribute("aria-expanded", !isExpanded);
        menu.classList.toggle("active");
    });
});
