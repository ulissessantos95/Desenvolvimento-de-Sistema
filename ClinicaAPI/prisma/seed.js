import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient();

async function main() {
  // await prisma.usuario.createMany({
  //   data: [
  //     { nome:"Ulisses Miranda", 
  //       email: "ulisses34@email.com", 
  //       senha: "123",
  //       cargo: "Médico"
  //     },
  //   ],
  // });

  // await prisma.paciente.create({
  //   data: {
  //     nome: "Roberto Rivelino",
  //     sexo: "Masculino",
  //     data_nascimento: new Date("1980-12-11"),
  //     cpf: "958.521.251.65",
  //     telefone: 952556232,
  //     email: "roberto.riva@email.com",
  //     // Consulta: {
  //     //   create: [
  //     //     {
  //     //       motivo: "Dor nas costas",
  //     //       data_consulta: new Date("2023-08-25"),
  //     //       observacoes: "Ibuprofeno 3 vezes ao dia",
  //     //       medico_responsavel_id: 
  //     //     }
  //     //   ]
  //     // },
  //     // Exame: {
  //     //   create: [
  //     //     {
  //     //       tipo: "Densiometro",
  //     //       data_exame: new Date("2023-08-25"),
  //     //       resultado: "deu ruim",
  //     //       link_arquivo: "url.com.br/exame.pdf",
  //     //       observacoes: ""
  //     //     }
  //     //   ]
  //     // }
  //   },
  // });


  await prisma.consulta.createMany({
    data: [
      {
        motivo: "Dor nas costas",
        data_consulta: new Date("2023-08-25"),
        observacoes: "Ibuprofeno 3 vezes ao dia",
        medico_responsavel_id: 1,
        paciente_id: 1
      },
      {
        motivo: "Dor nas costas",
        data_consulta: new Date("2023-08-25"),
        observacoes: "Ibuprofeno 3 vezes ao dia",
        medico_responsavel_id: 1,
        paciente_id: 1
      }, {
        motivo: "Dor nas costas",
        data_consulta: new Date("2023-08-25"),
        observacoes: "Ibuprofeno 3 vezes ao dia",
        medico_responsavel_id: 1,
        paciente_id: 1
      }, {
        motivo: "Dor nas costas",
        data_consulta: new Date("2023-08-25"),
        observacoes: "Ibuprofeno 3 vezes ao dia",
        medico_responsavel_id: 1,
        paciente_id: 1
      }, {
        motivo: "Dor nas costas",
        data_consulta: new Date("2023-08-25"),
        observacoes: "Ibuprofeno 3 vezes ao dia",
        medico_responsavel_id: 1,
        paciente_id: 1
      }, {
        motivo: "Dor nas costas",
        data_consulta: new Date("2023-08-25"),
        observacoes: "Ibuprofeno 3 vezes ao dia",
        medico_responsavel_id: 1,
        paciente_id: 1
      }, {
        motivo: "Dor nas costas",
        data_consulta: new Date("2023-08-25"),
        observacoes: "Ibuprofeno 3 vezes ao dia",
        medico_responsavel_id: 1,
        paciente_id: 1
      }, {
        motivo: "Dor nas costas",
        data_consulta: new Date("2023-08-25"),
        observacoes: "Ibuprofeno 3 vezes ao dia",
        medico_responsavel_id: 1,
        paciente_id: 1
      }, {
        motivo: "Dor nas costas",
        data_consulta: new Date("2023-08-25"),
        observacoes: "Ibuprofeno 3 vezes ao dia",
        medico_responsavel_id: 1,
        paciente_id: 1
      }, {
        motivo: "Dor nas costas",
        data_consulta: new Date("2023-08-25"),
        observacoes: "Ibuprofeno 3 vezes ao dia",
        medico_responsavel_id: 1,
        paciente_id: 1
      }, {
        motivo: "Dor nas costas",
        data_consulta: new Date("2023-08-25"),
        observacoes: "Ibuprofeno 3 vezes ao dia",
        medico_responsavel_id: 1,
        paciente_id: 1
      }, {
        motivo: "Dor nas costas",
        data_consulta: new Date("2023-08-25"),
        observacoes: "Ibuprofeno 3 vezes ao dia",
        medico_responsavel_id: 1,
        paciente_id: 1
      }, {
        motivo: "Dor nas costas",
        data_consulta: new Date("2023-08-25"),
        observacoes: "Ibuprofeno 3 vezes ao dia",
        medico_responsavel_id: 1,
        paciente_id: 1
      }, {
        motivo: "Dor nas costas",
        data_consulta: new Date("2023-08-25"),
        observacoes: "Ibuprofeno 3 vezes ao dia",
        medico_responsavel_id: 1,
        paciente_id: 1
      }, {
        motivo: "Dor nas costas",
        data_consulta: new Date("2023-08-25"),
        observacoes: "Ibuprofeno 3 vezes ao dia",
        medico_responsavel_id: 1,
        paciente_id: 1
      }, {
        motivo: "Dor nas costas",
        data_consulta: new Date("2023-08-25"),
        observacoes: "Ibuprofeno 3 vezes ao dia",
        medico_responsavel_id: 1,
        paciente_id: 1
      }, {
        motivo: "Dor nas costas",
        data_consulta: new Date("2023-08-25"),
        observacoes: "Ibuprofeno 3 vezes ao dia",
        medico_responsavel_id: 1,
        paciente_id: 1
      }, {
        motivo: "Dor nas costas",
        data_consulta: new Date("2023-08-25"),
        observacoes: "Ibuprofeno 3 vezes ao dia",
        medico_responsavel_id: 1,
        paciente_id: 1
      }, {
        motivo: "Dor nas costas",
        data_consulta: new Date("2023-08-25"),
        observacoes: "Ibuprofeno 3 vezes ao dia",
        medico_responsavel_id: 1,
        paciente_id: 1
      }, {
        motivo: "Dor nas costas",
        data_consulta: new Date("2023-08-25"),
        observacoes: "Ibuprofeno 3 vezes ao dia",
        medico_responsavel_id: 1,
        paciente_id: 1
      }, {
        motivo: "Dor nas costas",
        data_consulta: new Date("2023-08-25"),
        observacoes: "Ibuprofeno 3 vezes ao dia",
        medico_responsavel_id: 1,
        paciente_id: 1
      }, {
        motivo: "Dor nas costas",
        data_consulta: new Date("2023-08-25"),
        observacoes: "Ibuprofeno 3 vezes ao dia",
        medico_responsavel_id: 1,
        paciente_id: 1
      }, {
        motivo: "Dor nas costas",
        data_consulta: new Date("2023-08-25"),
        observacoes: "Ibuprofeno 3 vezes ao dia",
        medico_responsavel_id: 1,
        paciente_id: 1
      }, {
        motivo: "Dor nas costas",
        data_consulta: new Date("2023-08-25"),
        observacoes: "Ibuprofeno 3 vezes ao dia",
        medico_responsavel_id: 1,
        paciente_id: 1
      }, {
        motivo: "Dor nas costas",
        data_consulta: new Date("2023-08-25"),
        observacoes: "Ibuprofeno 3 vezes ao dia",
        medico_responsavel_id: 1,
        paciente_id: 1
      }, {
        motivo: "Dor nas costas",
        data_consulta: new Date("2023-08-25"),
        observacoes: "Ibuprofeno 3 vezes ao dia",
        medico_responsavel_id: 1,
        paciente_id: 1
      }, {
        motivo: "Dor nas costas",
        data_consulta: new Date("2023-08-25"),
        observacoes: "Ibuprofeno 3 vezes ao dia",
        medico_responsavel_id: 1,
        paciente_id: 1
      }, {
        motivo: "Dor nas costas",
        data_consulta: new Date("2023-08-25"),
        observacoes: "Ibuprofeno 3 vezes ao dia",
        medico_responsavel_id: 1,
        paciente_id: 1
      }, {
        motivo: "Dor nas costas",
        data_consulta: new Date("2023-08-25"),
        observacoes: "Ibuprofeno 3 vezes ao dia",
        medico_responsavel_id: 1,
        paciente_id: 1
      }, {
        motivo: "Dor nas costas",
        data_consulta: new Date("2023-08-25"),
        observacoes: "Ibuprofeno 3 vezes ao dia",
        medico_responsavel_id: 1,
        paciente_id: 1
      }, {
        motivo: "Dor nas costas",
        data_consulta: new Date("2023-08-25"),
        observacoes: "Ibuprofeno 3 vezes ao dia",
        medico_responsavel_id: 1,
        paciente_id: 1
      }, {
        motivo: "Dor nas costas",
        data_consulta: new Date("2023-08-25"),
        observacoes: "Ibuprofeno 3 vezes ao dia",
        medico_responsavel_id: 1,
        paciente_id: 1
      }, {
        motivo: "Dor nas costas",
        data_consulta: new Date("2023-08-25"),
        observacoes: "Ibuprofeno 3 vezes ao dia",
        medico_responsavel_id: 1,
        paciente_id: 1
      }, {
        motivo: "Dor nas costas",
        data_consulta: new Date("2023-08-25"),
        observacoes: "Ibuprofeno 3 vezes ao dia",
        medico_responsavel_id: 1,
        paciente_id: 1
      }, {
        motivo: "Dor nas costas",
        data_consulta: new Date("2023-08-25"),
        observacoes: "Ibuprofeno 3 vezes ao dia",
        medico_responsavel_id: 1,
        paciente_id: 1
      }, {
        motivo: "Dor nas costas",
        data_consulta: new Date("2023-08-25"),
        observacoes: "Ibuprofeno 3 vezes ao dia",
        medico_responsavel_id: 1,
        paciente_id: 1
      }, {
        motivo: "Dor nas costas",
        data_consulta: new Date("2023-08-25"),
        observacoes: "Ibuprofeno 3 vezes ao dia",
        medico_responsavel_id: 1,
        paciente_id: 1
      }, {
        motivo: "Dor nas costas",
        data_consulta: new Date("2023-08-25"),
        observacoes: "Ibuprofeno 3 vezes ao dia",
        medico_responsavel_id: 1,
        paciente_id: 1
      }, {
        motivo: "Dor nas costas",
        data_consulta: new Date("2023-08-25"),
        observacoes: "Ibuprofeno 3 vezes ao dia",
        medico_responsavel_id: 1,
        paciente_id: 1
      }, {
        motivo: "Dor nas costas",
        data_consulta: new Date("2023-08-25"),
        observacoes: "Ibuprofeno 3 vezes ao dia",
        medico_responsavel_id: 1,
        paciente_id: 1
      }, {
        motivo: "Dor nas costas",
        data_consulta: new Date("2023-08-25"),
        observacoes: "Ibuprofeno 3 vezes ao dia",
        medico_responsavel_id: 1,
        paciente_id: 1
      }, {
        motivo: "Dor nas costas",
        data_consulta: new Date("2023-08-25"),
        observacoes: "Ibuprofeno 3 vezes ao dia",
        medico_responsavel_id: 1,
        paciente_id: 1
      }, {
        motivo: "Dor nas costas",
        data_consulta: new Date("2023-08-25"),
        observacoes: "Ibuprofeno 3 vezes ao dia",
        medico_responsavel_id: 1,
        paciente_id: 1
      }, {
        motivo: "Dor nas costas",
        data_consulta: new Date("2023-08-25"),
        observacoes: "Ibuprofeno 3 vezes ao dia",
        medico_responsavel_id: 1,
        paciente_id: 1
      }, {
        motivo: "Dor nas costas",
        data_consulta: new Date("2023-08-25"),
        observacoes: "Ibuprofeno 3 vezes ao dia",
        medico_responsavel_id: 1,
        paciente_id: 1
      }, {
        motivo: "Dor nas costas",
        data_consulta: new Date("2023-08-25"),
        observacoes: "Ibuprofeno 3 vezes ao dia",
        medico_responsavel_id: 1,
        paciente_id: 1
      }, {
        motivo: "Dor nas costas",
        data_consulta: new Date("2023-08-25"),
        observacoes: "Ibuprofeno 3 vezes ao dia",
        medico_responsavel_id: 1,
        paciente_id: 1
      }, {
        motivo: "Dor nas costas",
        data_consulta: new Date("2023-08-25"),
        observacoes: "Ibuprofeno 3 vezes ao dia",
        medico_responsavel_id: 1,
        paciente_id: 1
      }, {
        motivo: "Dor nas costas",
        data_consulta: new Date("2023-08-25"),
        observacoes: "Ibuprofeno 3 vezes ao dia",
        medico_responsavel_id: 1,
        paciente_id: 1
      }, {
        motivo: "Dor nas costas",
        data_consulta: new Date("2023-08-25"),
        observacoes: "Ibuprofeno 3 vezes ao dia",
        medico_responsavel_id: 1,
        paciente_id: 1
      }, {
        motivo: "Dor nas costas",
        data_consulta: new Date("2023-08-25"),
        observacoes: "Ibuprofeno 3 vezes ao dia",
        medico_responsavel_id: 1,
        paciente_id: 1
      }, {
        motivo: "Dor nas costas",
        data_consulta: new Date("2023-08-25"),
        observacoes: "Ibuprofeno 3 vezes ao dia",
        medico_responsavel_id: 1,
        paciente_id: 1
      }, {
        motivo: "Dor nas costas",
        data_consulta: new Date("2023-08-25"),
        observacoes: "Ibuprofeno 3 vezes ao dia",
        medico_responsavel_id: 1,
        paciente_id: 1
      }, {
        motivo: "Dor nas costas",
        data_consulta: new Date("2023-08-25"),
        observacoes: "Ibuprofeno 3 vezes ao dia",
        medico_responsavel_id: 1,
        paciente_id: 1
      }, {
        motivo: "Dor nas costas",
        data_consulta: new Date("2023-08-25"),
        observacoes: "Ibuprofeno 3 vezes ao dia",
        medico_responsavel_id: 1,
        paciente_id: 1
      }, {
        motivo: "Dor nas costas",
        data_consulta: new Date("2023-08-25"),
        observacoes: "Ibuprofeno 3 vezes ao dia",
        medico_responsavel_id: 1,
        paciente_id: 1
      }, {
        motivo: "Dor nas costas",
        data_consulta: new Date("2023-08-25"),
        observacoes: "Ibuprofeno 3 vezes ao dia",
        medico_responsavel_id: 1,
        paciente_id: 1
      }, {
        motivo: "Dor nas costas",
        data_consulta: new Date("2023-08-25"),
        observacoes: "Ibuprofeno 3 vezes ao dia",
        medico_responsavel_id: 1,
        paciente_id: 1
      }, {
        motivo: "Dor nas costas",
        data_consulta: new Date("2023-08-25"),
        observacoes: "Ibuprofeno 3 vezes ao dia",
        medico_responsavel_id: 1,
        paciente_id: 1
      }, {
        motivo: "Dor nas costas",
        data_consulta: new Date("2023-08-25"),
        observacoes: "Ibuprofeno 3 vezes ao dia",
        medico_responsavel_id: 1,
        paciente_id: 1
      }, {
        motivo: "Dor nas costas",
        data_consulta: new Date("2023-08-25"),
        observacoes: "Ibuprofeno 3 vezes ao dia",
        medico_responsavel_id: 1,
        paciente_id: 1
      }, {
        motivo: "Dor nas costas",
        data_consulta: new Date("2023-08-25"),
        observacoes: "Ibuprofeno 3 vezes ao dia",
        medico_responsavel_id: 1,
        paciente_id: 1
      }, {
        motivo: "Dor nas costas",
        data_consulta: new Date("2023-08-25"),
        observacoes: "Ibuprofeno 3 vezes ao dia",
        medico_responsavel_id: 1,
        paciente_id: 1
      }, {
        motivo: "Dor nas costas",
        data_consulta: new Date("2023-08-25"),
        observacoes: "Ibuprofeno 3 vezes ao dia",
        medico_responsavel_id: 1,
        paciente_id: 1
      }, {
        motivo: "Dor nas costas",
        data_consulta: new Date("2023-08-25"),
        observacoes: "Ibuprofeno 3 vezes ao dia",
        medico_responsavel_id: 1,
        paciente_id: 1
      }, 
    ]
  });
}




