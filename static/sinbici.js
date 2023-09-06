var IconoBiciMapa = L.icon({
    iconUrl: "../static/bici.png",
    iconSize: [40]
});

var IconoUbi = L.icon({
    iconUrl: "../static/bici.png",
    iconSize: [35]
});

let map = L.map('map').setView([-25.27736,-57.63717], 15);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var popupContentBici = `
    <div class="bg-[#2e3649] p-2 text-white max-w-xs">
        <div class="popup-title text-xl font-bold mb-2">Has llegado a tu destino!</div>
        <div class="popup-description text-base mb-4">Has recorrido  <span class="text-[#09cb74] popup-title text-xl font-bold mb-2"> 8.7 km </span> </div>
        <div class="popup-description text-base mb-4">En un tiempo de <span class="text-[#09cb74] popup-title text-xl font-bold mb-2"> 20 min</span></div>
        <div class="popup-content max-w-xs">
        <div class="popup-description text-base mb-4">El monto pagado es  <span class="text-[#09cb74] popup-title text-xl font-bold mb-2"> 25.000 Gs</span></div>
        <div class="popup-content max-w-xs">
        <a href="/resumen" class="bg-[#09cb74] popup-button inline-block  text-white text-sm rounded align-center"> <p class="px-5 py-2 text-white"> TERMINAR </p> </a>
        </div>
      </div>
    `;

var ubicontent = L.marker([-25.27736,-57.63717],  {icon: IconoBiciMapa, keepInView: true}).addTo(map)
    .bindPopup(popupContentBici)
    .openPopup();

/*
---------------------------------------------------------------------------------------------------------
*/
// Obtener los elementos de botones y menús
const btnPerfil = document.getElementById("btn-perfil");
const menuPerfil = document.getElementById("MenuPerfil");

const btnTarjeta = document.getElementById('btn-tarjeta');
const menuTarjeta = document.getElementById('MenuTarjeta');

// Función para abrir una sección
function openMenu(menu) {
  // Remover la clase que oculta la sección
  menu.classList.remove("bottom-full");
  // Agregar la clase que muestra la sección a 60px desde la parte inferior
  menu.classList.add("bottom-[60px]");
}

// Función para cerrar una sección
function closeMenu(menu) {
  // Remover la clase que muestra la sección
  menu.classList.remove("bottom-[60px]");
  // Agregar la clase que oculta la sección en la parte inferior
  menu.classList.add("bottom-full");
}

// Escuchar el evento de clic en el botón de perfil
btnPerfil.addEventListener('click', () => {
  // Verificar si la sección de perfil está cerrada
  if (menuPerfil.classList.contains("bottom-full")) {
    // Abrir la sección de perfil
    openMenu(menuPerfil);
    // Cerrar la sección de tarjeta
    closeMenu(menuTarjeta);
  } else {
    // Si la sección de perfil ya está abierta, cerrarla
    closeMenu(menuPerfil);
  }
});

// Escuchar el evento de clic en el botón de tarjeta
btnTarjeta.addEventListener('click', () => {
  // Verificar si la sección de tarjeta está cerrada
  if (menuTarjeta.classList.contains("bottom-full")) {
    // Abrir la sección de tarjeta
    openMenu(menuTarjeta);
    // Cerrar la sección de perfil
    closeMenu(menuPerfil);
  } else {
    // Si la sección de tarjeta ya está abierta, cerrarla
    closeMenu(menuTarjeta);
  }
});