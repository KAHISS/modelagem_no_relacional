use('academia_jiu_jitsu');

// Dropa a coleção caso já exista
db.publicacao.drop();

db.publicacao.insertMany([
    {
        _id: 1,
        autor_id: 1,
        titulo: "Seminário de Defesa Pessoal",
        conteudo: "Neste sábado teremos um seminário especial...",
        data_criacao: ISODate("2025-10-27T10:00:00Z") // 
    },
    {
        _id: 2,
        autor_id: 2,
        titulo: "Horário de Feriado",
        conteudo: "A academia estará fechada no dia 15/11.",
        data_criacao: ISODate("2025-10-27T14:30:00Z") // 
    },
    {
        _id: 3,
        autor_id: 2,
        titulo: "Black Friday no Tatame",
        conteudo: "Descontos de 20% na renovação de planos trimestrais apenas em Novembro!",
        data_criacao: ISODate("2025-11-01T09:00:00Z") // 
    }
]);
