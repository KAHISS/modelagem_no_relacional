use('academia_jiu_jitsu');

// Dropa a coleção caso já exista
db.publicacao.drop();

db.publicacao.insertOne(
    {
        _id: 1,
        autor_id: 11,
        titulo: "Seminário de Defesa Pessoal",
        conteudo: "Neste sábado teremos um seminário especial...",
        data_criacao: ISODate("2025-10-27T10:00:00Z") // 
    },
);
