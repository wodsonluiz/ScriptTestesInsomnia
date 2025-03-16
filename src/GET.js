// Obtém a resposta da API
const responseBody = insomnia.response.json();

// Verifica se a chave "data" existe e é um array
insomnia.test("O response deve conter um array 'data'", function () {
    insomnia.expect(responseBody).to.have.property("data").that.is.an("array");
});

// Percorre o array e valida cada "id"
insomnia.test("Todos os itens devem ter um 'id' como string e não nulo", function () {
    responseBody.data.forEach(item => {
        insomnia.expect(item).to.have.property("id").that.is.a("string").and.not.empty;
    });
});

// Valida o status da resposta
insomnia.test("Deve retornar 200 ao criar um recurso", function () {
    insomnia.response.to.have.status(200);
});

