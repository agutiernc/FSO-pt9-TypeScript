import express from 'express';
import patientsService from '../services/patientsService';
import toNewPatientEntry from '../utils/utils';

const router = express.Router();

router.get('/', (_req, res) => {
  res.send(patientsService.getNonSensitiveInfo());
});

router.post('/', (req, res) => {
  try {
    const newPatientEntry = toNewPatientEntry(req.body);
    const addedEntry = patientsService.addPatient(newPatientEntry);

    res.json(addedEntry);
  } catch (error: unknown) {
    let errorMessage = 'Something went wrong';

    if (error instanceof Error) {
      errorMessage += ` Error: ${error.message}`;
    }

    res.status(400).send(errorMessage);
  };
});


export default router;


// ======== Before ex: 9.13 ===========================

// import express from 'express';
// import patientsService from '../services/patientsService';

// const router = express.Router();

// router.get('/', (_req, res) => {
//   res.send(patientsService.getNonSensitiveInfo());
// });

// router.post('/', (req, res) => {
//   const { name, dateOfBirth, gender, occupation} = req.body;

//   const addedEntry = patientsService.addPatient({
//     name,
//     dateOfBirth,
//     gender,
//     occupation
//   })

//   res.json(addedEntry);
// });

// export default router;