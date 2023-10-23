export interface Diagnose {
  code: string;
  name: string;
  latin?: string;
}

// Entry added for ex 9.20
export interface Entry {
  description: string;
  date: string;
  code: string;
  specialist: string;
}

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