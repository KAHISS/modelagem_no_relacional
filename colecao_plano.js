use('academia_jiu_jitsu');

// Dropa a coleção caso já exista
db.plano.drop();

db.plano.insertMany([
    {
        _id: 1,
        titulo: "Mensal Básico",
        periodo: "Mensal",
        descricao: "Plano básico",
        valor: NumberDecimal("130.00"),
        data_atualizacao: ISODate("2024-01-01T00:00:00Z")
    },
    {
        _id: 2,
        titulo: "Trimestral Gold",
        periodo: "Trimestral",
        descricao: "Plano mais popular",
        valor: NumberDecimal("370.00"),
        data_atualizacao: ISODate("2024-01-01T00:00:00Z")
    },
    {
        _id: 3,
        titulo: "Semestral Black",
        periodo: "Semestral",
        descricao: "Plano mais barato",
        valor: NumberDecimal("600.00"),
        data_atualizacao: ISODate("2024-01-01T00:00:00Z")
    }
]);
