// Added for ex 9.25
import { OccupationalHealthcareEntry } from "../../../types";
import { Box } from "@mui/material";
import WorkIcon from '@mui/icons-material/Work';

interface Props {
  entry: OccupationalHealthcareEntry;
}

const OccupationalHealthcareEntryDetails = ({ entry }: Props) => {

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
    </Box>
  );
}

export default OccupationalHealthcareEntryDetails;