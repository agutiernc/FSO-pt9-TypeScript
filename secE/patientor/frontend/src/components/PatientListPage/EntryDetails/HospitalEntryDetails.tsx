// Added for ex 9.25
import { HospitalEntry, Diagnosis } from "../../../types";
import { Box } from "@mui/material";
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import DiagnosesCodes from "./DiagnosesCodes";

interface Props {
  entry: HospitalEntry;
  diagnoses: Diagnosis[];
}

const HospitalEntryDetails = ({ entry, diagnoses }: Props) => {

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

      <DiagnosesCodes entry={entry} diagnoses={diagnoses} />
    </Box>
  );
};

export default HospitalEntryDetails;