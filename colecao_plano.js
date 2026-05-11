use('academia_jiu_jitsu');

// Dropa a coleção caso já exista
db.planos.drop();

db.planos.insertOne(
    {
        _id: 1,
        titulo: "Mensal Básico",
        periodo: "Mensal",
        descricao: "Plano básico",
        valor: NumberDecimal("130.00"),
        data_atualizacao: ISODate("2024-01-01T00:00:00Z")
    }
);
