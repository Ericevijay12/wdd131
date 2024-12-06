document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("review-form");
  const charCount = document.getElementById("char-count");
  const reviewField = document.getElementById("review");

  // Update character count
  reviewField.addEventListener("input", () => {
    charCount.textContent = `Character Count: ${reviewField.value.length}`;
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent form submission

    // Extract form values
    const productName = document.getElementById("product-name").value;
    const rating = document.querySelector('input[name="rating"]:checked');
    const installationDate = document.getElementById("installation-date").value;
    const features = Array.from(
      document.querySelectorAll('input[name="features"]:checked')
    ).map((feature) => feature.value);
    const writtenReview = reviewField.value.trim();
    const userName = document.getElementById("name").value.trim();

    // Validate inputs
    if (!productName) {
      alert("Please select a product.");
      return;
    }

    if (!rating) {
      alert("Please provide a rating.");
      return;
    }

    if (!installationDate) {
      alert("Please enter the installation date.");
      return;
    }

    // Display confirmation
    const confirmationMessage = `
      Thank you for your review!
      ------------------------------------
      Product Name: ${productName}
      Rating: ${rating.value} stars
      Installation Date: ${installationDate}
      Features Found Useful: ${features.length > 0 ? features.join(", ") : "None"}
      Review: ${writtenReview || "No written review provided."}
      Name: ${userName || "Anonymous"}
    `;

    alert(confirmationMessage);

    // Reset the form
    form.reset();
    charCount.textContent = "Character Count: 0";
  });
});
