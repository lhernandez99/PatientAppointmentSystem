import React, { useState } from 'react';
import axios from 'axios';

const API = 'http://localhost:5000/api/appointments';

export default function AppointmentForm({ onCreated }) {
  const [form, setForm] = useState({
    patientName: '',
    date: '',
    time: '',
    reason: ''
  });
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError('');
    setSuccess(false);
    try {
      await axios.post(API, form);
      await onCreated?.();
      setForm({ patientName: '', date: '', time: '', reason: '' });
      setSuccess(true);
      setTimeout(() => setSuccess(false), 2000); // hide after 2s
    } catch (err) {
      setError(err?.response?.data?.error || 'Failed to create appointment');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <div className="field">
          <label className="label">Patient Name</label>
          <input
            className="input"
            name="patientName"
            placeholder="Enter patient name"
            value={form.patientName}
            onChange={onChange}
            required
          />
        </div>
        <div className="field">
          <label className="label">Date</label>
          <input
            className="input"
            name="date"
            type="date"
            value={form.date}
            onChange={onChange}
            required
          />
        </div>
        <div className="field">
          <label className="label">Time</label>
          <input
            className="input"
            name="time"
            type="time"
            value={form.time}
            onChange={onChange}
            required
          />
        </div>
        <div className="field">
          <label className="label">Reason</label>
          <input
            className="input"
            name="reason"
            placeholder="Reason for visit"
            value={form.reason}
            onChange={onChange}
          />
        </div>
        <button className="btn" type="submit" disabled={submitting}>
          {submitting ? 'Saving…' : 'Add'}
        </button>
      </form>

      {error && <div className="alert alert--error">{error}</div>}
      {success && <div className="alert alert--success">Appointment Saved!</div>}
    </>
  );
}
