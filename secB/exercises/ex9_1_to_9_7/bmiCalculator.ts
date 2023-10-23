/**
 * - calculate BMI func - need height (cm) & weight (kg)
 * -- formula => weight / meters^2 (convert cm to meters: cm / 100)
 * - console.log the return
 */

// ========= ex 9.3 =========

import { parseArguments } from "./utils";

export interface bmiValues {
  val1: number;
  val2: number;
}

const calculateBmi = (h: number, w: number): string => {
  const BMI = +(w / (h / 100)**2).toFixed(1);
  
  if (BMI < 18.5) {
    return 'Underweight (unhealthy weight)';
  } else if (BMI >= 18.5 && BMI < 25) {
    return 'Normal (healthy weight)';
  } else if (BMI >= 25 && BMI < 30) {
    return 'Overweight (unhealthy weight)';
  } else {
    return 'Obese (unhealthy weight)';
  }
};

const runCommandLine = () => {
  if (process.argv.length < 3) return; // stops function if using express server (index.js)

  try {
    const { val1, val2 } = parseArguments(process.argv, 4);
  
    if (typeof val2 === 'number') {
      console.log(calculateBmi(val1, val2));
    }
  } catch (error: unknown) {
    let errorMessage = 'Something bad happened';
  
    if (error instanceof Error) {
      errorMessage = `Error: ${error.message}`;
    }
  
    console.log(errorMessage);
  }
};

runCommandLine();

export { calculateBmi };


// ========= ex 9.1 =========

// const calculateBmi = (h: number, w: number): string => {
//   const BMI = +(w / (h / 100)**2).toFixed(1);
  
//   if (BMI < 18.5) {
//     return 'Underweight (unhealthy weight)';
//   } else if (BMI >= 18.5 && BMI < 25) {
//     return 'Normal (healthy weight)';
//   } else if (BMI >= 25 && BMI < 30) {
//     return 'Overweight (unhealthy weight)';
//   } else {
//     return 'Obese (unhealthy weight';
//   }
// }


// console.log(calculateBmi(180, 74)) // normal
// console.log(calculateBmi(180, 50)) // underweight
// console.log(calculateBmi(180, 85)) // overweight
// console.log(calculateBmi(180, 100)) // obese