await prisma.exame.createMany ({
    data: [
        {
        tipo_exame: "Densiometro",
        resultado: new Date("2023-08-25"),
        data_exame: new Date("2023-08-25"),
        link_arquivo: "url.com.br/exame.pdf",
        observacoes: "",
        paciente_id: 1
        }, 
        {
        tipo_exame: "Densiometro",
        resultado: new Date("2023-08-25"),
        data_exame: new Date("2023-08-25"),
        link_arquivo: "url.com.br/exame.pdf",
        observacoes: "",
        paciente_id: 1
        },
        {
        tipo_exame: "Densiometro",
        resultado: new Date("2023-08-25"),
        data_exame: new Date("2023-08-25"),
        link_arquivo: "url.com.br/exame.pdf",
        observacoes: "",
        paciente_id: 1
        },
        {
        tipo_exame: "Densiometro",
        resultado: new Date("2023-08-25"),
        data_exame: new Date("2023-08-25"),
        link_arquivo: "url.com.br/exame.pdf",
        observacoes: "",
        paciente_id: 1
        }, 
        {
        tipo_exame: "Densiometro",
        resultado: new Date("2023-08-25"),
        data_exame: new Date("2023-08-25"),
        link_arquivo: "url.com.br/exame.pdf",
        observacoes: "",
        paciente_id: 1
        },
        {
        tipo_exame: "Densiometro",
        resultado: new Date("2023-08-25"),
        data_exame: new Date("2023-08-25"),
        link_arquivo: "url.com.br/exame.pdf",
        observacoes: "",
        paciente_id: 1
        },
    ]
});


