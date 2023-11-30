// Obtén la referencia al elemento de la pantalla y a todos los botones
const pantalla = document.querySelector(".pantalla");
const botones = document.querySelectorAll(".btn");

// Itera sobre cada botón y agrega un evento de clic
botones.forEach(boton => {
    boton.addEventListener("click", () => {
        // Obtiene el texto del botón clickeado
        const botonApretado = boton.textContent;

        // Lógica para el botón de borrado total (C)
        if (boton.id === "c") {
            pantalla.textContent = "0";
            return;
        }

        // Lógica para el botón de borrado individual (borrar)
        if (boton.id === "borrar") {
            if (pantalla.textContent.length === 1 || pantalla.textContent === "Error!") {
                pantalla.textContent = "0";
            } else {
                pantalla.textContent = pantalla.textContent.slice(0, -1);
            }
            return;
        }

        // Lógica para el botón de igual
        if (boton.id === "igual") {
            try {
                // Evalúa la expresión en la pantalla y muestra el resultado
                pantalla.textContent = eval(pantalla.textContent);
            } catch {
                // Si hay un error, muestra "Error!"
                pantalla.textContent = "Error!";
            }
            return;
        }

        // Lógica para otros botones numéricos y operadores
        if (pantalla.textContent === "0" || pantalla.textContent === "Error!") {
            pantalla.textContent = botonApretado;
        } else {
            pantalla.textContent += botonApretado;
        }
    });
});
