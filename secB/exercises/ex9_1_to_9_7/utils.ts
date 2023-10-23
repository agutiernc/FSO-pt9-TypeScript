import { bmiValues } from "./bmiCalculator";
import { exerciseVals } from "./exerciseCalculator";

export const parseArguments = (args: string[], argsLength: number) => {
  if (args.length < argsLength) throw new Error('Not enough arguments');
  if (args.length > argsLength) throw new Error('Too many arguments');

  const result: bmiValues | exerciseVals | null = null;
  
  try {
    if (!isNaN(Number(args[2]))) {
      const val1: number = +args[2];
  
      if (args.length === 12) {
        const argsArr: number[] = args.slice(3).map(Number);
  
        return {
          val1,
          val2: argsArr,
        } as exerciseVals;
      } else if (args.length === 4) {
        const value2: number = +args[3];
  
        return {
          val1,
          val2: value2
        } as bmiValues;
      }
    }
  } catch (error) {
    throw new Error('Values must be numbers!');
  }

  if (result === null) throw new Error('Unexpected arguments!');

  return result;
};




// ============ from ex 9.3 ================

// export const parseArguments = (args: string[], argsLength: number): bmiValues | exerciseVals => {
//   if (args.length < argsLength) throw new Error('Not enough arguments');
//   if (args.length > argsLength) throw new Error('Too many arguments');
  
//   if (!isNaN(Number(args[2]))) {
//     const val1: number = +args[2];

//     if (args.length === 12) {
//       const argsArr: number[] = args.slice(3).map(Number);

//       return {
//         val1,
//         val2: argsArr,
//       } as exerciseVals;
//     } else if (args.length === 4) {
//       let value2: number = +args[3];

//       return {
//         val1,
//         val2: value2
//       } as bmiValues;
//     }
//   } else {
//     throw new Error('Values must be numbers!');
//   }

//   throw new Error('blah!');
// }




