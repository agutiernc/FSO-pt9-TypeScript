// part of ex 9.21

import { useState, useEffect } from "react";
import { Patient } from '../../types';
import { useParams } from "react-router-dom";
import patientService from "../../services/patients";

const PatientInfo = () => {
  const [patient, setPatient] = useState<Patient | null>(null);
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    const fetchPatient = async () => {
      // used a type guard
      // -- Could have bypassed id error by doing getPatient(id!)
      if (typeof id === 'string') {
        const data = await patientService.getPatient(id);

        setPatient(data);
      }
    }

    fetchPatient();
  }, [id]);
  console.log(patient)

  return (
    <div>
      <h2>{patient?.name}</h2>

      <p>
        <strong>SSN:</strong> {patient?.ssn}
        <br />
        <strong>Occupation:</strong> {patient?.occupation}
      </p>
    </div>
  )
}

export default PatientInfo;