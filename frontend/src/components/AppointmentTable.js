import React from 'react';

export default function AppointmentTable({ data, loading }) {
  if (loading) return <div>Loading…</div>;
  if (!data?.length) return <div>No appointments yet.</div>;

  return (
    <div className="tableWrap">
      <table className="table">
        <thead>
          <tr>
            <th>Patient Name</th>
            <th>Date</th>
            <th>Time</th>
            <th>Reason</th>
          </tr>
        </thead>
        <tbody>
          {data.map((a) => (
            <tr key={a.id}>
              <td>{a.patientName ?? a.patient_name}</td>
              <td>{a.date ? new Date(a.date).toISOString().slice(0, 10) : ''}</td>
              <td>{a.time}</td>
              <td>{a.reason}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
