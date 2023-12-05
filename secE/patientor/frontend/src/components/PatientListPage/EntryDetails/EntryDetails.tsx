// Added for ex. 9.25
import { Entry } from '../../../types';
import { assertNever } from '../../../utils/utils';
import HospitalEntry from '../EntryDetails/HospitalEntry';
import OccupationalHealthcareEntry from './OccupationalHealthCareEntry';
import HealthCheckEntry from './HealthCheckEntry';

interface Props {
  entry: Entry
}

const EntryDetails = ({ entry }: Props) => {
  switch(entry.type) {
    case "Hospital":
      return <HospitalEntry />;
    case "OccupationalHealthcare":
      return <OccupationalHealthcareEntry />;
    case "HealthCheck":
      return <HealthCheckEntry />;
    default:
      return assertNever(entry);
  }
};

export default EntryDetails;