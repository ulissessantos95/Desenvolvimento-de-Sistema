import { consultaRouter } from './routes/consulta.js';
import { exameRouter } from './routes/exame.js';
import { pacienteRouter } from './routes/paciente.js';
import { prontuarioRouter } from './routes/prontuario.js';
import { usuarioRouter } from './routes/usuario.js';
import express from 'express';


const app = express();

app.use(express.json());

//rota usuario
app.use(usuarioRouter);

//rota prontuario
app.use(prontuarioRouter);

//rota consulta
app.use(consultaRouter);

//rota paciente
app.use(pacienteRouter);

//rota exame
app.use(exameRouter);

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});



