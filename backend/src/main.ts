const express = require('express');
const cors    = require('cors');
import {Request, Response} from 'express';

const app = express();
const PORTA = 3000;

// Configurações do Express para permitir JSON no corpo das requisições
app.use(express.json());

// Habilita o CORS para todas as origens
app.use(cors());

app.get('/', function( requisicao: Request, resposta: Response ){
    resposta.send('Teste');
});

// Inicia o servidor
app.listen(PORTA, () => {
    console.log(`Servidor rodando em http://localhost:${PORTA}`);
});



