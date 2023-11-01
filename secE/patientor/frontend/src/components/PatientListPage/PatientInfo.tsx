// Updated due to exercise 9.23

import { useState, useEffect } from "react";
import { Patient, Entry } from '../../types';
import { useParams } from "react-router-dom";
import patientService from "../../services/patients";
import { FemaleRounded, MaleRounded } from '@mui/icons-material';

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
      <h2>
        {patient?.name}
        {patient?.gender === 'male' ? <MaleRounded /> : <FemaleRounded />}
      </h2>

      <div>
        <div>
          <p>
            <strong>SSN:</strong> {patient?.ssn}
            <br />
            <strong>Occupation:</strong> {patient?.occupation}
          </p>
        </div>
        <hr />

        <h3>Entries</h3>

        <div>
          {
            patient?.entries.map((entry: Entry) => (
              <div key={entry.id}>
                <p>
                  <strong>{entry.date}: </strong> {entry.description}
                </p>
              
                {
                  entry.diagnosisCodes?.map((code: string) =>(
                    <ul key={code}>
                      <li>{code}</li>
                    </ul>
                  ))
                }
                
              </div>
            ))
          }
        </div>
        
      </div>

    </div>
  )
}

export default PatientInfo;