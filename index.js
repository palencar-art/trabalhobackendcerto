const express = require('express');
const app = express();
const porta = 8080;
app.get('/', (req, res) => {
    res.send("hello world");
});

app.get('/pedido', (req, res) => {

    let quantidade = req.query.quantidade;
    if (quantidade <= 0 || !quantidade) {
        return res.status(400).json({ sucesso: false, erro: "ops, não é possivel selecionar menos de um café." });

    }
    let precocafe = 10.0;
    let precopedido = 0;

    //somando cafés
    for (i = 0; i <= 3; i++) {
        precopedido += precocafe;
        console.log("pedindo cafe: " + precopedido)
    }


    //decidir se o desconto vai ser aplicado

    if (precopedido >= 30) {

        precopedido = precopedido - 5

        console.log("desconto aplicado" + precopedido);
    } else {
        console.log("desconto não aplicado");
    }

    res.send("pedindo...Total: " + precopedido);


});
app.listen(porta, () => {

});