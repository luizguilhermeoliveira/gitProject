const botaoRemover = document.getElementById('remover');
const corpoTabela = document.querySelector('#tabela-filmes tbody');

botaoRemover.addEventListener('click', () => {
	const linhas = corpoTabela.rows;

	if (linhas.length > 0) {
		corpoTabela.deleteRow(linhas.length - 1);
	} else {
		alert('Não há mais linhas para remover!');
	}
});