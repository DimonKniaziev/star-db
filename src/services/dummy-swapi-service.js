export default class DummySwapiService {
    people = [
        {
            id: 1,
            name: 'Arseniy [TEST DATA]',
            gender: 'male',
            birthYear: '2002',
            eyeColor: 'white'
        },
        {
            id: 2,
            name: 'Dimon [TEST DATA]',
            gender: 'male',
            birthYear: '2002',
            eyeColor: 'dark brown'
        }
    ];

    planets = [
        {
            id: 1,
            name: 'Mars [TEST DATA]',
            diameter: 'wery big diameter',
            population: '0',
            rotationPeriod: '10 days'
        },
        {
            id: 2,
            name: 'Earth [TEST DATA]',
            diameter: 'wery big diameter',
            population: '100000000000000',
            rotationPeriod: '1 day'
        }
    ];

    starships = [
        {
            id: 1,
            name: 'Rocket [TEST DATA]',
            model: '1488',
            manufacturer: 'n/a',
            costInCredits: '99999999999.99',
            length: 'wery long',
            crew: '1000',
            passengers: '3 people, 1 dog'
        }
    ];

    getAllPeople = async() => {
        return this.people;
    };

    getPerson = async(id) => {
        return this.people[id];
    };

    getAllPlanets = async() => {
        return this.planets;
    };

    getPlanet = async(id) => {
        return this.planets[id];
    };

    getAllStarships = async() => {
        return this.starships;
    };

    getStarship = async(id) => {
        return this.starships[id];
    };

    getPersonImage = () => {
        return 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0Tf8f582fqNcGvRIPHCSbY0pCljRhMmMHVA&usqp=CAU';
    };
  
      getStarshipImage = () => {
        return 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Soyuz_TMA-9_launch.jpg';
    };
  
      getPlanetImage = () => {
        return 'https://cdnn21.img.ria.ru/images/07e5/09/08/1749172991_0:44:3276:1887_1920x0_80_0_0_4d3305dfa6bc88925abc94043d9d52b7.jpg';
    };
}