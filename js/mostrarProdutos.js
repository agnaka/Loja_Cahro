import { conectaApi } from "./conectaApi.js";

const lista = document.querySelector("[data-lista]");

export default function constroiCard(nome, preco, imagem) {
    const produto = document.createElement("li");
    produto.className = "produto__item";
    produto.innerHTML = `<div class="produto">
                            <img src="${imagem}" alt="Produto ">
                            <div class="card__info">
                                <p>${nome}</p>
                                <div class="card__value">
                                    <p>R$ ${preco}</p>
                                    <img src="assets/icon _trash 2_.png" alt="Ícono de eliminación">
                                </div>
                            </div>
                        </div>`;
    return produto;
}

async function listaProdutos() {
    try {
        const listaApi = await conectaApi.listaProdutos();
        listaApi.forEach(elemento => lista.appendChild(
            constroiCard(elemento.nome, elemento.preco, elemento.imagem)))
    } catch {
        lista.innerHTML = `<h3 class="mensagem__titulo">Não foi possível carregar a lista de vídeos</h3>`
    }
}

listaProdutos();