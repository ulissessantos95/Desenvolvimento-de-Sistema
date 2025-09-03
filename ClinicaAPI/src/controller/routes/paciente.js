import { Router } from 'express';
import { pacienteController } from "../controller/Paciente/PacienteController.js";
export const pacienteRouter = Router()

  //TABELA PACIENTE


  pacienteRouter.get('/pacientes', pacienteController.getTodosOsPacientes)

  pacienteRouter.get("/pacientes/:id", pacienteController.getPacientePorId)
  
  pacienteRouter.post("/pacientes", pacienteController.criarPaciente)
  
  pacienteRouter.put("/paciente/:id", pacienteController.atualizarPaciente)
  
  pacienteRouter.delete("/pacientes/:id", pacienteController.deletarPaciente)


