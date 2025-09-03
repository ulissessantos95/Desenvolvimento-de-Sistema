import { Router } from 'express';
import { prontuarioController } from "../controller/Prontuario/ProntuarioController.js";
export const prontuarioRouter = Router()

  //TABELA PRONTUÁRIO

  prontuarioRouter.get('/prontuarios', prontuarioController.getTodosOsProntuarios)

  prontuarioRouter.get("/prontuarios/:id", prontuarioController.getProntuarioPorId)
  
  prontuarioRouter.post("/prontuarios", prontuarioController.criarProntuario)
  
  prontuarioRouter.put("/prontuario/:id", prontuarioController.atualizarProntuario)
  
  prontuarioRouter.delete("/prontuarios/:id", prontuarioController.deletarProntuario)