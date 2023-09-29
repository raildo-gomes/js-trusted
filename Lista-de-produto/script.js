// Array de produtos
var produtos = [
    { nome: "Produto 1", categoria: "Eletrônicos", preco: 100.00 },
    { nome: "Produto 2", categoria: "Roupas", preco: 50.00 },
    { nome: "Produto 3", categoria: "Livros", preco: 20.00 },
    { nome: "Produto 4", categoria: "Eletrônicos", preco: 150.00 },
    { nome: "Produto 5", categoria: "Roupas", preco: 30.00 }
];

// Função para exibir a lista de produtos na página
function exibirListaDeProdutos() {
    var productList = document.getElementById("product-list");

    produtos.forEach(function (produto) {
        var listItem = document.createElement("li");
        listItem.textContent = `Nome: ${produto.nome}, Categoria: ${produto.categoria}, Preço: R$ ${produto.preco.toFixed(2)}`;
        productList.appendChild(listItem);
    });
}

// Chamando a função para exibir a lista de produtos quando a página carregar
window.onload = exibirListaDeProdutos;
