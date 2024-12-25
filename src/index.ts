import express from 'express';
import cors from 'cors';
import clientRouter from './routes/clientRouter';
import workoutRouter from './routes/workoutRouter';
import morgan from 'morgan';


require('dotenv').config();


const app = express();
const PORT = process.env.PORT 
console.log(PORT);
console.log(process.env.PORT);

//middlewares
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));
app.use('/clients', clientRouter)
app.use('/workouts', workoutRouter)

app.listen(PORT, () => {
    console.log('Server is running on port 3000 http://localhost:3000');
});