import { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Link, Routes, Navigate } from "react-router-dom";
import { apiBaseUrl } from "./constants";
import { Patient, Diagnosis } from "./types";
import patientService from "./services/patients";
import diagnosisService from "./services/diagnoses"

import PatientListPage from "./components/PatientListPage";
import PatientInfo from "./components/PatientListPage/PatientInfo";
import { Button, Divider, Container, Typography } from '@mui/material';

const App = () => {
  const [patients, setPatients] = useState<Patient[]>([]);
  const [diagnoses, setDiagnoses] = useState<Diagnosis[]>([]); // for ex. 9.24

  useEffect(() => {
    void axios.get<void>(`${apiBaseUrl}/ping`);

    const fetchPatientList = async () => {
      const patients = await patientService.getAll();
      const diagnoses = await diagnosisService.getAllDiagnoses();

      setPatients(patients);
      setDiagnoses(diagnoses);
    };

    void fetchPatientList();
  }, []);
  
  return (
    <div className="App">
      <Router>
        <Container>
          <Typography variant="h3" style={{ marginBottom: "0.5em" }}>
            Patientor
          </Typography>

          <Button component={Link} to="/" variant="contained" color="primary">
            Home
          </Button>

          <Divider hidden />

          <Routes>
            <Route path="/" element={
                <PatientListPage patients={patients} setPatients={setPatients} />
              }
            />

            {/* Added patient id & wildcard routes for ex: 9.21 */}
            <Route path="/patients/:id" element={<PatientInfo diagnoses={diagnoses} />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Container>
      </Router>
    </div>
  );
};

export default App;
