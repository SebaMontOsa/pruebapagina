const darkModeToggle = document.getElementById("dark-mode-toggle");
const body = document.body;
let darkModeEnabled = false;

darkModeToggle.addEventListener("click", () => {
    darkModeEnabled = !darkModeEnabled;

    if (darkModeEnabled) {
        body.classList.add("dark-mode");
        darkModeToggle.textContent = "Modo Claro";
        
        // Cambiamos el color del h2 a blanco en modo oscuro
        document.querySelectorAll("h2").forEach((h2) => {
            h2.style.color = "#FFA500";
        });
    } else {
        body.classList.remove("dark-mode");
        darkModeToggle.textContent = "Modo Oscuro";
        
        // Restauramos el color original del h2 en modo claro
        document.querySelectorAll("h2").forEach((h2) => {
            h2.style.color = "#000000"; // Cambiamos el color a negro en modo claro
        });
    }
});

