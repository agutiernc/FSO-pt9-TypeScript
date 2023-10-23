
// ** no longer need the eslint rule from before

import express from 'express';
import diaryService from '../services/diaryService';
import toNewDiaryEntry from '../utils/utils';

const router = express.Router();

router.get('/', (_req, res) => {
  res.send(diaryService.getNonSensitiveEntries());
});

router.get('/:id', (req, res) => {
  const diary = diaryService.findById(Number(req.params.id));

  diary ? res.send(diary) : res.sendStatus(404);
});

// redone -- see notes under "Adding a new POST entry" & "Proofing Requests"
router.post('/', (req, res) => {
  try {
    const newDiaryEntry = toNewDiaryEntry(req.body);
    const addedEntry = diaryService.addDiary(newDiaryEntry);

    res.json(addedEntry);
  } catch (error: unknown) {
    let errorMessage = 'Something went wrong';

    if (error instanceof Error) {
      errorMessage += ` Error: ${error.message}`;
    }

    res.status(400).send(errorMessage);
  }
});

export default router;



// ============= Before => Proofing Requests =========================

// // this prevents us from assigning the fields of a request body to variables

// /* eslint-disable @typescript-eslint/no-unsafe-assignment */

// import express from 'express';
// import diaryService from '../services/diaryService';

// const router = express.Router();

// router.get('/', (_req, res) => {
//   res.send(diaryService.getNonSensitiveEntries());
// });

// router.get('/:id', (req, res) => {
//   const diary = diaryService.findById(Number(req.params.id));

//   diary ? res.send(diary) : res.sendStatus(404);
// });

// router.post('/', (req, res) => {
//   const { date, weather, visibility, comment } = req.body;
//   const addedEntry = diaryService.addDiary({
//     date,
//     weather,
//     visibility,
//     comment
//   });

//   res.json(addedEntry);
// });

// export default router;



// ======= refactored the POST request for adding a diary. new code is above ========

// import express from 'express';
// import diaryService from '../services/diaryService';

// const router = express.Router();

// router.get('/', (_req, res) => {
//   res.send(diaryService.getNonSensitiveEntries());
// });

// router.get('/:id', (req, res) => {
//   const diary = diaryService.findById(Number(req.params.id));

//   diary ? res.send(diary) : res.sendStatus(404);
// });

// router.post('/', (req, res) => {
//   const { date, weather, visibility, comment } = req.body;
//   const addedEntry = diaryService.addDiary(
//     date,
//     weather,
//     visibility,
//     comment
//   );

//   res.json(addedEntry);
// });

// export default router;



// ======== Before => Adding a new diary =============

// import express from 'express';
// import diaryService from '../services/diaryService';

// const router = express.Router();

// router.get('/', (_req, res) => {
//   res.send(diaryService.getNonSensitiveEntries());
// });

// router.get('/:id', (req, res) => {
//   const diary = diaryService.findById(Number(req.params.id));

//   diary ? res.send(diary) : res.sendStatus(404);
// });

// router.post('/', (_req, res) => {
//   res.send('Saving a diary!');
// });

// export default router;



// ====== Before - Preventing an accidental undefined result ======

// import express from 'express';
// import diaryService from '../services/diaryService';

// const router = express.Router();

// router.get('/', (_req, res) => {
//   res.send(diaryService.getNonSensitiveEntries());
// });

// router.post('/', (_req, res) => {
//   res.send('Saving a diary!');
// });

// export default router;


// ====== Before Utility Types ======


// import express from 'express';

// const router = express.Router();

// router.get('/', (_req, res) => {
//   res.send('Fetching all diaries!');
// });

// router.post('/', (_req, res) => {
//   res.send('Saving a diary!');
// });

// export default router;