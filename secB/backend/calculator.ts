export type Operation = 'multiply' | 'add' | 'divide';

export const calculator = (a: number, b: number, op: Operation) : number => {
  switch(op) {
    case 'multiply':
      return a * b;
    case 'divide':
      if (b === 0) throw new Error(`Can't divide by 0!`);

      return a / b;
    case 'add':
      return a + b;
    default:
      throw new Error('Operation is not multiply, add or divide!');
  }
};

// error handling
try {
  console.log(calculator(1, 5, 'divide')); // run the script
  console.log(calculator(1, 5, 'add')); // run the script
} catch (error: unknown) {
  let errorMsg = 'Something went wrong! ';

  if (error instanceof Error) {
    errorMsg += error.message;
  }

  console.log(errorMsg);
}




// ======== from before 9B: Horrors of "ANY" keyword

// type Operation = 'multiply' | 'add' | 'divide';

// const calculator = (a: number, b: number, op: Operation) : number => {
//   switch(op) {
//     case 'multiply':
//       return a * b;
//     case 'divide':
//       if (b === 0) throw new Error(`Can't divide by 0!`);

//       return a / b;
//     case 'add':
//       return a + b;
//     default:
//       throw new Error('Operation is not multiply, add or divide!');
//   }
// };

// // error handling
// try {
//   console.log(calculator(1, 5, 'divide')); // run the script
//   console.log(calculator(1, 5, 'add')); // run the script
// } catch (error: unknown) {
//   let errorMsg = 'Something went wrong! ';

//   if (error instanceof Error) {
//     errorMsg += error.message;
//   }

//   console.log(errorMsg);
// }


// =================================================================================

// type Operation = 'multiply' | 'add' | 'divide';


// added to the return 'number OR string' due to the last else if

// const calculator = (a: number, b: number, op: Operation): number | string => {
//   if  (op === 'multiply') {
//     return a * b;
//   } else if (op === 'add') {
//     return a + b;
//   } else if (op === 'divide') {
//     if (b === 0) return `can't divide by 0!`;

//     return a / b;
//   }
// }

// calculator(1, 2, 'yolo') // returns error
