

let map = L.map('map').setView([-25.2862,-57.6338], 15 );
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);


var IconoBici = L.icon({
    iconUrl: '../static/paradas.png',
    iconSize: [45]
});

var IconoUbi = L.icon({
    iconUrl: '../static/objetivo.png',
    iconSize: [45]
});


var IconoBiciMapa = L.icon({
    iconUrl: '../static/bici.png',
    iconSize: [35]

});

// Lista de paradas como objetos
const listaDeCoordenadasParadas = [ 
    {coordenadas: [-25.27719,-57.63121], nombreParada: 'Costanera de Asuncion' ,bici: Math.floor(Math.random() * 6) + 1 }, {coordenadas: [-25.283056209378195,-57.6354865062164], nombreParada: 'Plaza Uruguaya' , bici: Math.floor(Math.random() * 6) + 1}, {coordenadas: [-25.288484769905818,-57.64268475015956], nombreParada: 'Plaza Italia', bici: Math.floor(Math.random() * 6) + 1 }  , {coordenadas: [-25.280959486375584,-57.624582565967266], nombreParada: 'Plaza Amapola' , bici: Math.floor(Math.random() * 6) + 1} ,
      {
        coordenadas: [-25.283129, -57.634564],
        nombreParada: "Plaza Uruguaya",
        bici: Math.floor(Math.random() * 6) + 1
      },
      {
        coordenadas: [-25.293825, -57.635888],
        nombreParada: "Plaza Juan E. O'Leary",
        bici: Math.floor(Math.random() * 6) + 1
      },
      
      {
        coordenadas: [-25.27719, -57.63121],
        nombreParada: "Costanera de Asuncion",
        bici: Math.floor(Math.random() * 6) + 1
      },
      {
        coordenadas: [-25.27835, -57.63572],
        nombreParada: "Plaza de la Democracia",
        bici: Math.floor(Math.random() * 6) + 1
      },
      {
        coordenadas: [-25.28148, -57.63290],
        nombreParada: "Plaza de la Paz",
        bici: Math.floor(Math.random() * 6) + 1
      },
      {
        coordenadas: [-25.28462, -57.63508],
        nombreParada: "Plaza de la Revolución",
        bici: Math.floor(Math.random() * 6) + 1
      }, {
        coordenadas: [-25.28341,-57.56815],
        nombreParada: "Shopping del Sol",
        bici: Math.floor(Math.random() * 6) + 1
      },
      {
        coordenadas: [-25.28388,-57.56393],
        nombreParada: "Paseo La Galería",
        bici: Math.floor(Math.random() * 6) + 1
      },
      {
        coordenadas: [-25.29518,-57.58182],
        nombreParada: "Mariscal López Shopping",
        bici: Math.floor(Math.random() * 6) + 1
      },
      {
        coordenadas: [-25.29417,-57.58041],
        nombreParada: "Shopping Villa Morra",
        bici: Math.floor(Math.random() * 6) + 1
      },
      {
        coordenadas: [-25.28767,-57.63875],
        nombreParada: "Mall Excelsior",
        bici: Math.floor(Math.random() * 6) + 1
      }
    
]

//Generar ID para chapas en las bicis y luego colocar las id en una lista de objetos con coordenadas para las bicis
function generarID() {
    const letras = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numeros = '0123456789';
    let id = '';
  
    for (let i = 0; i < 3; i++) {
      id += letras[Math.floor(Math.random() * letras.length)];
    }
  
    id += '-';
  
    for (let i = 0; i < 3; i++) {
      id += numeros[Math.floor(Math.random() * numeros.length)];
    }
  
    return id;
  }
  
  function generarNivelBateria() {
    resultado =  Math.floor(Math.random() * 81) + 20;
    return resultado // Entre 20% y 100%
  }

  
  /*function calcularDistanciaEstimada(bateria) {
    // Establece una relación entre la batería y la distancia estimada
    // Por ejemplo, asumamos que 1% de batería representa 0.5 km de distancia
    const relacionBateriaDistancia = 0.32;
    var km = (bateria  / relacionBateriaDistancia)
    return km;
  } */

  function calcularDistanciaEstimada(bateria) {
    const relacionBateriaDistancia = 0.5; // Cambiado a 0.5 para que 1% de batería sea 0.5 km
    var km = bateria * relacionBateriaDistancia; // Multiplicar directamente por la relación
    return km;
  }
  
  const ubicacionesAleatorias = [
    { id: generarID(), coordenadas: [-25.2848,-57.6417], bateria: generarNivelBateria(), km_por_recorrer: calcularDistanciaEstimada(generarNivelBateria()) },
    { id: generarID(), coordenadas: [-25.28569,-57.63169], bateria: generarNivelBateria(), km_por_recorrer: calcularDistanciaEstimada(generarNivelBateria()) },
    { id: generarID(), coordenadas: [-25.29046,-57.62928], bateria: generarNivelBateria(), km_por_recorrer: calcularDistanciaEstimada(generarNivelBateria()) },
    { id: generarID(), coordenadas: [-25.28590,-57.62552], bateria: generarNivelBateria(), km_por_recorrer: calcularDistanciaEstimada(generarNivelBateria()) },
    { id: generarID(), coordenadas: [-25.28590,-57.62552], bateria: generarNivelBateria(), km_por_recorrer: calcularDistanciaEstimada(generarNivelBateria()) },
    { id: generarID(), coordenadas: [-25.2760,-57.6377], bateria: generarNivelBateria(), km_por_recorrer: calcularDistanciaEstimada(generarNivelBateria()) },
    { id: generarID(), coordenadas: [-25.2760,-57.6377], bateria: generarNivelBateria(), km_por_recorrer: calcularDistanciaEstimada(generarNivelBateria()) },
    { id: generarID(), coordenadas: [-25.2904,-57.6349], bateria: generarNivelBateria(), km_por_recorrer: calcularDistanciaEstimada(generarNivelBateria()) },
    { id: generarID(), coordenadas: [-25.2837,-57.6372], bateria: generarNivelBateria(), km_por_recorrer: calcularDistanciaEstimada(generarNivelBateria()) },
    { id: generarID(), coordenadas: [-25.2818,-57.6370], bateria: generarNivelBateria(), km_por_recorrer: calcularDistanciaEstimada(generarNivelBateria()) }
  ];
