import { checkExistence, getInstances, storeRecords } from "./localStorage"

export async function fetchPlanets() {
    let planetsArray = [];

    const planetsImageMap = {
        'Tatooine': 'https://i.imgur.com/mkEtKtJ.jpg',
        'Alderaan': 'https://i.imgur.com/inFnKE1.jpg',
        'Yavin IV': 'https://i.imgur.com/0BbZc4W.jpg',
        'Hoth': 'https://i.imgur.com/anPXG0f.jpg',
        'Dagobah': 'https://i.imgur.com/wRl9IXU.jpg',
        'Bespin': 'https://i.imgur.com/RUqTZd8.jpg',
        'Endor': 'https://i.imgur.com/VJ9s6vp.jpg',
        'Naboo': 'https://i.imgur.com/2maWPiS.jpg',
        'Coruscant': 'https://i.imgur.com/81gqd3G.jpg',
        'Kamino': 'https://i.imgur.com/1BHzTU2.jpg',
        'Geonosis': 'https://i.imgur.com/O5s1DMF.jpg',
        'Utapau': 'https://i.imgur.com/GEYax5y.jpg'
    }


    if (checkExistence('PLANET')) planetsArray = getInstances('PLANET');

    if (planetsArray.length > 0) return {planetsImageMap, planetsArray};

    const planetsFetching = async () => {
        for (let i = 1; i < 7; i++) {
            let response = await fetch(`https://swapi.dev/api/planets/?page=${i}`);
            let planetsData = await response.json();
            for (let i = 0; i < planetsData.results.length; i++) {
                planetsArray.push(planetsData.results[i].name);
            }
        }
        return planetsArray;
    }

    let planets = await planetsFetching();

    storeRecords(planets, 'PLANET');

    planetsArray = planets;
    
    return {planetsImageMap, planetsArray};
}