await prisma.paciente.createMany ({
    data: [     
    {
        nome: "Roberto Rivelino",
        cpf: "958.521.251.65",
        telefone: 952556232,
        email: "roberto.riva@email.com",
        sexo: "Masculino",
        data_nascimento: new Date("1980-12-11"),
    },
    
    ]
});

await prisma.protuario.createMany ({
    data: [
        {
            descricao: "",
            data: new Date("1980-12-11"),
            medico_responsavel_id: "Ulisses",
            paciente_id : 1,
            paciente: "roberto.riva@email.com",
            usuario: 1,
        },
        {
            nome: "Roberto Rivelino",
            descricao: "",
            data: new Date("1980-12-11"),
            medico_responsavel_id: "Ulisses",
            paciente_id : 1,
            paciente: "roberto.riva@email.com",
            usuario: 1,
        },
        {
            nome: "Roberto Rivelino",
            descricao: "",
            data: new Date("1980-12-11"),
            medico_responsavel_id: "Ulisses",
            paciente_id : 1,
            paciente: "roberto.riva@email.com",
            usuario: 1,
        },
    ]
})

await prisma.usuario.createMany ({
    data: [
        {
        nome: "Roberto Rivelino",
        email: "roberto.riva@email.com",
        senha: "325",
        cargo: "Servidor UDESC",
        protuario: "",
        medico_responsavel_id: "Ulisses",
        consulta: "",
        },
        {
        nome: "Roberto Rivelino",
        email: "roberto.riva@email.com",
        senha: "325",
        cargo: "Servidor UDESC",
        protuario: "",
        medico_responsavel_id: "Ulisses",
        consulta: "",
        },
        {
        nome: "Roberto Rivelino",
        email: "roberto.riva@email.com",
        senha: "325",
        cargo: "Servidor UDESC",
        protuario: "",
        medico_responsavel_id: "Ulisses",
        consulta: "",
        },
    ]
})





main()
  .then(() => prisma.$disconnect())
  .catch((e) => {
    console.error(e);
    prisma.$disconnect();
    process.exit(1);
  });

