const envoltura = document.querySelector(".envoltura-sobre");
const carta = document.querySelector(".carta");

// 1. Lógica de apertura y cierre del sobre
document.addEventListener("click", (e) => {
    // Si haces clic en el corazón o las solapas, se abre la envoltura
    if (e.target.matches(".corazon") || e.target.matches(".solapa-derecha") || e.target.matches(".solapa-izquierda")) {
        envoltura.classList.toggle("abierto");
    } 
    
    // Si el sobre está abierto y haces clic en la carta, ésta sube
    else if (envoltura.classList.contains("abierto")) {
        if (e.target.closest(".carta") || e.target.closest(".sobre")) {
            if (!carta.classList.contains("abierta")) {
                carta.classList.add("mostrar-carta");
                setTimeout(() => {
                    carta.classList.remove("mostrar-carta");
                    carta.classList.add("abierta");
                }, 500);
                envoltura.classList.add("desactivar-sobre");
            } else {
                // Si ya está abierta, se guarda al hacer clic
                carta.classList.remove("abierta");
                envoltura.classList.remove("desactivar-sobre");
            }
        }
    }
});

// 2. Función para la lluvia de corazones
function crearCorazon() {
    const corazonLluvia = document.createElement("div");
    corazonLluvia.classList.add("corazon-caida");
    
    const emojis = ['💜', '🌙', '💜', '💜', '🌙'];
    corazonLluvia.innerText = emojis[Math.floor(Math.random() * emojis.length)];
    
    corazonLluvia.style.left = Math.random() * 100 + "vw";
    corazonLluvia.style.fontSize = Math.random() * 20 + 15 + "px"; 
    
    const duracion = Math.random() * 3 + 4; 
    corazonLluvia.style.animationDuration = duracion + "s";
    corazonLluvia.style.opacity = Math.random() * 0.7 + 0.3;

    document.body.appendChild(corazonLluvia);

    setTimeout(() => {
        corazonLluvia.remove();
    }, duracion * 1000);
}

// Iniciar lluvia
setInterval(crearCorazon, 350);