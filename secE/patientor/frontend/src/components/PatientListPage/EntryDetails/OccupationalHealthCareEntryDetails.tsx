// Added for ex 9.25
import { OccupationalHealthcareEntry, Diagnosis } from "../../../types";
import { Box } from "@mui/material";
import WorkIcon from '@mui/icons-material/Work';
import DiagnosesCodes from "./DiagnosesCodes";

interface Props {
  entry: OccupationalHealthcareEntry;
  diagnoses: Diagnosis[];
}

const OccupationalHealthcareEntryDetails = ({ entry, diagnoses }: Props) => {

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
      <strong>{entry.date}</strong> <WorkIcon color="info" />
      <br />
      Employer: {entry.employerName}
      <br />
      Description: {entry.description}
      <br />
      <span style={{ color: "green" }}>Diagnosed by {entry.specialist}</span>

      {entry.diagnosisCodes ? (
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

          <DiagnosesCodes entry={entry} diagnoses={diagnoses} />
        </Box>
        ) : (
          ""
        )
      }
    </Box>
  );
};

export default OccupationalHealthcareEntryDetails;