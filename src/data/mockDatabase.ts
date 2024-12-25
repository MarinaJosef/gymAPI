import { Client } from "../types/client";
import { workout } from "../types/workout";


export const mockDatabase = {
    clients: [
        { id: 1, name: 'Rina', email: 'rina@gmail.com' },
        { id: 2, name: 'Peter', email: 'Peter@gmail.com' },
    ] as Client[],

    workouts: [
        { id: 1, name: 'Push-Ups' },
        { id: 2, name: 'Squats' },
        { id: 3, name: 'Pull-Ups' }
    ] as workout[]
}
