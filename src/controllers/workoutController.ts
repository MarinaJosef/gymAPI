import { Request, Response } from 'express';
import { mockDatabase } from '../data/mockDatabase';
import { workout } from '../types/workout';

//CRUD 
//Create Post, Read GET, Update (PUT, Patch), Delete (DELETE)


export const getWorkouts = (req: Request, res: Response) => {
    res.status(200).json({ status: "success", data: { workouts: mockDatabase.workouts } });
};

export const getWorkoutByID = (req: Request, res: Response) => {
    const id = +req.params.id;
    const workout = mockDatabase.workouts.find((workout) => workout.id === id);
    if (workout) {
        res.status(200).json({ status: "success", data: { workout } });
    } else {
        res.status(404).json({ status: "fail", data: { message: 'Workout not found' } });
    }
};


export const createWorkout = (req: Request, res: Response) => {
    const { name } = req.body;
    const newWorkout = new workout(mockDatabase.workouts.length + 1, name);
    mockDatabase.workouts.push(newWorkout);
    res.status(201).json({ status: "success", data: { workout: newWorkout } });
};


export const updateWorkout = (req: Request, res: Response) => {
    const id = +req.params.id;
    const { name, changeid } = req.body;
    const workout = mockDatabase.workouts.find((workout) => workout.id === id);
    if (workout) {
        workout.name = name || workout.name;
        workout.id = changeid || workout.id;
        res.status(200).json({ status: "success", data: { workout } });
    } else {
        res.status(404).json({ status: "fail", data: { message: 'Workout not found' } });
    }
};


export const deleteWorkout = (req: Request, res: Response) => {
    const id = +req.params.id;
    const index = mockDatabase.workouts.findIndex((workout) => workout.id === id);
    if (index !== -1) {
        mockDatabase.workouts.splice(index, 1);
        res.status(200).json({ status: "success", data: { message: 'Workout deleted' } });
    } else {
        res.status(404).json({ status: "fail", data: { message: 'Workout not found' } });
    }
};
