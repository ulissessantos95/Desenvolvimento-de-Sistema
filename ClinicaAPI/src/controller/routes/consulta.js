import { Router } from 'express';
import { consultaController } from "../controller/Consulta/ConsultaController.js";
export const consultaRouter = Router()

  //TABELA CONSULTA

  consultaRouter.get('/consultas', consultaController.getTodasAsConsultas)

  consultaRouter.get("/consultas/:id", consultaController.getConsultaPorId)
  
  consultaRouter.post("/consultas", consultaController.criarConsulta)
  
  consultaRouter.put("/consulta/:id", consultaController.atualizarConsulta)
  
  consultaRouter.delete("/consultas/:id", consultaController.deletarConsulta)
