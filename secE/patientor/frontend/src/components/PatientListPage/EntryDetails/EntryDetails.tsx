// Added for ex. 9.25
import { Entry } from '../../../types';
import { assertNever } from '../../../utils/utils';
import HospitalEntry from '../EntryDetails/HospitalEntry';
import OccupationalHealthcareEntry from './OccupationalHealthCareEntry';
import HealthCheckEntryDetails from './HealthCheckEntryDetails';

interface Props {
  entry: Entry
}

const EntryDetails = ({ entry }: Props) => {
  switch(entry.type) {
    case "Hospital":
      return <HospitalEntry entry={entry} />;
    case "OccupationalHealthcare":
      return <OccupationalHealthcareEntry entry={entry} />;
    case "HealthCheck":
      return <HealthCheckEntryDetails entry={entry} />;
    default:
      return assertNever(entry);
  }
};

export default EntryDetails;