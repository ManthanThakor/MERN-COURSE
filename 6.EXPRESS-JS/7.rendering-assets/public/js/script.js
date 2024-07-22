document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector("h1");
  header.addEventListener("click", () => {
    header.style.color = "yellow";
  });
});

document.addEventListener("DOMContentLoaded", () => {
  // Create and add the toggle button
  const toggleButton = document.createElement("button");
  toggleButton.textContent = "Toggle Dark Mode";
  toggleButton.classList.add("dark-mode-toggle");
  document.body.appendChild(toggleButton);

  // Function to apply dark mode based on local storage
  const applyDarkMode = () => {
    const isDarkMode = localStorage.getItem("dark-mode") === "true";
    if (isDarkMode) {
      document.body.classList.add("dark-mode");
    }
  };

  // Apply dark mode on page load
  applyDarkMode();

  // Toggle dark mode and update local storage
  toggleButton.addEventListener("click", () => {
    const isDarkMode = document.body.classList.toggle("dark-mode");
    localStorage.setItem("dark-mode", isDarkMode);
  });

  // Apply animations to cards on scroll
  const cards = document.querySelectorAll(".card");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate");
      }
    });
  });

  cards.forEach((card) => {
    observer.observe(card);
  });
});
