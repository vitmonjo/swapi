import { checkExistence, getInstances, storeRecords } from "./localStorage"

export async function fetchPilots() {

    let peopleArray = [];
    let pilotsArray = [];

    const pilotImageMap = {
        'Luke Skywalker': 'https://i.imgur.com/Qoq1cgX.jpeg',
        'Darth Vader': 'https://i.imgur.com/QdpvFa9.jpeg',
        'Biggs Darklighter': 'https://i.imgur.com/WfpdZOy.jpeg',
        'Obi-Wan Kenobi': 'https://i.imgur.com/u7PcBAj.jpeg',
        'Anakin Skywalker': 'https://i.imgur.com/BFKB0Rd.png',
        'Chewbacca': 'https://i.imgur.com/Pie2Fhs.jpeg',
        'Han Solo': 'https://i.imgur.com/8XMRnPY.jpeg',
        'Wedge Antilles': 'https://i.imgur.com/WEVwjCw.jpeg',
        'Jek Tono Porkins': 'https://i.imgur.com/A17GELJ.jpeg',
        'Boba Fett': 'https://i.imgur.com/U34JjDA.jpeg',
        'Lando Calrissian': 'https://i.imgur.com/GFoWhJj.png',
        'Arvel Crynyd': 'https://i.imgur.com/bQzRXMM.png',
        'Nien Nunb': 'https://i.imgur.com/8PsLTCQ.jpeg',
        'Padmé Amidala': 'https://i.imgur.com/rkw33wn.jpeg',
        'Ric Olié': 'https://i.imgur.com/s0azTB9.png',
        'Darth Maul': 'https://i.imgur.com/ankt0IR.png',
        'Plo Koon': 'https://i.imgur.com/wuS0Mb1.png',
        'Gregar Typho': 'https://i.imgur.com/IvB8RQz.jpeg',
        'Grievous': 'https://i.imgur.com/seoI0lj.png',
    }

    if (checkExistence('PILOT')) pilotsArray = getInstances('PILOT');

    if (pilotsArray.length > 0) return {pilotImageMap, pilotsArray}

    const pilotsFetching = async () => {
        for (let i = 1; i < 10; i++) {
            let response = await fetch(`https://swapi.dev/api/people/?page=${i}`);
            let peopleData = await response.json();
            for (let i = 0; i < peopleData.results.length; i++) {
                if (peopleData.results[i].starships.length !== 0) {
                    pilotsArray.push(peopleData.results[i].name);
                }
            }
        }
        return pilotsArray;
    }

    let pilots = await pilotsFetching();

    storeRecords(pilots, 'PILOT');

    pilotsArray = pilots;

    return {pilotImageMap, pilotsArray};
}