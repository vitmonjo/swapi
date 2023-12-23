import { fetchPilots } from "./fetchPilots";
import { fetchStarships } from "./fetchStarships";
import { fetchPlanets } from "./fetchPlanets";

export function setTabs() {
    const tabs = document.querySelectorAll('[data-tab-target]');
    const tabContents = document.querySelectorAll('[data-tab-content]');

    tabs.forEach(tab => {
        if (tab.classList.value === 'pilots') {
            tab.addEventListener('click', () => {
                fetchPilots().then(function(pilots) {
                    const cardOrganizer = document.querySelector('.card-organizer');
                    const loading = document.querySelector('.loading');
                    for (let i = 0; i <= pilots.pilots.length - 1; i++) {
                        const card = document.createElement('div');
                        card.classList.add('card');
                        const pilotName = document.createElement('div');
                        const placeHolder = document.createElement('img');
                        placeHolder.classList.add('placeholder');
                        placeHolder.src = (pilots.pilotImageMap[pilots.pilots[i].name] || '../src/images/placeholder.jpeg');
                        pilotName.classList.add('element-name');
                        pilotName.textContent = pilots.pilots[i].name;
                        card.append(placeHolder, pilotName);
                        cardOrganizer.append(card);
                        loading.textContent = '';
                    }
                })
            })
        } else if (tab.classList.value === 'starships') {
            tab.addEventListener('click', () => {
                fetchStarships().then(function(starships) {
                    const cardOrganizer = document.querySelector('.card-organizer');
                    const loading = document.querySelector('.loading');
                    for (let i = 0; i <= starships.starships.length - 1; i++) {
                        const card = document.createElement('div');
                        card.classList.add('card');
                        const starshipName = document.createElement('div');
                        const placeHolder = document.createElement('img');
                        placeHolder.classList.add('placeholder');
                        placeHolder.src = (starships.starshipsImageMap[starships.starships[i].name] || '../src/images/placeholder.jpeg');
                        starshipName.classList.add('element-name');
                        starshipName.textContent = starships.starships[i].name;
                        card.append(placeHolder, starshipName);
                        cardOrganizer.append(card);
                        loading.textContent = '';
                    }
                })
            })
        } else if (tab.classList.value === 'planets') {
            tab.addEventListener('click', () => {
                fetchPlanets().then(function(planets) {
                    const cardOrganizer = document.querySelector('.card-organizer');
                    const loading = document.querySelector('.loading');
                    for (let i = 0; i <= planets.planets.length - 1; i++) {
                        const card = document.createElement('div');
                        card.classList.add('card');
                        const planetName = document.createElement('div');
                        const placeHolder = document.createElement('img');
                        placeHolder.classList.add('placeholder');
                        placeHolder.src = (planets.planetsImageMap[planets.planets[i].name] || '../src/images/placeholder.jpeg');
                        planetName.classList.add('element-name');
                        planetName.textContent = planets.planets[i].name;
                        card.append(placeHolder, planetName);
                        cardOrganizer.append(card);
                        loading.textContent = 'a';
                    }
                })
            })
        }
        tab.addEventListener('click', () => {
            const target = document.querySelector(tab.dataset.tabTarget);
            tabContents.forEach(tabContent => tabContent.classList.remove('active'));
            target.classList.add('active');
        })
    })
}

// fetchPilots().then(function(pilots) {
//     const cardOrganizer = document.querySelector('.card-organizer');
//     const loading = document.querySelector('.loading');
//     for (let i = 0; i <= pilots.pilots.length - 1; i++) {
//         const card = document.createElement('div');
//         card.classList.add('card');
//         const pilotName = document.createElement('div');
//         const placeHolder = document.createElement('img');
//         placeHolder.classList.add('placeholder');
//         placeHolder.src = (pilots.pilotImageMap[pilots.pilots[i].name] || '../src/images/placeholder.jpeg');
//         pilotName.classList.add('element-name');
//         pilotName.textContent = pilots.pilots[i].name;
//         card.append(placeHolder, pilotName);
//         cardOrganizer.append(card);
//         loading.textContent = '';
//     }
// });

// fetchStarships().then(function(starships) {
//     const cardOrganizer = document.querySelector('.card-organizer');
//     const loading = document.querySelector('.loading');
//     for (let i = 0; i <= starships.starships.length - 1; i++) {
//         const card = document.createElement('div');
//         card.classList.add('card');
//         const starshipName = document.createElement('div');
//         const placeHolder = document.createElement('img');
//         placeHolder.classList.add('placeholder');
//         placeHolder.src = (starships.starshipsImageMap[starships.starships[i].name] || '../src/images/placeholder.jpeg');
//         starshipName.classList.add('element-name');
//         starshipName.textContent = starships.starships[i].name;
//         card.append(placeHolder, starshipName);
//         cardOrganizer.append(card);
//         loading.textContent = '';
//     }
// })

// fetchPlanets().then(function(planets) {
//     const cardOrganizer = document.querySelector('.card-organizer');
//     const loading = document.querySelector('.loading');
//     for (let i = 0; i <= planets.planets.length - 1; i++) {
//         const card = document.createElement('div');
//         card.classList.add('card');
//         const planetName = document.createElement('div');
//         const placeHolder = document.createElement('img');
//         placeHolder.classList.add('placeholder');
//         placeHolder.src = (planets.planetsImageMap[planets.planets[i].name] || '../src/images/placeholder.jpeg');
//         planetName.classList.add('element-name');
//         planetName.textContent = planets.planets[i].name;
//         card.append(placeHolder, planetName);
//         cardOrganizer.append(card);
//         loading.textContent = 'a';
//     }
// })