use('academia_jiu_jitsu');

db.pagamentos.insertOne({
    aluno_id: 10,
    registro_financeiro: {
        plano_id: 1, 
        titulo_snapshot: "Mensal Básico",
        valor_cobrado: NumberDecimal("130.00"),
        tipo: "Plano"
    },
    status: "Pago",
    datas: {
        vencimento: ISODate("2026-05-10T00:00:00Z"),
        pagamento: ISODate("2026-05-08T10:00:00Z")
    },
    metodo_pagamento: "PIX"
});