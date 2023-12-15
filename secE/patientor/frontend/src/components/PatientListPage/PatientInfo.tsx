// Updated due to exercise 9.25
import { useState, useEffect } from "react";
import { Patient, Entry, Diagnosis } from '../../types';
import { useParams } from "react-router-dom";
import patientService from "../../services/patients";
import { FemaleRounded, MaleRounded } from '@mui/icons-material';
import EntryDetails from "./EntryDetails/EntryDetails";

// for ex. 9.24
interface Props {
  diagnoses: Diagnosis[];
}

const PatientInfo = ({ diagnoses }: Props) => {
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

  // added for ex 9.24
  // const getDiagnosisName = (code: string) => {
  //   const description = diagnoses.find(d => d.code === code);

  //   return description ? description.name : '';
  // };
  
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
                <EntryDetails entry={entry} diagnoses={diagnoses} />
              
                {/* {
                  entry.diagnosisCodes?.map((code: string) =>(
                    <ul key={code}>
                      <li>{code} - {getDiagnosisName(code)}</li>
                    </ul>
                  ))
                } */}
                
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default PatientInfo;



// // Updated due to exercise 9.23
// import { useState, useEffect } from "react";
// import { Patient, Entry, Diagnosis } from '../../types';
// import { useParams } from "react-router-dom";
// import patientService from "../../services/patients";
// import { FemaleRounded, MaleRounded } from '@mui/icons-material';

// // for ex. 9.24
// interface Props {
//   diagnoses: Diagnosis[];
// }

// const PatientInfo = ({ diagnoses }: Props) => {
//   const [patient, setPatient] = useState<Patient | null>(null);
//   const { id } = useParams<{ id: string }>();

//   useEffect(() => {
//     const fetchPatient = async () => {
//       // used a type guard
//       // -- Could have bypassed id error by doing getPatient(id!)
//       if (typeof id === 'string') {
//         const data = await patientService.getPatient(id);

//         setPatient(data);
//       }
//     }

//     fetchPatient();
//   }, [id]);

//   // added for ex 9.24
//   const getDiagnosisName = (code: string) => {
//     const description = diagnoses.find(d => d.code === code);

//     return description ? description.name : '';
//   };
  
//   return (
//     <div>
//       <h2>
//         {patient?.name}
//         {patient?.gender === 'male' ? <MaleRounded /> : <FemaleRounded />}
//       </h2>

//       <div>
//         <div>
//           <p>
//             <strong>SSN:</strong> {patient?.ssn}
//             <br />
//             <strong>Occupation:</strong> {patient?.occupation}
//           </p>
//         </div>
//         <hr />

//         <h3>Entries</h3>

//         <div>
//           {
//             patient?.entries.map((entry: Entry) => (
//               <div key={entry.id}>
//                 <p>
//                   <strong>{entry.date}: </strong> {entry.description}
//                 </p>
              
//                 {
//                   entry.diagnosisCodes?.map((code: string) =>(
//                     <ul key={code}>
//                       <li>{code} - {getDiagnosisName(code)}</li>
//                     </ul>
//                   ))
//                 }
                
//               </div>
//             ))
//           }
//         </div>
//       </div>
//     </div>
//   )
// }

// export default PatientInfo;