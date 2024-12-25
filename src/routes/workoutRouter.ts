import express from "express";
import { getWorkouts, getWorkoutByID, createWorkout, updateWorkout, deleteWorkout } from "../controllers/workoutController";

const router = express.Router();


router.route('/')
    .get( getWorkouts)
    .post(createWorkout);

router.route('/:id')
    .patch(updateWorkout)
    .delete(deleteWorkout)
    .get(getWorkoutByID);


export default router;