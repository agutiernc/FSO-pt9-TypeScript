export interface Diagnose {
  code: string;
  name: string;
  latin?: string;
}


// Added during Section E: Full Entries
interface BaseEntry {
  id: string;
  description: string;
  date: string;
  specialist: string;
  diagnosisCodes?: Array<Diagnose['code']>;
  // diagnosisCodes?: Diagnose['code'][]; // Can also do it this way
}

export enum HealthCheckRating {
  "Healthy" = 0,
  "LowRisk" = 1,
  "HighRisk" = 2,
  "CriticalRisk" = 3
}

interface HealthCheckEntry extends BaseEntry {
  type: "HealthCheck";
  healthCheckRating: HealthCheckRating;
}

interface Discharge {
  date: string;
  criteria: string;
}

interface HospitalEntry extends BaseEntry {
  type: "Hospital";
  discharge: Discharge;
}

interface SickLeave {
  startDate: string;
  endDate: string;
}

interface OccupationalHealthcareEntry extends BaseEntry {
  type: "OccupationalHealthcare";
  employerName: string;
  sickLeave?: SickLeave;
}

export type Entry =
  | HospitalEntry
  | OccupationalHealthcareEntry
  | HealthCheckEntry;


// Entry added for ex 9.20
// export interface Entry {
//   description: string;
//   date: string;
//   code: string;
//   specialist: string;
// }

export interface Patient {
  id: string;
  name: string;
  dateOfBirth: string;
  ssn: string;
  gender: string;
  occupation: string;
  entries: Entry[]; // added for ex 9.20
}

// export type NonSensitivePatientInfo = Omit<Patient, 'ssn'>;

// added for ex 9.20
export type NonSensitivePatientInfo = Omit<Patient, 'ssn' | 'entries'>;

export type NewPatientEntry = Omit<Patient, 'id'>;

export enum Gender {
  M = 'male',
  W = 'female'
}



// ================  Before Section E: Full Entries  ====================

// export interface Diagnose {
//   code: string;
//   name: string;
//   latin?: string;
// }

// // Entry added for ex 9.20
// export interface Entry {
//   description: string;
//   date: string;
//   code: string;
//   specialist: string;
// }

// export interface Patient {
//   id: string;
//   name: string;
//   dateOfBirth: string;
//   ssn: string;
//   gender: string;
//   occupation: string;
//   entries: Entry[]; // added for ex 9.20
// }

// // export type NonSensitivePatientInfo = Omit<Patient, 'ssn'>;

// // added for ex 9.20
// export type NonSensitivePatientInfo = Omit<Patient, 'ssn' | 'entries'>;

// export type NewPatientEntry = Omit<Patient, 'id'>;

// export enum Gender {
//   M = 'male',
//   W = 'female'
// }