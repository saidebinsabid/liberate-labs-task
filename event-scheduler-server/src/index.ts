import express from 'express';
import cors from 'cors';
import eventRoutes from './routes/eventRoutes'
const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Event Scheduler Server is running!');
});
app.use('/api', eventRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});