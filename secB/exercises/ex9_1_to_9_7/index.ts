import express from 'express';
import { calculateBmi } from './bmiCalculator';
import { calculateExercises } from './exerciseCalculator';

const app = express();

app.use(express.json());

app.get('/hello', (_req, res) => {
  res.send('Hello Full Stack!');
});

app.get('/bmi', (req, res) => {
  const height = Number(req.query.height);
  const weight = Number(req.query.weight);

  if (isNaN(height) || isNaN(weight)) {
    return res.status(400).send({ error: 'malformatted parameters' });
  }
  
  const result = calculateBmi(height, weight);

  return res.send(result);
});

app.post('/exercises', (req, res) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { target, daily_exercises } = req.body;

  if (!daily_exercises || !target) {
    return res.status(400).send({ error: "parameters missing" });
  }

  if (typeof target !== 'number' || isNaN(Number(target)) || !Array.isArray(daily_exercises)) {
    return res.status(400).send({ error: "malformatted parameters" });
  }

  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  const result = calculateExercises(Number(target), daily_exercises);

  return res.send(result);  
});


const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


// ============== before exercies 9.6-9.7

// const app = express();

// app.get('/hello', (_req, res) => {
//   res.send('Hello Full Stack!');
// });

// app.get('/bmi', (req, res) => {
//   const height = Number(req.query.height);
//   const weight = Number(req.query.weight);

//   if (isNaN(height) || isNaN(weight)) {
//     return res.status(400).send({ error: 'malformatted parameters' });
//   }
  
//   const result = calculateBmi(height, weight);

//   return res.send(result);
// });

// const PORT = 3003;

// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });

