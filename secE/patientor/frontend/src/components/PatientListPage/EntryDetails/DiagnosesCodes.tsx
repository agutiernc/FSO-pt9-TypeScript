import { Box } from "@mui/material";
import { Diagnosis, Entry } from "../../../types";

interface Props {
  diagnoses: Diagnosis[];
  entry: Entry;
}

const DiagnosesCodes = ({ diagnoses, entry }: Props) => {
  const getDiagnosisName = (code: string) => {
    const description = diagnoses.find(d => d.code === code);

    return description ? description.name : '';
  };

  return (
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

      <div>
        {
          entry.diagnosisCodes?.map((code: string) => (
            <ul key={code}>
              <li>{code} - {getDiagnosisName(code)}</li>
            </ul>
          ))
        }
      </div>
    
    </Box>
  )
};

export default DiagnosesCodes;