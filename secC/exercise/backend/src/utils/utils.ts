import { NewPatientEntry, Gender } from "../types";

const isString = (text: unknown): text is string => {
  return typeof text === 'string' || text instanceof String;
};

const parseName = (name: unknown): string => {
  if (!name || !isString(name)) {
    throw new Error('Incorrect or missing name');
  }

  return name;
};

const isDate = (date: string): boolean => {
  return Boolean(Date.parse(date));
};

const parseDate = (date: unknown): string => {
  if (!isString(date) || !isDate(date)) {
    throw new Error(`Incorrect or missing date: ${date}`);
  }

  return date;
};

const parseSSN = (ssn: unknown): string => {
  if (!ssn || !isString(ssn)) {
    throw new Error('Incorrect or missing SSN');
  }

  return ssn;
};

const parseOccupation = (job: unknown): string => {
  if (!job || !isString(job)) {
    throw new Error('Incorrect or missing SSN');
  }

  return job;
};

// this function and "parseGender" uses an enum (Gender)
const isGender = (param: string): param is Gender => {
  return Object.values(Gender).map(g => g.toString()).includes(param);
}

const parseGender = (gender: unknown): Gender => {
  if (!isString(gender) || !isGender(gender)) {
    throw new Error(`Incorrect or missing gender: ${gender}`);
  }

  return gender;
}

const toNewPatientEntry = (object: unknown): NewPatientEntry => {
  if (!object || typeof object !== 'object') {
    throw new Error('Incorrect or missing data');
  }

  if (
    'name' in object && 'dateOfBirth' in object && 'ssn' in object && 'gender' in object && 'occupation' in object
  ) {
    const newEntry: NewPatientEntry = {
      name: parseName(object.name),
      dateOfBirth: parseDate(object.dateOfBirth),
      ssn: parseSSN(object.ssn),
      gender: parseGender(object.gender),
      occupation: parseOccupation(object.occupation),
    };
  
    return newEntry;
  }
  
  throw new Error('Incorrect data: some fields are missing');
};

export default toNewPatientEntry;


// ======== Before ex: 9.13 ===========================

// import { NewPatientEntry } from "../types";

// const toNewPatientEntry = (object: unknown): NewPatientEntry => {
//   console.log(object);

//   const newEntry: NewPatientEntry = {
//     name: "Bob",
//     dateOfBirth: "2022-01-02",
//     ssn: "555-55-5555",
//     gender: "male",
//     occupation: "programmer",
//   };

//   return newEntry;
// };

// export default toNewPatientEntry;