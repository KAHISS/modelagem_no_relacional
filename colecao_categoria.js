use('academia_jiu_jitsu');

db.drop();

db.categoria.insertOne({
    _id: 1,
    nome: "Infantil Pesado",
    faixa_etaria: "6-12 anos",
    faixa_peso: "25-35 kg",
    descricao: "Categoria para crianças e adolescentes com peso entre 25 e 35 kg",
}
);