// server.js
const app = require('./app');

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Backend server running at http://localhost:${PORT}`);
});
