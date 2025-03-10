import { create } from "zustand";

export const useSwapi = create((set, get) => ({

}))

export const useDummySwapi = create((set, get) => ({
    people: [
        { id: 0, name: 'Arseniy [TEST DATA]', gender: 'male', birthYear: '2002', eyeColor: 'white' },
        { id: 1, name: 'Dimon [TEST DATA]', gender: 'male', birthYear: '2002', eyeColor: 'dark brown' }
    ],

    planets: [
        { id: 0, name: 'Mars [TEST DATA]', diameter: 'wery big diameter', population: '0', rotationPeriod: '10 days' },
        { id: 1, name: 'Earth [TEST DATA]', diameter: 'wery big diameter', population: '100000000000000', rotationPeriod: '1 day' }
    ],

    starships: [
        { id: 0,
            name: 'Rocket [TEST DATA]',
            model: '1488',
            manufacturer: 'n/a',
            costInCredits: '99999999999.99',
            length: 'wery long', crew: '1000',
            passengers: '3 people, 1 dog'
        }
    ],

    getAllPeople: async() => get().people,

    getPerson: async(id) => {
        return this.people[id];
    },

    getAllPlanets: async() => {
        return this.planets;
    },

    getPlanet: async(id) => {
        return this.planets[id];
    },

    getAllStarships: async() => {
        return this.starships;
    },

    getStarship: async(id) => {
        return this.starships[id];
    },
}))