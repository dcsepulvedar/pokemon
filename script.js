window.onload = () => {
    let places = staticLoadPlaces();
    renderPlaces(places);
};
//Función que contiene una matriz con las coordenadas en donde estarán los pokemon
function staticLoadPlaces() {
   return [
       {
           name: 'Magnemite',
           locationA: {
               lat: 4.753612,
               lng: -74.096495,
           }
       },
       {
            name: 'Dragonite',
            locationB: {
                lat: 4.753595,
                lng: -74.096704,
            }
    },
    {
            name: 'Articuno',
            locationC: {
                lat: 4.753629,
                lng: -74.096263,
            }
    },
   ];
}

//Función para obtener los lugares y retornar los modelos en la escena

function renderPlaces(places) {
   let scene = document.querySelector('a-scene');

   places.forEach((place) => {
       let latitudeA = place.locationA.lat;
       let longitudeA = place.locationA.lng;
       let latitudeB = place.locationB.lat;
       let longitudeB = place.locationB.lng;
       let latitudeC = place.locationC.lat;
       let longitudeC = place.locationC.lng;

       //Modelo A - Magnemite
       let modelA = document.createElement('a-entity');
       modelA.setAttribute('gps-entity-place', `latitude: ${latitudeA}; longitude: ${longitudeA};`);
       modelA.setAttribute('gltf-model', './assets/magnemite/scene.gltf');
       modelA.setAttribute('rotation', '0 180 0');
       modelA.setAttribute('animation-mixer', '');
       modelA.setAttribute('scale', '0.5 0.5 0.5');

       modelA.addEventListener('loaded', () => {
           window.dispatchEvent(new CustomEvent('gps-entity-place-loaded'))
       });

       scene.appendChild(modelA);

        //Modelo B - Dragonite
        let modelB = document.createElement('b-entity');
        modelB.setAttribute('gps-entity-place', `latitude: ${latitudeB}; longitude: ${longitudeB};`);
        modelB.setAttribute('gltf-model', './assets/dragonite/scene.gltf');
        modelB.setAttribute('rotation', '0 180 0');
        modelB.setAttribute('animation-mixer', '');
        modelB.setAttribute('scale', '0.5 0.5 0.5');
 
        modelB.addEventListener('loaded', () => {
            window.dispatchEvent(new CustomEvent('gps-entity-place-loaded'))
        });
 
        scene.appendChild(modelB);

        //Modelo C - Articuno
        let modelC = document.createElement('c-entity');
        modelC.setAttribute('gps-entity-place', `latitude: ${latitudeC}; longitude: ${longitudeC};`);
        modelC.setAttribute('gltf-model', './assets/articuno/scene.gltf');
        modelC.setAttribute('rotation', '0 180 0');
        modelC.setAttribute('animation-mixer', '');
        modelC.setAttribute('scale', '0.5 0.5 0.5');
 
        modelC.addEventListener('loaded', () => {
            window.dispatchEvent(new CustomEvent('gps-entity-place-loaded'))
        });
 
        scene.appendChild(modelC);
   });
}