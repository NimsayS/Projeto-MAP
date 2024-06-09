// queries.js
const getSqlInstance = require('./db');

async function Hospitaisget(nome_hos) {
  const sql = getSqlInstance();
  return await sql`select * from hospital where nome_hos = ${nome_hos}`;
}

async function Getusuarios() {
  const sql = getSqlInstance();
  return await sql`select * from pessoa`;
}

async function GetExames() {
  const sql = getSqlInstance();
  return await sql`select * from exames`;
}

async function GetEnfermeiro() {
  const sql = getSqlInstance();
  return await sql`select * from enfermeiro`;
}

async function GetMedicos() {
  const sql = getSqlInstance();
  return await sql`select * from medico`;
}

async function GetConsulta() {
  const sql = getSqlInstance();
  return await sql`select * from consulta`;
}

async function Consulta() {
  const sql = getSqlInstance();
  return await sql`INSERT INTO consulta (id_consulta, prescricao, data, diagnostico, exames)
    VALUES (200, 'Tomar dipirona', '2024-05-29 10:00:00', 'dor de cabeça', ARRAY['Medir temperatura', 'exame clínico'])`;
}

async function Pessoa() {
  const sql = getSqlInstance();
  return await sql`INSERT INTO pessoa (nome, cpf, data_nascimento, endereco, telefone, id_sus) VALUES (
    'Gabriel Mendes',
    '100.300.888-03',
    '1990-07-02T13:10:00.000Z',
    '(1502, "Rua das Orquídeas", Recife, "Jardim Botânico", PE, "Hospital São Rafael", 901234567)',
    ARRAY['(83)99126-7044', '(67)981984'],
    15
  )`;
}

module.exports = {
  Hospitaisget,
  Getusuarios,
  Consulta,
  GetConsulta,
  Pessoa,
  GetExames,
  GetEnfermeiro,
  GetMedicos,
};
