import { checkExistence, getInstances, storeRecords } from "./localStorage"

export async function fetchStarships() {
    let starshipsArray = [];

    const starshipsImageMap = {
        'CR90 corvette': 'https://i.imgur.com/JzcsifG.jpg',
        'Star Destroyer': 'https://i.imgur.com/0kDcjKh.jpg',
        'Sentinel-class landing craft': 'https://i.imgur.com/n57oAzP.jpg',
        'Death Star': 'https://i.imgur.com/8Kfoa5Z.jpg',
        'Millennium Falcon': 'https://i.imgur.com/OtSNxmm.jpg',
        'Y-wing': 'https://i.imgur.com/Ga8DJ2Y.jpg',
        'X-wing': 'https://i.imgur.com/Zw4rQNA.jpg',
        'TIE Advanced x1': 'https://i.imgur.com/eoi4WWw.jpg',
        'Executor': 'https://i.imgur.com/iWLUQyy.jpg',
        'Rebel transport': 'https://i.imgur.com/H9mktfh.jpg',
        'Slave 1': 'https://i.imgur.com/MAt7hmF.jpg',
        'Imperial shuttle': 'https://i.imgur.com/sHfsxFx.jpg'
    }

    if (checkExistence('STARSHIP')) starshipsArray = getInstances('STARSHIP');

    if (starshipsArray.length > 0) return {starshipsImageMap, starshipsArray};

    const starshipsFetching = async () => {
        for (let i = 1; i < 5; i++) {
            let response = await fetch(`https://swapi.dev/api/starships/?page=${i}`);
            let starshipsData = await response.json();
            for (let i = 0; i < starshipsData.results.length; i++) {
                starshipsArray.push(starshipsData.results[i].name);
            }
        }
        return starshipsArray;
    }

    let starships = await starshipsFetching();

    storeRecords(starships, 'STARSHIP')

    starshipsArray = starships;

    return {starshipsImageMap, starshipsArray};
}