require('dotenv').config();
const express = require('express');
const cors = require('cors');
const filmeRoutes = require('./routes/filmeRoutes');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/v1/controle-filmes', filmeRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`API controle_filmes_api rodando na porta ${PORT}`);
});
