import { Entry } from "../../../types";

interface Props {
  entry: Entry
}

const HospitalEntry = ({ entry }: Props) => {
  console.log('From HE: ', entry)
  return (
    <div>
      <h1>HE</h1>
    </div>
  );
}

export default HospitalEntry;