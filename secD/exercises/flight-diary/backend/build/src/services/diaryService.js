"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const diaries_1 = __importDefault(require("../../data/diaries"));
const getEntries = () => {
    return diaries_1.default;
};
const getNonSensitiveEntries = () => {
    return diaries_1.default.map(({ id, date, weather, visibility }) => ({
        id,
        date,
        weather,
        visibility,
    }));
};
const addDiary = (entry) => {
    const newDiaryEntry = Object.assign({ id: Math.max(...diaries_1.default.map(d => d.id)) + 1 }, entry);
    diaries_1.default.push(newDiaryEntry);
    return newDiaryEntry;
};
// if not found, return undefined
const findById = (id) => {
    const entry = diaries_1.default.find(d => d.id === id);
    return entry;
};
exports.default = {
    getEntries,
    addDiary,
    getNonSensitiveEntries,
    findById
};
// ========= revised the addDiary function above ===========
// import diaries from '../../data/diaries';
// import { DiaryEntry, NonSensitiveDiaryEntry, Visibility, Weather } from '../types';
// const getEntries = (): DiaryEntry[] => {
//   return diaries;
// };
// const getNonSensitiveEntries = (): NonSensitiveDiaryEntry[] => {
//   return diaries.map(({ id, date, weather, visibility }) => ({
//     id,
//     date,
//     weather,
//     visibility,
//   }));
// };
// const addDiary = (
//   date: string, weather: Weather, visibility: Visibility, comment: string
// ): DiaryEntry => {
//   const newDiaryEntry = {
//     id: Math.max(...diaries.map(d => d.id)) + 1,
//     date,
//     weather,
//     visibility,
//     comment
//   }
//   diaries.push(newDiaryEntry);
//   return newDiaryEntry;
// };
// // if not found, return undefined
// const findById = (id: number): DiaryEntry | undefined => {
//   const entry = diaries.find(d => d.id === id);
//   return entry;
// };
// export default {
//   getEntries,
//   addDiary,
//   getNonSensitiveEntries,
//   findById
// };
// ======== Before => Adding a new diary =============
// import diaries from '../../data/diaries';
// import { DiaryEntry, NonSensitiveDiaryEntry } from '../types';
// const getEntries = (): DiaryEntry[] => {
//   return diaries;
// };
// const getNonSensitiveEntries = (): NonSensitiveDiaryEntry[] => {
//   return diaries.map(({ id, date, weather, visibility }) => ({
//     id,
//     date,
//     weather,
//     visibility,
//   }));
// };
// const addDiary = () => {
//   return null;
// };
// // if not found, return undefined
// const findById = (id: number): DiaryEntry | undefined => {
//   const entry = diaries.find(d => d.id === id);
//   return entry;
// };
// export default {
//   getEntries,
//   addDiary,
//   getNonSensitiveEntries,
//   findById
// };
// ====== Before - Preventing an accidental undefined result ======
// import diaries from '../../data/diaries';
// import { DiaryEntry, NonSensitiveDiaryEntry } from '../types';
// const getEntries = (): DiaryEntry[] => {
//   return diaries;
// };
// const getNonSensitiveEntries = (): NonSensitiveDiaryEntry[] => {
//   return diaries.map(({ id, date, weather, visibility }) => ({
//     id,
//     date,
//     weather,
//     visibility,
//   }));
// };
// const addDiary = () => {
//   return null;
// };
// export default {
//   getEntries,
//   addDiary,
//   getNonSensitiveEntries
// };
// ============ before revising the getNonSensitiveEntries code =======
// import diaries from '../../data/diaries';
// import { DiaryEntry, NonSensitiveDiaryEntry } from '../types';
// const getEntries = (): DiaryEntry[] => {
//   return diaries;
// };
// // is returning the complete diary entries, & no error given despite typing
// // -- we would be leaking the unwanted properies to a browser, even though
// // --- our types seem to imply otherwise
// // --- ** recommended to exclude the properties above - (see revised code above)
// const getNonSensitiveEntries = (): NonSensitiveDiaryEntry[] => {
//   return diaries;
// }
// const addDiary = () => {
//   return null;
// };
// export default {
//   getEntries,
//   addDiary,
//   getNonSensitiveEntries
// };
// =======  Before excluding some fields in the Utility Types section =======
// import diaries from '../../data/diaries';
// import { DiaryEntry, NonSensitiveDiaryEntry } from '../types';
// const getEntries = (): DiaryEntry[] => {
//   return diaries;
// };
// const getNonSensitiveEntries = (): NonSensitiveDiaryEntry[] => {
//   return diaries;
// }
// const addDiary = () => {
//   return null;
// };
// export default {
//   getEntries,
//   addDiary,
//   getNonSensitiveEntries
// };
// =========== Before Utility Types ===========
// import diaries from '../../data/diaries';
// import { DiaryEntry } from '../types';
// const getEntries = (): DiaryEntry[] => {
//   return diaries;
// };
// const addDiary = () => {
//   return null;
// };
// export default {
//   getEntries,
//   addDiary
// };
// =========== Before converting JSON file to a TS file =====
// import diaryData from '../../data/entries.json';
// import { DiaryEntry } from '../types';
// const diaries: DiaryEntry[] = diaryData as DiaryEntry[];
// const getEntries = (): DiaryEntry[] => {
//   return diaries;
// };
// const addDiary = () => {
//   return null;
// };
// export default {
//   getEntries,
//   addDiary
// };
