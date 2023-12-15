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
    <div>
      {
        entry.diagnosisCodes?.map((code: string) => (
          <ul key={code}>
            <li>{code} - {getDiagnosisName(code)}</li>
          </ul>
        ))
      }
    </div>
  )
};

export default DiagnosesCodes;