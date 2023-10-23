import express from 'express';
import { calculator, Operation } from './calculator';

const app = express();

app.use(express.json());

app.get('/ping', (_req, res) => {
  res.send('pong');
});

app.post('/calculate', (req, res) => {
  // to get the data from the request body, will disable ESlint rules:

  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment 
  const { value1, value2, op } = req.body;

  if (!value1 || isNaN(Number(value1))) {
    return res.status(400).send({ error: '...' });
  }

  // const operation = op as Operation; // not really needed, but shown as an example

  // old code: const result = calculator(value1, value2, op);

  // disables another eslint rule because last param in the function is not safe:

  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  const result = calculator(Number(value1), Number(value2), op as Operation);

  return res.send({ result });
});

const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});




// ==========  from before 9B: Type Assertion  ========
// import { calculator } from './calculator';

// const app = express();

// app.use(express.json());

// app.get('/ping', (_req, res) => {
//   res.send('pong');
// });

// app.post('/calculate', (req, res) => {
//   // to get the data from the request body, will disable ESlint rules:

//   // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment 
//   const { value1, value2, op } = req.body;

//   if (!value1 || isNaN(Number(value1))) {
//     return res.status(400).send({ error: '...' });
//   }

//   // old code: const result = calculator(value1, value2, op);

//   // disables another eslint rule:

//   // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
//   const result = calculator(Number(value1), Number(value2), op);

//   return res.send({ result });
// });

// const PORT = 3003;

// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });



// ======= before 9.4/9.5 exercises =====
// import express from 'express';

// const app = express();

// app.get('/ping', (_req, res) => {
//   res.send('pong');
// });

// const PORT = 3003;

// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`)
// });