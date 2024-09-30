import express, { json } from 'express';
import connectDB from './config/db';
import cors from 'cors';
import studentRoutes from './routes/studentRoutes';

const app = express();

connectDB();

app.use(express.json());
app.use('/api/students', studentRoutes);
app.use(cors());

const PORT = process.env.PORT || 5454;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
