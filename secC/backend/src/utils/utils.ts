// Added from "Proofing Requests"

import { NewDiaryEntry, Visibility, Weather } from "../types"

// a type guard function
// - because it returns a boolean and has a "type predicate" as the return type
// -- the "type predicate" is "text is string"
const isString = (text: unknown): text is string => {
  return typeof text === 'string' || text instanceof String;
};

const parseComment = (comment: unknown): string => {
  if (!isString(comment)) {
    throw new Error('Incorrect or missing comment');
  }

  return comment;
};

// a type guard
const isDate = (date: string): boolean => {
  return Boolean(Date.parse(date));
};

const parseDate = (date: unknown): string => {
  if (!isString(date) || !isDate(date)) {
    throw new Error(`Incorrect or missing date: ${date}`);
  }

  return date;
};

// a type guard
const isWeather = (param: string): param is Weather => {
  return Object.values(Weather).map(v => v.toString()).includes(param);
}

const parseWeather = (weather: unknown): Weather => {
  if (!weather || !isString(weather) || !isWeather(weather)) {
    throw new Error(`Incorrect or missing weather: ${weather}`);
  }

  return weather;
};


// a type guard
const isVisibility = (param: string): param is Visibility => {
  return Object.values(Visibility).map(v => v.toString()).includes(param);
};

const parseVisibility = (visibility: unknown): Visibility => {
  // the check for !visibility is now removed:
  if (!isString(visibility) || !isVisibility(visibility)) {
    throw new Error(`Incorrect or missing visibility: ${visibility}`);
  }

  return visibility;
}


/**
 * parses each field and makes sure that the return value is 
 *   exactly of type NewDiaryEntry
 */

// object gives error because "unknown" type does not allow "any" operations & can't
//   access fields
// -- fix by type narrowing
const toNewDiaryEntry = (object: unknown): NewDiaryEntry => {
  // this is type narrowing
  if (!object || typeof object !== 'object') {
    throw new Error('Incorrect or missing data');
  }

  // starts with type narrowing too, and if true, returns newEntry
  // use of operator "in" actually now guarantees that the fields indeed exist in the object
  if (
    'comment' in object && 'date' in object && 'weather' in object && 'visibility' in object
    ) {
    const newEntry: NewDiaryEntry = {
      weather: parseWeather(object.weather),
      visibility: parseVisibility(object.visibility),
      date: parseDate(object.date),
      comment: parseComment(object.comment)
    };
  
    return newEntry;
  }

  throw new Error('Incorrect data: some fields are missing');
};

export default toNewDiaryEntry;



// ============ Before => Enum section ================


// // Added from "Proofing Requests"

// import { NewDiaryEntry, Weather } from "../types"

// // a type guard function
// // - because it returns a boolean and has a "type predicate" as the return type
// // -- the "type predicate" is "text is string"
// const isString = (text: unknown): text is string => {
//   return typeof text === 'string' || text instanceof String;
// };

// const parseComment = (comment: unknown): string => {
//   if (!comment || !isString(comment)) {
//     throw new Error('Incorrect or missing comment');
//   }

//   return comment;
// };

// // a type guard
// const isDate = (date: string): boolean => {
//   return Boolean(Date.parse(date));
// };

// const parseDate = (date: unknown): string => {
//   if (!date || !isString(date) || !isDate(date)) {
//     throw new Error(`Incorrect or missing date: ${date}`);
//   }

//   return date;
// };

// const parseWeather = (weather: unknown): Weather => {
//   if (!weather || !isString(weather) || !isWeather(weather)) {
//     throw new Error(`Incorrect or missing weather: ${weather}`);
//   }

//   return weather;
// };

// // a type guard
// const isWeather = (str: string): str is Weather => {
//   return ['sunny', 'rainy', 'cloudy', 'stormy'].includes(str);
// }


// /**
//  * parses each field and makes sure that the return value is 
//  *   exactly of type NewDiaryEntry
//  */

// // temporarily added fake code
// const toNewDiaryEntry = (object: unknown): NewDiaryEntry => {
//   console.log(object)
//   const newEntry: NewDiaryEntry = {
//     weather: 'cloudy', // fake the return value
//     visibility: 'great',
//     date: '2022-1-1',
//     comment: 'fake news'
//   };

//   return newEntry;
// };

// export default toNewDiaryEntry;



// ========= Before => Type Guards ========= 

// import { NewDiaryEntry } from "../types"

// /**
//  * parses each field and makes sure that the return value is 
//  *   exactly of type NewDiaryEntry
//  */

// // temporarily added fake code
// const toNewDiaryEntry = (object: unknown): NewDiaryEntry => {
//   console.log(object)
//   const newEntry: NewDiaryEntry = {
//     weather: 'cloudy', // fake the return value
//     visibility: 'great',
//     date: '2022-1-1',
//     comment: 'fake news'
//   };

//   return newEntry;
// };

// export default toNewDiaryEntry;