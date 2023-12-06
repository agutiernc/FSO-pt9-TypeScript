// Added for ex. 9.25
import { Entry } from '../../../types';
import { assertNever } from '../../../utils/utils';
import HospitalEntry from './HospitalEntryDetails';
import OccupationalHealthcareEntryDetails from './OccupationalHealthCareEntryDetails';
import HealthCheckEntryDetails from './HealthCheckEntryDetails';

interface Props {
  entry: Entry
}

const EntryDetails = ({ entry }: Props) => {
  switch(entry.type) {
    case "Hospital":
      return <HospitalEntry entry={entry} />;
    case "OccupationalHealthcare":
      return <OccupationalHealthcareEntryDetails entry={entry} />;
    case "HealthCheck":
      return <HealthCheckEntryDetails entry={entry} />;
    default:
      return assertNever(entry);
  }
};

export default EntryDetails;