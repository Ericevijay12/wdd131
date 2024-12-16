document.addEventListener("DOMContentLoaded", () => {
    const cards = [
        { name: "Andradite Gem", image: "https://upload.wikimedia.org/wikipedia/commons/c/c1/Andradite-Mali.jpg", tag: "Andradite" },
        { name: "Azurite Crystal", image: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Azurite_-_New_Nevada_Lode%2C_La_Sal%2C_Utah%2C_USA.jpg", tag: "Azurite" },
        { name: "Aquamarine Gem", image: "https://upload.wikimedia.org/wikipedia/commons/6/6e/Aquamarine_P1000141.JPG", tag: "Aquamarine" },
        { name: "Ruby Gem", image: "https://upload.wikimedia.org/wikipedia/commons/1/17/Corundum-215330.jpg", tag: "Ruby" },
        { name: "Sapphire Gem", image: "https://upload.wikimedia.org/wikipedia/commons/b/be/Logan_Sapphire_SI.jpg", tag: "Sapphire" },
        { name: "Emerald Gem", image: "https://upload.wikimedia.org/wikipedia/commons/2/28/Emerald_10mm.jpg", tag: "Emerald" }
    ];

    const cardContainer = document.querySelector(".card-container");
    const filterSelect = document.getElementById("gem-filter");

    // Function to display cards
    function displayCards(gemFilter = "All") {
        cardContainer.innerHTML = ""; // Clear existing cards

        const filteredCards = gemFilter === "All" ? cards : cards.filter(card => card.tag === gemFilter);

        filteredCards.forEach(card => {
            const cardElement = document.createElement("div");
            cardElement.classList.add("card");

            const img = document.createElement("img");
            img.src = card.image;
            img.alt = card.name;

            const title = document.createElement("h3");
            title.textContent = card.name;

            cardElement.appendChild(img);
            cardElement.appendChild(title);
            cardContainer.appendChild(cardElement);
        });
    }

    // Initialize card display with all gems
    displayCards();

    // Event listener for filter selection
    filterSelect.addEventListener("change", (e) => {
        displayCards(e.target.value);
    });
});￼Enter
