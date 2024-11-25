document.addEventListener("DOMContentLoaded", () => {
    const temples = [
        {
            templeName: "Aba Nigeria",
            location: "Aba, Nigeria",
            dedicated: "2005, August 7",
            area: 11500,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
        },
        {
            templeName: "Manti Utah",
            location: "Manti, Utah, United States",
            dedicated: "1888, May 21",
            area: 74792,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
        },
        {
            templeName: "Payson Utah",
            location: "Payson, Utah, United States",
            dedicated: "2015, June 7",
            area: 96630,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
        },
        {
            templeName: "Yigo Guam",
            location: "Yigo, Guam",
            dedicated: "2020, May 2",
            area: 6861,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
        },
        {
            templeName: "Washington D.C.",
            location: "Kensington, Maryland, United States",
            dedicated: "1974, November 19",
            area: 156558,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
        },
        {
            templeName: "Lima Perú",
            location: "Lima, Perú",
            dedicated: "1986, January 10",
            area: 9600,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
        },
        {
            templeName: "Mexico City Mexico",
            location: "Mexico City, Mexico",
            dedicated: "1983, December 2",
document.addEventListener("DOMContentLoaded", () => {
    const temples = [
        {
            templeName: "Aba Nigeria",
            location: "Aba, Nigeria",
            dedicated: "2005, August 7",
            area: 11500,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
        },
        {
            templeName: "Manti Utah",
            location: "Manti, Utah, United States",
            dedicated: "1888, May 21",
            area: 74792,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
        },
        {
            templeName: "Payson Utah",
            location: "Payson, Utah, United States",
            dedicated: "2015, June 7",
            area: 96630,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
        },
        {
            templeName: "Yigo Guam",
            location: "Yigo, Guam",
            dedicated: "2020, May 2",
            area: 6861,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
        },
        {
            templeName: "Washington D.C.",
            location: "Kensington, Maryland, United States",
            dedicated: "1974, November 19",
            area: 156558,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
        },
        {
            templeName: "Lima Perú",
            location: "Lima, Perú",
            dedicated: "1986, January 10",
            area: 9600,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
        },
        {
            templeName: "Mexico City Mexico",
            location: "Mexico City, Mexico",
            dedicated: "1983, December 2",
            area: 116642,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
        }
    ];

    // Function to extract the year from the "dedicated" string
    function getYearFromDedicated(dedicated) {
        return parseInt(dedicated.split(",")[0], 10);
    }

    // Function to render temples
    function renderTemples(filteredTemples) {
        const templeCards = document.getElementById("temple-cards");
        templeCards.innerHTML = ""; // Clear existing content

        if (filteredTemples.length === 0) {
            templeCards.innerHTML = "<p>No temples found for this filter.</p>";
            return;
        }

        filteredTemples.forEach(temple => {
            const card = document.createElement("figure");
            card.innerHTML = `
                <img src="${temple.imageUrl}" alt="Image of ${temple.templeName}" loading="lazy">
                <figcaption>
                    <h3>${temple.templeName}</h3>
                    <p><strong>Location:</strong> ${temple.location}</p>
                    <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
                    <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
                </figcaption>
            `;
            templeCards.appendChild(card);
        });
    }

    // Render all temples by default
    renderTemples(temples);

    // Hamburger menu functionality
    const hamburgerButton = document.getElementById("hamburger-button");
    const menu = document.getElementById("menu");

    hamburgerButton.addEventListener("click", () => {
        const isExpanded = hamburgerButton.getAttribute("aria-expanded") === "true";
        hamburgerButton.setAttribute("aria-expanded", !isExpanded);
        menu.classList.toggle("active");
    });

    // Add filters for temples
    document.getElementById("old-temples").addEventListener("click", () => {
        const oldTemples = temples.filter(temple => getYearFromDedicated(temple.dedicated) < 1900);
        renderTemples(oldTemples);
    });

    document.getElementById("new-temples").addEventListener("click", () => {
        const newTemples = temples.filter(temple => getYearFromDedicated(temple.dedicated) > 2000);
        renderTemples(newTemples);
    });

    document.getElementById("large-temples").addEventListener("click", () => {
        const largeTemples = temples.filter(temple => temple.area > 90000);
        renderTemples(largeTemples);
    });

    document.getElementById("small-temples").addEventListener("click", () => {
        const smallTemples = temples.filter(temple => temple.area < 10000);
        renderTemples(smallTemples);
    });

    // Add event listener to Home link to render all temples
    document.getElementById("home-link").addEventListener("click", () => {
        renderTemples(temples);
    });

    // Update last modified date
    const lastModifiedElement = document.getElementById("lastModified");
    const lastModifiedDate = new Date(document.lastModified);
    lastModifiedElement.textContent = lastModifiedDate.toLocaleString();
});            area: 116642,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
        }
    ];

    // Function to extract the year from the "dedicated" string
    function getYearFromDedicated(dedicated) {
        return parseInt(dedicated.split(",")[0], 10);
    }

    // Function to render temples
    function renderTemples(filteredTemples) {
        const templeCards = document.getElementById("temple-cards");
        templeCards.innerHTML = ""; // Clear existing content

        if (filteredTemples.length === 0) {
            templeCards.innerHTML = "<p>No temples found for this filter.</p>";
            return;
        }

        filteredTemples.forEach(temple => {
            const card = document.createElement("figure");
            card.innerHTML = `
                <img src="${temple.imageUrl}" alt="Image of ${temple.templeName}" loading="lazy">
                <figcaption>
                    <h3>${temple.templeName}</h3>
              <p><strong>Location:</strong> ${temple.location}</p>
                    <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
                    <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
                </figcaption>
            `;
            templeCards.appendChild(card);
        });
    }

    // Render all temples by default
    renderTemples(temples);

    // Hamburger menu functionality
    const hamburgerButton = document.getElementById("hamburger-button");
    const menu = document.getElementById("menu");

    hamburgerButton.addEventListener("click", () => {
        const isExpanded = hamburgerButton.getAttribute("aria-expanded") === "true";
        hamburgerButton.setAttribute("aria-expanded", !isExpanded);
        menu.classList.toggle("active");
    });

    // Add filters for temples
    document.getElementById("old-temples").addEventListener("click", () => {
        const oldTemples = temples.filter(temple => getYearFromDedicated(temple.dedicated) < 1900);
        renderTemples(oldTemples);
