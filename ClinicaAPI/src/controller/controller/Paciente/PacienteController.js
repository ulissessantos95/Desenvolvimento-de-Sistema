import { prismaClient } from "../../../prisma/prisma.js";

class PacienteController {
    constructor() { }
    async getTodosOsPacientes(req, res) {
        const { page, limit } = req.params
        const pageNumber = Number(page)
        const limitNumber = Number(limit)

        try{
            const [paciente] = await prismaClient.paciente.findMany({
                skip: (pageNumber -1) * limit,
                take: limitNumber,
            });
            return res.json(paciente)
        }catch (e){
            console.log(e)
        }
    }

    async getPacientePorId(req, res) {
        try{
            const paciente = await prismaClient.paciente.findUnique({
                where: {
                    id: Number(req.params.id)
                }
            })
    
                if(paciente == null){
                    return res.json("paciente não encontrado")
                }
    
                return res.json(paciente)
        }
        catch (e){
            console.log(e)
        }
    }

    async criarPaciente(req, res) {
        try {
            const { body } = req
            const paciente = await prismaClient.paciente.create({
              data: {
      
              nome: body.nome,
              cpf: body.cpf,
              telefone: body.telefone,
              data_nascimento: new Date(body.data_nascimento),
              sexo: body.sexo,
              email: body.email,
              responsavel: body.responsavel,
      
              },
            })
            return res.status(201).json(paciente)
          } catch (error) {
            console.error(error)
      
          }
    }
    async atualizarPaciente(req, res) {
        try {
            const { body, params } = req
    
            if(body.nome || body.cpf || body.telefone || body.data_nascimento || body.sexo || body.responsavel || body.consulta || body.exame){
                await prismaClient.paciente.update({
                    where: { id: Number(params.id)},
                    data: {
                        ...body
                    },
                })
        
                const pacienteAtualizado = await prismaClient.paciente.findUnique({
                    where: {
                        id: Number(params.id)
                    }
                })
        
                res.status(201).json({
                    message: "paciente Atualizado!",
                    data: pacienteAtualizado
                })
        
                }else {
                    res.status(404).send("Atributos enviados não condizem com o schema")
                }
        
    
        } catch (error) {
            console.log(error)
    
            if(error.code === "P2025") return res.status(404).send("paciente não encontrado");
    
        }
    }
    async deletarPaciente(req, res) {
        const { params } = req
        try {
          const pacienteDeletado = await prismaClient.paciente.delete({
            where: {
              id: Number(params.id),
            },
          })
          res.status(200).json({
            message: "paciente deletado!",
            data: pacienteDeletado
          })
        } catch (error) {
          console.log(error)
          
          if(error.code === "P2025") return res.status(404).send("paciente não encontrado");
        }
    }
}
export const pacienteController = new PacienteController();