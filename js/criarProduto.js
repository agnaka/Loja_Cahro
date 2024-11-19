import { conectaApi } from './conectaApi.js';
const formulario = document.querySelector('[data-formulario]');

async function verificarImagem(imagem) {
    const response = await fetch(imagem);
    if (!response.ok) {
        throw new Error('Imagem não encontrada, tente novamente');
    }
}

async function criarProduto(evento) {
    evento.preventDefault();

    const nome = document.querySelector('[data-nome]').value;
    const valor = document.querySelector('[data-valor]').value;
    const imagem = document.querySelector('[data-imagem]').value;
    try {
        await verificarImagem(imagem);  // Verifica se a imagem existe
        await conectaApi.criarProduto(nome, valor, imagem);

        window.location.href = 'index.html';
        alert('Produto cadastrado com sucesso');

        // formulario.reset();
    } catch (erro) {
        alert(erro.message);
    }
}

formulario.addEventListener('submit', evento => criarProduto(evento));

formulario.addEventListener('reset', () => {
    setTimeout(() => {
        window.location.href = 'index.html';
    }, 1000);
});
