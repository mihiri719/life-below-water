document.addEventListener("DOMContentLoaded", () => {
    console.log("Script loaded successfully.");

    // Sort Dropdown Event
    const sortDropdown = document.getElementById("sort");
    if (sortDropdown) {
        sortDropdown.addEventListener("change", (event) => {
            console.log("Sort option selected:", event.target.value);
            // Implement sorting functionality here if needed
        });
    }

    // Review Rating Selection
    function selectRating(rating) {
        console.log("User selected rating:", rating);
        // Implement rating system logic if needed
    }

    // Attach event listener for review submission
    const submitButton = document.querySelector(".submit");
    if (submitButton) {
        submitButton.addEventListener("click", () => {
            alert("Review submitted! Thank you for your feedback.");
        });
    }
});
