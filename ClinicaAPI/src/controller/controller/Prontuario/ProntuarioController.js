import { prismaClient } from "../../../prisma/prisma.js";

class ProntuarioController {
    constructor() { }
    async getTodosOsProntuarios(req, res) {
        const { page, limit } = req.params
        const pageNumber = Number(page)
        const limitNumber = Number(limit)
        try{
            const [prontuario] = await prismaClient.prontuario.findMany({
                skip: (pageNumber -1) * limit,
                take: limitNumber,
            });
            return res.json(prontuario)
        }catch (e){
            console.log(e)
        }
    }

    async getProntuarioPorId(req, res) {
        try{
            const prontuario = await prismaClient.prontuario.findUnique({
                where: {
                    id: Number(request.params.id)
                }
            })
    
                if(prontuario == null){
                    return response.json("prontuario não encontrado")
                }
    
                return response.json(consulta)
        }
        catch (e){
            console.log(e)
        }
    }

    async criarProntuario(req, res) {
        try {
            const { body } = req
            const prontuario = await prismaClient.prontuario.create({
              data: {
      
                  descricao: body.descricao,
                  data: new Date(body.data),
                  medico_responsavel_id: body.medico_responsavel_id,
                  paciente_id: body.paciente_id
      
              },
            })
            return res.status(201).json(prontuario)
          } catch (error) {
            console.error(error)
      
          }
    }
    async atualizarProntuario(req, res) {
        try {
            const { body, params } = req
    
            if(body.descricao || body.data || body.medico_responsavel_id|| body.paciente_id){
                await prismaClient.prontuario.update({
                    where: { id: Number(params.id)},
                    data: {
                        ...body
                    },
                })
        
                const prontuarioAtualizado = await prismaClient.prontuario.findUnique({
                    where: {
                        id: Number(params.id)
                    }
                })
        
                res.status(201).json({
                    message: "prontuario Atualizado!",
                    data: prontuarioAtualizado
                })
        
                }else {
                    res.status(404).send("Atributos enviados não condizem com o schema")
                }
        
    
        } catch (error) {
            console.log(error)
    
            if(error.code === "P2025") return res.status(404).send("prontuario não encontrado");
    
        }
    }
    async deletarProntuario(req, res) {
        const { params } = req
        try {
          const prontuarioDeletado = await prismaClient.prontuario.delete({
            where: {
              id: Number(params.id),
            },
          })
          res.status(200).json({
            message: "prontuario deletado!",
            data: prontuarioDeletado
          })
        } catch (error) {
          console.log(error)
          
          if(error.code === "P2025") return res.status(404).send("prontuario não encontrado");
        }
    }
}
export const prontuarioController = new ProntuarioController();