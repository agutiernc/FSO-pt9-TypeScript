/**
 * calculates the average time of daily exercise hours and compares 
 * it to the target amount of daily hours and returns an object
 * 
 * params => array 
 *            - 7 elements for each day of the week
 *            - elements are exercise hours for the day
 *        => num
 *            - the target amount of DAILY hours
 * 
 * returns an object - (7 props) => {
 *  numDays, numTrainingDays, ogTarget, avgTime, 
 *  boolean if target reached,
 *  rating (1-3) for how well the hours are met,
 *  text to explain rating
 * }
 * 
 * Use property names for the object that were given in instructions 
 */

// =============== from ex 9.6 to 9.7 ============

// import { parseArguments } from "./utils";

export interface exerciseVals {
  val1: number;
  val2: number[];
}

interface Result {
  periodLength: number,
  trainingDays: number,
  success: boolean,
  rating: number,
  ratingDescription: string,
  target: number,
  average: number
}

export const calculateExercises = (target: number, hours: number[], ): Result => {
  const avg: number = +(hours.reduce((sum, curr) => sum + curr, 0) / hours.length).toFixed(2);
  let ratingDescrip: string;
  let rate: number;
  
  if (avg >= target ) {
    rate = 3;
    ratingDescrip = 'Excellent! You matched your target!';
  } else if (avg >= target / 2 && avg < target) {
    rate = 2;
    ratingDescrip = 'Not too bad, but could be better';
  } else {
    rate = 1;
    ratingDescrip = 'Target not met. Better luck next time!';
  }
  
  return {
    periodLength: hours.length,
    trainingDays: hours.filter(d => d > 0).length,
    success: hours.every(h => h >= target),
    rating: rate,
    ratingDescription: ratingDescrip,
    target,
    average: avg
  };
};



// try {
//   const { val1, val2 } = parseArguments(process.argv, 12);

//   if (Array.isArray(val2)) {
//     console.log(calculateExercises(val1, val2));
//   }
// } catch (error: unknown) {
//   let errorMessage = 'Something bad happened';

//   if (error instanceof Error) {
//     errorMessage += `Error: ${error.message}`;
//   }

//   console.log(errorMessage);
// }



// ============= ex 9.3 ==============

// import { parseArguments } from "./utils";

// export interface exerciseVals {
//   val1: number;
//   val2: number[];
// }

// interface Result {
//   periodLength: number,
//   trainingDays: number,
//   success: boolean,
//   rating: number,
//   ratingDescription: string,
//   target: number,
//   average: number
// }

// const calculateExercises = (target: number, hours: number[], ): Result => {
//   const avg: number = +(hours.reduce((sum, curr) => sum + curr, 0) / hours.length).toFixed(2);
//   let ratingDescrip: string;
//   let rate: number;

//   if (avg >= target ) {
//     rate = 3;
//     ratingDescrip = 'Excellent! You matched your target!';
//   } else if (avg >= 1 && avg < target ) {
//     rate = 2;
//     ratingDescrip = 'Not too bad, but could be better';
//   } else {
//     rate = 1;
//     ratingDescrip = 'Target not met. Better luck next time!';
//   }
  
//   return {
//     periodLength: hours.length,
//     trainingDays: hours.filter(d => d > 0).length,
//     success: hours.every(h => h >= target),
//     rating: rate,
//     ratingDescription: ratingDescrip,
//     target,
//     average: avg
//   };
// };

// try {
//   const { val1, val2 } = parseArguments(process.argv, 12);

//   if (Array.isArray(val2)) {
//     console.log(calculateExercises(val1, val2));
//   }
// } catch (error: unknown) {
//   let errorMessage = 'Something bad happened';

//   if (error instanceof Error) {
//     errorMessage += `Error: ${error.message}`;
//   }

//   console.log(errorMessage);
// }




// ================= ex 9.2 ==================

// interface Result {
//   periodLength: number,
//   trainingDays: number,
//   success: boolean,
//   rating: number,
//   ratingDescription: string,
//   target: number,
//   average: number
// }

// const calculateExercises = (hours: number[], target: number ): Result => {
//   const avg: number = +(hours.reduce((sum, curr) => sum + curr, 0) / hours.length).toFixed(2);
//   let ratingDescrip: string;
//   let rate: number;

//   if (avg >= target ) {
//     rate = 3;
//     ratingDescrip = 'Excellent! You matched your target!';
//   } else if (avg >= 1 && avg < target ) {
//     rate = 2;
//     ratingDescrip = 'Not too bad, but could be better';
//   } else {
//     rate = 1;
//     ratingDescrip = 'Target not met. Better luck next time!';
//   }
  
//   return {
//     periodLength: hours.length,
//     trainingDays: hours.filter(d => d > 0).length,
//     success: hours.every(h => h >= target),
//     rating: rate,
//     ratingDescription: ratingDescrip,
//     target,
//     average: avg
//   }
// }

// console.log(calculateExercises([3, 0, 2, 4.5, 0, 3, 1], 2))
// console.log(calculateExercises([3, 1, 0, 1.5, 0, 0, 0], 2))
// console.log(calculateExercises([3, 2, 2, 2.5, 2, 2, 2], 2))