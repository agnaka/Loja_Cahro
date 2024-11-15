import { conectaApi } from './conectaApi.js';
const formulario = document.querySelector('[data-formulario]');

async function criarProduto (evento) {
    evento.preventDefault();

    const nome = document.querySelector('[data-nome]').value;
    const valor = document.querySelector('[data-valor]').value;
    const imagem = document.querySelector('[data-imagem]').value;
    try {
        await conectaApi.criarProduto(nome, valor, imagem);

        window.location.href = 'index.html';

        formulario.reset();
    } catch (erro) {
       alert(erro);
    }
    
}

formulario.addEventListener('submit', evento => criarProduto(evento));

formulario.addEventListener('reset', () => {
    setTimeout(() => {
        window.location.href = 'index.html';
    }, 1000);
});