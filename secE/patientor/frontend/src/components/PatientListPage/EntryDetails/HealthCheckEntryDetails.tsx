// Added for ex 9.25
import { HealthCheckEntry } from "../../../types";
import { Box } from "@mui/material";
import { MedicalInformation, Favorite } from "@mui/icons-material";

interface Props {
  entry: HealthCheckEntry
}

const HealthCheckEntryDetails = ({ entry }: Props) => {
  const heartColor = (rating: number) => {
    if (rating === 0) {
      return 'red';
    } else if (rating === 1) {
      return 'yellow';
    } else if (rating === 2) {
      return 'orange';
    } else if (rating === 3) {
      return 'gray';
    }
  };

  return (
    <Box sx={{
      width: 780,
      height: 'auto',
      border: 1,
      borderColor: 'purple',
      borderRadius: 1.5,
      marginTop: 1,
      marginBottom: 1,
      padding: 2,
      lineHeight: 2
    }}>
      <strong>{entry.date}</strong> <MedicalInformation color="info"/>
      <br />
      <em>{entry.description}</em>
      <br />
      {/* could have used "sx" -- just know the difference */}
      <Favorite style={{ color: heartColor(entry.healthCheckRating) }} />
      <br />
      <span style={{ color: "green" }}>Diagnosed by {entry.specialist}</span>
    </Box>
  );
};

export default HealthCheckEntryDetails;