// Added for ex 9.25
import { HospitalEntry, Diagnosis } from "../../../types";
import { Box } from "@mui/material";
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';

interface Props {
  entry: HospitalEntry;
  diagnoses: Diagnosis[];
}

const HospitalEntryDetails = ({ entry, diagnoses }: Props) => {
  console.log('From HE: ', entry)

  const getDiagnosisName = (code: string) => {
    const description = diagnoses.find(d => d.code === code);

    return description ? description.name : '';
  };


  return (
    <Box sx={{
      width: 780,
      height: 'auto',
      border: 1,
      borderColor: 'purple',
      borderRadius: 1.5,
      padding: 2,
      marginTop: 1,
      marginBottom: 1,
      lineHeight: 2
    }}>
      <strong>{entry.date}</strong> <LocalHospitalIcon color="warning" />
      <br />
      Description: {entry.description}
      <br />
      Criteria: {entry.discharge?.criteria}
      <br />
      Discharged: {entry.discharge?.date}
      <br />
      <span style={{ color: "green" }}>Diagnosed by {entry.specialist}</span>

      <Box sx={{
        width: 550,
        height: 'auto',
        border: 1,
        borderColor: 'blue',
        borderRadius: 1.5,
        marginTop: 1,
        marginBottom: 1,
        lineHeight: 2
      }}>
        <h4 style={{ 
          marginTop: 0, 
          marginLeft: 10, 
          padding: 2
        }}>
          Diagnosis Codes
        </h4>

        {/* Add diagnosis codes here - move code from PatientInfo */}

        {
          entry.diagnosisCodes?.map((code: string) => (
            <ul key={code}>
              <li>{code} - {getDiagnosisName(code)}</li>
            </ul>
          ))
        }
      </Box>
    </Box>
  );
}

export default HospitalEntryDetails;