import express from 'express';
const cors = require('cors');
import diaryRouter from './routes/diaries'

const app = express();


// to allow communication with the front-end
app.use(cors());

// To parse the incoming data
app.use(express.json());


const PORT = 3001;

app.get('/ping', (_req, res) => {
  console.log('someone pinged here');

  res.send('pong');
});


app.use('/api/diaries', (diaryRouter));


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});



// ==== this part was moved to "src" after excercises 9.8-9.9 =====

// import express from 'express';

// const app = express();

// app.use(express.json());

// const PORT = 3000;

// app.get('/ping', (_req, res) => {
//   console.log('someone pinged here');

//   res.send('pong');
// });


// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });