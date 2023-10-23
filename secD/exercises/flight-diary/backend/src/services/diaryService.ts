import diaries from '../../data/diaries';
import { DiaryEntry, NonSensitiveDiaryEntry, NewDiaryEntry } from '../types';

const getEntries = (): DiaryEntry[] => {
  return diaries;
};

const getNonSensitiveEntries = (): NonSensitiveDiaryEntry[] => {
  return diaries.map(({ id, date, weather, visibility }) => ({
    id,
    date,
    weather,
    visibility,
  }));
};

const addDiary = (entry: NewDiaryEntry): DiaryEntry => {
  const newDiaryEntry = {
    id: Math.max(...diaries.map(d => d.id)) + 1,
    ...entry
  };

  diaries.push(newDiaryEntry);

  return newDiaryEntry;
};

// if not found, return undefined
const findById = (id: number): DiaryEntry | undefined => {
  const entry = diaries.find(d => d.id === id);

  return entry;
};


export default {
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