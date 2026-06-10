const btnAdicionar = document.getElementById('btnAdicionar');
const corpoTabela = document.getElementById('corpoTabela');
const inputTitulo = document.getElementById('inputTitulo');
const inputGenero = document.getElementById('inputGenero');
const inputNota = document.getElementById('inputNota');

btnAdicionar.addEventListener('click', () => {
    
    const titulo = inputTitulo.value.trim();
    const genero = inputGenero.value.trim();
    const nota = inputNota.value.trim();

   
    if (titulo === '' || genero === '' || nota === '') {
        alert('Por favor, preencha todos os campos antes de adicionar.');
        return;
    }

    const totalLinhas = corpoTabela.querySelectorAll('tr').length;
    const proximoId = totalLinhas + 1;

    const novaLinha = document.createElement('tr');

    novaLinha.innerHTML = `
        <th scope="row">${proximoId}</th>
        <td>${titulo}</td>
        <td>${genero}</td>
        <td>${nota}</td>
    `;

    corpoTabela.appendChild(novaLinha);

    inputTitulo.value = '';
    inputGenero.value = '';
    inputNota.value = '';
});

const botaoRemover = document.getElementById('remover');
const corpo = document.querySelector('#tabela-filmes tbody');

botaoRemover.addEventListener('click', () => {
    const linhas = corpo.rows;

    if (linhas.length > 0) {
        corpo.deleteRow(linhas.length - 1);
    } else {
        alert('Não há mais linhas para remover!');
    }
});