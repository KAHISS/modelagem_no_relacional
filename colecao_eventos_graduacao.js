use('academia_jiu_jitsu');

// Dropa a coleção caso ela já exista
db.eventos_graduacao.drop();

db.eventos_graduacao.insertOne({
    _id: 1,
    data_evento: ISODate("2025-12-07T10:00:00Z"), 
    local: { 
        logradouro: "Rua Manaus",
        numero: "440",
        bairro: "Ibirapuera",
        cidade: "Vitória da Conquista",
        cep: "45050-000" 
    },
    promovidos: [ 
        {
            aluno_id: 10, 
            tipo: "Faixa", 
            faixa_obtida: "Azul", 
            grau_obtido: 0 
        },
        {
            aluno_id: 12,
            tipo: "Grau",
            faixa_obtida: "Branca",
            grau_obtido: 2
        },
        {
            aluno_id: 15,
            tipo: "Faixa",
            faixa_obtida: "Amarela",
            grau_obtido: 0
        }
    ]
});

db.eventos_graduacao.find({ _id: 1 }).pretty();