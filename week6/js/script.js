document.addEventListener("DOMContentLoaded", () => {
    const cards = [
        { name: "Andradite Gem", image: "https://upload.wikimedia.org/wikipedia/commons/c/c1/Andradite-Mali.jpg", tag: "Andradite" },
        { name: "Azurite Crystal", image: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Azurite_-_New_Nevada_Lode%2C_La_Sal%2C_Utah%2C_USA.jpg", tag: "Azurite" },
        { name: "Aquamarine Gem", image: "https://upload.wikimedia.org/wikipedia/commons/6/6e/Aquamarine_P1000141.JPG", tag: "Aquamarine" },
        { name: "Ruby Gem", image: "https://upload.wikimedia.org/wikipedia/commons/1/17/Corundum-215330.jpg", tag: "Ruby" },
        { name: "Sapphire Gem", image: "https://upload.wikimedia.org/wikipedia/commons/b/be/Logan_Sapphire_SI.jpg", tag: "Sapphire" },
        { name: "Emerald Gem", image: "https://upload.wikimedia.org/wikipedia/commons/d/df/B%C3%A9ryl_var._%C3%A9meraude_sur_gangue_%28Muzo_Mine_Boyaca_-_Colombie%29_2.jpg", tag: "Emerald" }
    ];

    const filterSelect = document.getElementById("filter");
    const cardContainer = document.querySelector(".card-container");

    cards.forEach(card => {
        const cardElement = document.createElement("div");
        cardElement.classList.add("card");
        cardElement.dataset.tag = card.tag;

        const img = document.createElement("img");
        img.src = card.image;
        img.alt = card.name;

        const title = document.createElement("h3");
        title.textContent = card.name;

        cardElement.appendChild(img);
        cardElement.appendChild(title);
        cardContainer.appendChild(cardElement);
    });

    cards.forEach(card => {
        const option = document.createElement("option");
        option.value = card.tag;
        option.textContent = card.tag;
        filterSelect.appendChild(option);
    });

    filterSelect.addEventListener("change", () => {
        const value = filterSelect.value;
        document.querySelectorAll(".card").forEach(card => {
            card.style.display = card.dataset.tag === value || value === "all" ? "block" : "none";
        });
    });
});
