use('academia_jiu_jitsu');

db.turmas.drop();

db.turmas.insertOne({
    _id: 1,
    instrutor_id: 11,
    quantidade_maxima: 20,
    filial: {
        logradouro: "Avenida Olívia Flores",
        numero: "1000",
        complemento: "Lote 05",
        bairro: "Candeias",
        cidade: "Vitória da Conquista",
        estado: "BA",
        cep: "45028-100"    
    },
    grade_horaria: [
        { dia_semana: "Segunda-feira", hora_inicio: "19:00", duracao: "01:30" },
        { dia_semana: "Quarta-feira", hora_inicio: "19:00", duracao: "01:30" },
        { dia_semana: "Sexta-feira", hora_inicio: "19:00", duracao: "01:30" }
    ],
    matriculas: [
        { 
            aluno_id: 10,
            data_matricula: ISODate("2024-01-10T00:00:00Z"),
            status: "Ativo"
        },
        { 
            aluno_id: 12,
            data_matricula: ISODate("2024-02-15T00:00:00Z"),
            status: "Ativo"
        },
        { 
            aluno_id: 13,
            data_matricula: ISODate("2024-03-20T00:00:00Z"),
            status: "Ativo"
        }
    ]
});

db.turmas.find({ _id: 1 }).pretty();