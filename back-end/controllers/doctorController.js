// controllers/doctorController.js
const doctors = require('../data/doctors');

exports.getDoctors = (req, res) => {
  const { location = '', speciality = '' } = req.query;
  const filtered = doctors.filter(doc =>
    doc.city.toLowerCase().includes(location.toLowerCase()) &&
    doc.speciality.toLowerCase().includes(speciality.toLowerCase())
  );
  res.json(filtered);
};
