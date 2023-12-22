import { countInstances, checkExistence, getInstances } from "./localStorage"

export async function fetchPilots() {

    let peopleArray = [];
    let pilotsArray = [];

    const pilotImageMap = {
        'Luke Skywalker': 'https://i.imgur.com/Qoq1cgX.jpeg',
        'Darth Vader': 'https://i.imgur.com/QdpvFa9.jpeg',
        'Biggs Darklighter': 'https://i.imgur.com/WfpdZOy.jpeg',
        'Obi-Wan Kenobi': 'https://i.imgur.com/u7PcBAj.jpeg',
        'Anakin Skywalker': 'https://i.imgur.com/hNEaTgk.jpeg',
        'Chewbacca': 'https://i.imgur.com/Pie2Fhs.jpeg',
        'Han Solo': 'https://i.imgur.com/8XMRnPY.jpeg',
        'Wedge Antilles': 'https://i.imgur.com/WEVwjCw.jpeg',
        'Jek Tono Porkins': 'https://i.imgur.com/A17GELJ.jpeg',
        'Boba Fett': 'https://i.imgur.com/U34JjDA.jpeg',
        'Lando Calrissian': 'https://i.imgur.com/IMKaLSf.jpeg',
        'Arvel Crynyd': 'https://i.imgur.com/bQzRXMM.png',
        'Nien Nunb': 'https://i.imgur.com/8PsLTCQ.jpeg',
        'Padmé Amidala': 'https://i.imgur.com/rkw33wn.jpeg',
        'Ric Olié': 'https://i.imgur.com/uFLBrfq.jpeg',
        'Darth Maul': 'https://i.imgur.com/kTfe7uC.jpeg',
        'Plo Koon': 'https://i.imgur.com/bH6VnZ2.jpeg',
        'Gregar Typho': 'https://i.imgur.com/IvB8RQz.jpeg',
        'Grievous': 'https://i.imgur.com/seoI0lj.png',
    }

    const peopleFetching = async () => {
        for (let i = 1; i < 10; i++) {
            let response = await fetch(`https://swapi.dev/api/people/?page=${i}`);
            let peopleData = await response.json();
            peopleArray = peopleArray.concat(peopleData.results)
        }
        return peopleArray;
    }

    const addToPilots = async () => {
        const data = await peopleFetching();
        pilotsArray = data.filter(function (person) {
            if (person.starships.length !== 0) {
                return true;
            }
        })
        return pilotsArray;
    }

    const pilots = await addToPilots();

    return {pilotImageMap, pilots};
}