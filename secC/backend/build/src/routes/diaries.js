"use strict";
// ** no longer need the eslint rule from before
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const diaryService_1 = __importDefault(require("../services/diaryService"));
const utils_1 = __importDefault(require("../utils/utils"));
const router = express_1.default.Router();
router.get('/', (_req, res) => {
    res.send(diaryService_1.default.getNonSensitiveEntries());
});
router.get('/:id', (req, res) => {
    const diary = diaryService_1.default.findById(Number(req.params.id));
    diary ? res.send(diary) : res.sendStatus(404);
});
// redone -- see notes under "Adding a new POST entry" & "Proofing Requests"
router.post('/', (req, res) => {
    try {
        const newDiaryEntry = (0, utils_1.default)(req.body);
        const addedEntry = diaryService_1.default.addDiary(newDiaryEntry);
        res.json(addedEntry);
    }
    catch (error) {
        let errorMessage = 'Something went wrong';
        if (error instanceof Error) {
            errorMessage += ` Error: ${error.message}`;
        }
        res.status(400).send(errorMessage);
    }
});
exports.default = router;
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
