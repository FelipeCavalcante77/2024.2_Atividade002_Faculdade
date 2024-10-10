    // Vetor de receitas em JSON
    const receitas = [
    {
        titulo: "Arroz de Couve-Flor",
        imagem: "assets/img/Arroz-de-couve-flor.jpg",
        preparo: "Deixe a couve-flor picada. Adicione os ingredientes e refogue bem. Adicione sal, tampe a panela e deixe cozinhar.",
        ingredientes: ["Arroz", "Couve-Flor", "Cebola Média", "Azeite"]
    },
    {
        titulo: "Bolo de Café",
        imagem: "assets/img/bolo-cafe.jpeg",
        preparo: "Bata o açucar, as gemas e o café. Adicione farinha e chocolate e mexa bem. Bata as claras e junte á mistura",
        ingredientes: ["Fatinha de Trigo", "Açucar", "Café Coado", "Chocolate em pó", "Ovos"]
    },
    {
        titulo: "Coxinha de Brigadeiro",
        imagem: "assets/img/coxinha-brigadeira.jpg",
        preparo: "Junte o leite condesado, chocolate em pó e manteiga. Aqueça no fogo baixo. Envolva os morangos e passe o granulado",
        ingredientes: ["Leite Condensado", "Chocolate em pó", "Manteiga", "Morango", "Chocolate Granulado"]
    }
];

// Função para gerar a lista de ingredientes em HTML
function getListaIngredientes(receita) {
    let lista = "<ul>";
    lista += receita.ingredientes.map(ingrediente => `<li>${ingrediente}</li>`).reduce((acc, item) => acc + item, "");
    lista += "</ul>";
    return lista;
}

// Função para gerar um card de receita
function getCard(receita) {
    return `
        <div class="card" style="width: 250px; margin-bottom: 20px;">
            <img src="${receita.imagem}" class="card-img-top" alt="${receita.titulo}">
            <div class="card-body">
                <h5 class="card-title">${receita.titulo}</h5>
                <div class="card-text">
                    ${getListaIngredientes(receita)}
                    <hr>
                    ${receita.preparo}
                </div>
            </div>
        </div>
    `;
}

// Função para preencher o catálogo de receitas
function preencheCatalogo() {
    const pnlCatalogo = document.getElementById("pnlCatalogo");
    pnlCatalogo.innerHTML = receitas.map(receita => getCard(receita)).reduce((acc, card) => acc + card, "");
}