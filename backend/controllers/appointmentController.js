const db = require('../models/db');

// GET all appointments
const getAppointments = (req, res) => {
  db.query('SELECT * FROM appointments', (err, results) => {
    if (err) {
      console.error('Error fetching appointments:', err);
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
};

// CREATE a new appointment
const createAppointment = (req, res) => {
  console.log('Incoming request body:', req.body);

  const { patientName, date, time, reason } = req.body;

  // Basic validation
  if (!patientName || !date || !time) {
    return res.status(400).json({ error: 'patientName, date, and time are required.' });
  }

  db.query(
    'INSERT INTO appointments (patient_name, date, time, reason) VALUES (?, ?, ?, ?)',
    [patientName, date, time, reason || null],
    (err, results) => {
      if (err) {
        console.error('Error creating appointment:', err);
        return res.status(500).json({ error: err.message });
      }

      res.status(201).json({
        message: 'Appointment created',
        id: results.insertId,
        patientName,
        date,
        time,
        reason: reason || null
      });
    }
  );
};

module.exports = { getAppointments, createAppointment };