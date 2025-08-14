import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import AppointmentForm from './components/AppointmentForm';
import AppointmentTable from './components/AppointmentTable';

const API = 'http://localhost:5000/api/appointments';

function App() {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const normalize = (rows) =>
    rows.map((r) => ({
      id: r.id,
      patientName: r.patient_name ?? r.patientName,
      date: r.date ? new Date(r.date).toISOString().slice(0, 10) : '',
      time: r.time ?? '',
      reason: r.reason ?? '',
    }));

  const loadAppointments = useCallback(async () => {
    setLoading(true);
    setError('');
    try {
      const { data } = await axios.get(API);
      setAppointments(normalize(data));
    } catch (e) {
      setError(e?.response?.data?.error || 'Failed to load appointments');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadAppointments();
  }, [loadAppointments]);

  const handleCreated = async () => {
    await loadAppointments();
  };

  return (
    <div className="App" style={{ padding: 16 }}>
      <h1>Patient Scheduling</h1>
      <AppointmentForm onCreated={handleCreated} />
      {error && <div style={{ color: 'red' }}>{error}</div>}
      <AppointmentTable data={appointments} loading={loading} />
    </div>
  );
}

export default App;
