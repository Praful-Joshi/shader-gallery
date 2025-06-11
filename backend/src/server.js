// src/server.js
import dotenv from 'dotenv';
import express from 'express';
dotenv.config();
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Shader Gallery Backend Running 🎨');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
