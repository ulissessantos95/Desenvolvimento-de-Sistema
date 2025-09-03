import { prismaClient } from "../../../prisma/prisma.js";

class ConsultaController {
    constructor() { }
    async getTodasAsConsultas(_, res) {

        try{
            const consulta = await prismaClient.consulta.findMany();
            return res.json(consulta)
        }catch (e){
            console.log(e)
        }
    }

    async getConsultaPorId(req, res) {
        try{
            const consulta = await prismaClient.consulta.findUnique({
                where: {
                    id: Number(request.params.id)
                }
            })
    
                if(consulta == null){
                    return response.json("consulta não encontrada")
                }
    
                return response.json(consulta)
        }
        catch (e){
            console.log(e)
        }
    }

    async criarConsulta(req, res) {
        try {
            const { body } = req
            const consulta = await prismaClient.consulta.create({
              data: {
      
                  motivo: body.motivo,
                  data_consulta: new Date(body.data_consulta),
                  observacoes: body.observacoes,
                  paciente_id: body.paciente_id,
                  medico_responsavel_id: body.medico_responsavel_id  
      
              },
            })
            return res.status(201).json(consulta)
          } catch (error) {
            console.error(error)
      
          }
    }
    async atualizarConsulta(req, res) {
        try {
            const { body, params } = req
    
            if(body.motivo || body.observacoes || body.data_consulta || body.medico_responsavel_id|| body.paciente_id){
                await prismaClient.consulta.update({
                    where: { id: Number(params.id)},
                    data: {
                        ...body
                    },
                })
        
                const consultaAtualizado = await prismaClient.consulta.findUnique({
                    where: {
                        id: Number(params.id)
                    }
                })
        
                res.status(201).json({
                    message: "consulta Atualizado!",
                    data: consultaAtualizado
                })
        
                }else {
                    res.status(404).send("Atributos enviados não condizem com o schema")
                }
        
    
        } catch (error) {
            console.log(error)
    
            if(error.code === "P2025") return res.status(404).send("consulta não encontrada");
    
        }
    }
    async deletarConsulta(req, res) {
        const { params } = req
        try {
          const consultaDeletado = await prismaClient.consulta.delete({
            where: {
              id: Number(params.id),
            },
          })
          res.status(200).json({
            message: "consulta deletado!",
            data: consultaDeletado
          })
        } catch (error) {
          console.log(error)
          
          if(error.code === "P2025") return res.status(404).send("consulta não encontrada");
        }
    }
}
export const consultaController = new ConsultaController();