use('academia_jiu_jitsu');

// Insere um Usuário que é Aluno e Instrutor ao mesmo tempo
db.usuarios.insertOne({
    _id: 11,
    nome: "Vitor",
    sobrenome: "Nascimento Almeida",
    data_nascimento: ISODate("1990-06-10T00:00:00Z"),
    peso: 85.0,
    email: "vitor.almeida@academia.com",
    senha: "hash_seguro_123",
    contatos: {
        pessoal: "(77) 98123-4567",
        emergencial: "(77) 98123-0000"
    },
    tipo: ["Aluno", "Instrutor"], 
    permissoes: {
        admin: false
    },    
    aluno_info: {
        faixa: "Marrom",
        grau: 1,
        categoria_id: 2, 
        ficha_medica: [
            {
                data_registro: ISODate("2024-02-01T00:00:00Z"),
                prescricao_medica: "Uso de joelheira ortopédica",
                observacoes: "Lesão leve no menisco em 2023"
            }
        ],
        termos_assinados: [
            { termo_id: 1, data_assinatura: ISODate("2024-01-01T00:00:00Z") }
        ]
    },
    instrutor_info: {
        faixa: "Marrom",
        grau: 1,
        comissao_por_aluno: NumberDecimal("15.00"),
        data_admissao: ISODate("2024-03-01T00:00:00Z"),
        especialidade: "Jiu-Jitsu Infantil e Iniciantes"
    }
});