import { conectaApi } from "./conectaApi.js";

const lista = document.querySelector("[data-lista]");

export default function constroiCard(nome, preco, imagem, id) {
    const produto = document.createElement("li");
    produto.className = "produto__item";
    produto.dataset.id = id;  // Adiciona o id do produto ao elemento
    produto.innerHTML = `<div class="produto">
                            <img class="produto__imagem" src="${imagem}" alt="Produto">
                            <div class="card__info">
                                <p class="produto__nome">${nome}</p>
                                <div class="card__value">
                                    <p class="card__preco">R$ ${preco}</p>
                                    <img class="produto__imagem__trash" src="assets/trash.png" alt="Ícono de eliminación">
                                </div>
                            </div>
                        </div>`;
    return produto;
}

async function listaProdutos() {
    try {
        const listaApi = await conectaApi.listaProdutos();
        listaApi.forEach(elemento => lista.appendChild(
            constroiCard(elemento.nome, elemento.preco, elemento.imagem, elemento.id)));
    } catch {
        lista.innerHTML = `<h3 class="mensagem__titulo">Não foi possível carregar a lista de produtos</h3>`;
    }
}

listaProdutos();
