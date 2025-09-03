import { prismaClient } from "../../../prisma/prisma.js";

class ExameController {
    constructor() { }
    async getTodosOsExames(_, res) {

        try {
            const exames = await prismaClient.exame.findMany();
            return response.json(exames)
          }
          catch (e) {
            console.log(e)
          }
    }

    async getExamePorId(req, res) {
        try {
            const exames = await prismaClient.exame.findUnique({
              where: {
                id: Number(request.params.id)
              }
            })
            if (!exames) return response.status(404).send("Exame não existe!")
            return response.json(exames)
          }
          catch (e) {
            console.log(e)
          }
    }

    async criarExame(req, res) {
        try {
            const { body } = req
            const bodyKeys = Object.keys(body)
            for (const key of bodyKeys) {
              if (key !== "tipo_exame" &&
                key !== "resultado" &&
                key !== "data_exame" &&
                key !== "link_arquivo" &&
                key !== "observacoes" &&
                key !== "paciente_id" 
              ) return res.status(404).send("Colunas não existentes")
            }
            const exames = await prismaClient.exame.create({
              data: {
                ...body,
                data_exame: new Date(body.data_exame)
              },
            })
            return res.status(201).json(exames)
          } catch (error) {
            console.error(error)
            if (error.code === "P2002") {
              res.status(404).send("Falha ao cadastrar paciente: Email já cadastrado!")
            }
          }
    }
    async atualizarExame(req, res) {
        try {
            const { body, params } = req
            const bodyKeys = Object.keys(body)
            for (const key of bodyKeys) {
              if (key !== "tipo_exame" &&
                key !== "resultado" &&
                key !== "data_exame" &&
                key !== "link_arquivo" &&
                key !== "observacoes" &&
                key !== "paciente_id" 
              ) return res.status(404).send("Colunas não existentes")
            }
            await prismaClient.exame.update({
              where: { id: Number(params.id) },
              data: {
                ...body
              },
            })
            const exameAtualizado = await prismaClient.exame.findUnique({
              where: {
                id: Number(params.id)
              }
            })
        
            return res.status(201).json({
              message: "Exame atualizado!",
              data: exameAtualizado
            })
        
          } catch (error) {
            if (error.code == "P2025") {
              res.status(404).send("Exame não existe no banco")
            }
      
          }
    }
    async deletarExame(req, res) {
        const { params } = req
        try {
          const exameDeletado = await prismaClient.exame.delete({
            where: {
              id: Number(params.id),
            },
          })
          res.status(200).json({
            message: "Exame deletado!",
            data: exameDeletado
          })
        } catch (error) {
          if (error.code == "P2025") {
            res.status(404).send("Paciente não existe no banco")
          }
        }
    }
}
export const exameController = new ExameController();