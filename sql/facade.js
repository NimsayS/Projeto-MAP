const postgresConnection = require('./queries.js');
async function getHospitalByName(nome_hos) {
    return await postgresConnection.Hospitaisget(nome_hos);
}
async function getUsuarios() {
    return await postgresConnection.Getusuarios();
}

async function getExames() {
    return await postgresConnection.GetExames();
}

async function getEnfermeiros() {
    return await postgresConnection.GetEnfermeiro();
}

async function getMedicos() {
    return await postgresConnection.GetMedicos();
}

async function getConsultas() {
    return await postgresConnection.GetConsulta();
}

async function realizarConsulta() {
    return await postgresConnection.Consulta();
}

async function adicionarPessoa() {
    return await postgresConnection.Pessoa();
}

module.exports = {
    getUsuarios,
    getExames,
    getEnfermeiros,
    getMedicos,
    getConsultas,
    realizarConsulta,
    adicionarPessoa,
    getHospitalByName
};