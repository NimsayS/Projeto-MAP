const express = require('express');
const router = express.Router();
require('dotenv').config();
const logger = require("./logger/logger.js");
const generator = require('generate-password');
const bcrypt = require('bcrypt');
const postgresConnection = require('./Projeto-MAP/sql/queries.js');
const facade = require('./Projeto-MAP/sql/facade.js')


router.get('/api/hospital/:nome_hos', async (req, res) => {
    try {
        const nome_hos = req.params.nome_hos;
        const hospitais = await facade.getHospitalByName(nome_hos);
        res.status(200).json({ hospitals: hospitais, status: 'success' });
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});




router.post('/api/pessoa', async (req, res)=>{
    
    const {nome,cpf,data_nascimento,endereco,telefone,id_sus} = req.body;
       
       const paciente = {nome,cpf,data_nascimento,endereco,telefone,id_sus};
       
   
      postgresConnection.Pessoa(paciente).then(response=>{
           res.status(201).send({msg: response, status: 'success'});
   
       }).catch(err=>{res.status(500).send({msg: 'Um erro ocorreu ao tentar coletar os usuários: ' + err});})
       
   })


router.post('/api/consulta', async (req, res)=>{
    
    const {id_consulta,prescricao,data,diagnostico,exames}= req.body;
       
       const c = {id_consulta,prescricao,data,diagnostico,exames};
       
   
       postgresConnection.Consulta(c).then(response=>{
           res.status(201).send({msg: response, status: 'success'});
   
       }).catch(err=>{res.status(500).send({msg: 'Um erro ocorreu ao tentar coletar os usuários: ' + err});})
       
   })


router.get('/api/pessoa', async (req, res) => {
    try {
        const usuarios = await facade.getUsuarios();
        res.status(200).json({ usuarios: usuarios, status: 'success' });
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.get('/api/consulta', async (req, res) => {
    try {
        const consultas = await facade.getConsultas();
        res.status(200).json({ consultas: consultas, status: 'success' });
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.get('/api/exames', async (req, res) => {
    try {
        const exames = await facade.getExames();
        res.status(200).json({ exames: exames, status: 'success' });
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.get('/api/medico', async (req, res) => {
    try {
        const medicos = await facade.getMedicos();
        res.status(200).json({ medicos: medicos, status: 'success' });
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.get('/api/enfermeiro', async (req, res) => {
    try {
        const enfermeiros = await facade.getEnfermeiros();
        res.status(200).json({ enfermeiros: enfermeiros, status: 'success' });
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
    }
});






module.exports = router;