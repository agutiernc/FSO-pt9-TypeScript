// NOTE: older code is at the bottom

// *** FROM Improving the project ****

// defines how the object should be
interface MultiplyValues {
  value1: number;
  value2: number;
}

// validating that the command line arguments are numbers
const parseArguments = (args: string[]): MultiplyValues => {
  if (args.length < 4) throw new Error('Not enough arguments');
  if (args.length > 4) throw new Error('Too many arguments');

  if (!isNaN(Number(args[2])) && !isNaN(Number(args[3]))) {
    return {
      value1: Number(args[2]),
      value2: Number(args[3])
    };
  } else {
    throw new Error('Provided values were not numbers!');
  }
};

const multiplicator = (a: number, b: number, printText: string) => {
  console.log(printText, a * b);
};

try {
  const { value1, value2 } = parseArguments(process.argv);

  multiplicator(value1, value2, `Multiplied ${value1} and ${value2}, the result is:`);
} catch (error: unknown) {
  let errorMessage = 'Something bad happened';

  if (error instanceof Error) {
    errorMessage += ' Error: ' + error.message;
  }

  console.log(errorMessage);
}



// =================================================================================


// // ** to get the multiplier to work with command-line parameters with the following
// //  changes and run it with 'npm run multiply 5 2'

// const multiplicator = (a: number, b: number, printText: string) => {
//   console.log(printText, a * b);
// }

// const a: number = Number(process.argv[2]);
// const b: number = Number(process.argv[3]);

// multiplicator(a, b, `Multiplied ${a} and ${b}, the result is:`);


// =================================================================================


// const multiplicator = (a: number, b: number, printText: string) => {
//   console.log(printText, a * b);
// }

// multiplicator(2, 4, 'Multiplied numbers 2 and 4, the result is:');

// won't work since arguments are not correct type
// multiplicator('how about a string?', 4, 'Multiplied a string and 4, the result is:');