// Marcar en el mapa con las bicis
/* ubicacionesAleatorias.forEach(bicicleta => {
    var popupContentBici = `
      <div class="popup-content max-w-xs ">
        <div class="popup-title text-xl font-bold mb-2">${bicicleta.id}</div>
        <div class="popup-description text-base mb-4">Cuenta con <span class="popup-title text-xl font-bold mb-2">  ${bicicleta.bateria} %  </span> de bateria </div>
        <div class="popup-description text-base mb-4"> Autonomia restande de: <span class="popup-title text-xl font-bold mb-2">  ${bicicleta.km_por_recorrer} km </span> </div>
        <a href="#" class="popup-button inline-block px-2 py-1 bg-slate-300 text-white text-sm rounded"> Quiero Utilizar la Bici </a>
      </div>
    `;
    L.marker(bicicleta.coordenadas,  {icon: IconoBiciMapa, keepInView: true}).addTo(map)
    .bindPopup(popupContentBici);
  }); */

  ubicacionesAleatorias.forEach(bicicleta => {
    var popupContentBici = `
      <div class="bg-[#2e3649] p-2 text-white max-w-xs">
        <div class="popup-title text-xl text-[#09cb74] font-bold mb-2">${bicicleta.id}</div>
        <div class="popup-description text-base mb-4">Cuenta con <span class="text-[#09cb74] popup-title text-xl font-bold mb-2">${bicicleta.bateria}%</span> de bateria</div>
        <div class="popup-description text-base mb-4">Autonomia restande de: <span class="text-[#09cb74] popup-title text-xl font-bold mb-2">${bicicleta.km_por_recorrer} km</span></div>
        <input id="input-alert" type="text" class="block w-full mb-2 border p-2 rounded text-black" placeholder="Ingresa tu destino por favor">
        <a href="/recorrido" id="twilio" class="inline-block px-2 bg-[#09cb74] text-sm rounded"><p class="text-white">Quiero Utilizar la Bici</p></a>
      </div>
    `;


    const marker = L.marker(bicicleta.coordenadas, { icon: IconoBiciMapa, keepInView: true }).addTo(map)
        .bindPopup(popupContentBici);

    marker.addEventListener('click', function(){
      document.querySelector("#twilio").addEventListener("click", function(){
        const accountSid = "ACbd348ec8a39d07c5d527695e15960287";
        const authToken = "382fde2f07191a3ac3e37e1b053d6ed2" ;
        const client = require('twilio')(accountSid, authToken);
  
        client.messages
          .create({
            body: 'Hola! tu codigo es 251912 Gracias por usar la app',
            from: '+17075322687',
            to: '+595962288857'
          })
          .then(message => console.log(message.sid));
      });
    })

    marker.on('popupopen', () => {
        const popup = marker.getPopup();
        const link = popup.getContent().querySelector('.popup-button');

        link.addEventListener('click', function (e) {
            e.preventDefault();
            const input = popup.getContent().querySelector(`#input-alert`);
            const inputValue = input.value;
            alert(`Texto ingresado: ${inputValue}`);
            popup.setContent('<p>"Has recorrido 5km en 30min "</p>');
            setTimeout(() => {
                window.location.href = 'index.html';
            }, 2000); // Redirige al index después de 2 segundos (ajusta el tiempo según lo necesites)
        });
    });
});






//MArcador de las paradas recorriendo con forEach la lista de objetos
listaDeCoordenadasParadas.forEach(parada=>{
    var popupContent = `
    <div class=" bg-[#2e3649] p-2 text-white max-w-xs">
    <div class="popup-title text-lg font-semibold mb-2">Parada : <span class=" text-[#09cb74] popup-title text-xl font-bold mb-2">${parada.nombreParada}</span></div>
    <div class="popup-description text-sm mb-2">Actualmente cuenta con <span class=" text-[#09cb74] popup-title text-xl font-bold mb-2">${parada.bici}</span> bicis disponibles.</div>
    
`;
    L.marker(parada.coordenadas,  {icon: IconoBici, keepInView: true}).addTo(map)
    .bindPopup(popupContent)
    .openPopup();
})

 // MArcador del mapa las paradas
 var ubicontent = `
    <div class=" bg-[#2e3649] p-2 max-w-none">
        <p class="bg-[#2e3649] text-[#09cb74] popup-title font-bold mb-2">
          Estoy aqui
        <p/> 
    </div>
    
`;
 L.marker([-25.2926,-57.6306],  {icon: IconoUbi, keepInView: true}).addTo(map)
 .bindPopup(ubicontent)
 .openPopup();


/**---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */

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




