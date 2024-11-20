document.addEventListener("DOMContentLoaded", () => {
    // Calculate and update wind chill
    const temperature = 10; // Celsius
    const windSpeed = 5; // km/h
    const windChill = Math.round(
        13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16)
    );
    document.getElementById("windChill").textContent = windChill;

    // Update last modification date
    document.getElementById("lastModified").textContent = document.lastModified;
});
