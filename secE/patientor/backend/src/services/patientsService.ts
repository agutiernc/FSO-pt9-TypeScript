import { v4 as uuidv4 } from 'uuid';
import patientData from '../../data/patients';
import { Patient, NonSensitivePatientInfo, NewPatientEntry } from '../types';

// get all patient data
const getPatients = (): Patient[] => {
  return patientData;
}

// added for ex 9.20
// gets a patient's data
const getPatient = (id: string): Patient | undefined => {
  const patient = patientData.find(p => p.id === id);

  return patient;
}

// get all patient data, excluding "ssn"
const getNonSensitiveInfo = (): NonSensitivePatientInfo[] => {
  return patientData.map(({ id, name, dateOfBirth, gender, occupation, entries }) => ({
    id,
    name,
    dateOfBirth,
    gender,
    occupation,
    entries
  }));
};

const addPatient = (entry: NewPatientEntry): Patient => {
  const newPatientEntry = {
    id: uuidv4(),
    ...entry
  };

  patientData.push(newPatientEntry);

  return newPatientEntry;
};


export default {
  getPatients,
  getNonSensitiveInfo,
  addPatient,
  getPatient
};

