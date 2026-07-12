/* Painel de imagens
   Ajustes feitos:
   - seletores atualizados para corresponder ao HTML ("imagem-painel")
   - classe usada para mostrar/esconder é "mostra" (conforme HTML)
   - botões selecionados por classe ('.btn-avancar' e '.btn-voltar')
   - corrige uso de variáveis (antes havia um identificador inválido `btn-voltar`)
*/

const imagensPainel = document.querySelectorAll('.imagem-painel');
const setaAvancar = document.querySelector('.btn-avancar');
const setaVoltar = document.querySelector('.btn-voltar');
let imagemAtual = 0;

function esconderImagens() {
    imagensPainel.forEach(imagem => {
        imagem.classList.remove('mostra');
    });
}

function mostrarImagem() {
    if (imagensPainel[imagemAtual]) {
        imagensPainel[imagemAtual].classList.add('mostra');
    }
}

setaAvancar.addEventListener('click', function() {
    const totalDeImagens = imagensPainel.length - 1;
    if (imagemAtual === totalDeImagens) {
        return;
    }

    imagemAtual++;
    esconderImagens();
    mostrarImagem();
});

setaVoltar.addEventListener('click', function() {
    if (imagemAtual === 0) {
        return;
    }

    imagemAtual--;
    esconderImagens();
    mostrarImagem();
});

// mostra a imagem inicial (caso queira garantir via JS)
mostrarImagem();