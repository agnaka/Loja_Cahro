import { conectaApi } from './conectaApi.js';

document.addEventListener('DOMContentLoaded', () => {
    const listaProdutos = document.querySelector("[data-lista]");
    
    listaProdutos.addEventListener('click', async (event) => {
        if (event.target.classList.contains('produto__imagem__trash')) {
            const produtoItem = event.target.closest('.produto__item');
            const nomeProduto = produtoItem.querySelector('.produto__nome').textContent;

            const confirmacao = confirm(`Você deseja excluir o produto ${nomeProduto}?`);
            if (confirmacao) {
                const produtoId = produtoItem.dataset.id;
                try {
                    await conectaApi.excluirProduto(produtoId);
                    produtoItem.remove();
                    alert("Produto excluido com sucesso");
                } catch (erro) {
                    alert("Não foi possível excluir o produto");
                }
            }
        }
    });
});

async function excluirProduto(id) {
    const conexao = await fetch(`http://localhost:3000/produtos/${id}`, {
        method: "DELETE",
    });

    if (!conexao.ok) {
        throw new Error("Não foi possível apagar o produto");
    }
}

conectaApi.excluirProduto = excluirProduto;
