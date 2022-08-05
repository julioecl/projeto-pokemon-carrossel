const btnAvancar = document.getElementById('btn-avancar')
const cartoes = document.querySelectorAll('.cartao')
const btnVoltar = document.getElementById('btn-voltar')

let cartaoAtual = 0

function esconderCartaoSelecionado(){
    const cartaoSelecionado = document.querySelector('.selecionado')
    cartaoSelecionado.classList.remove('selecionado')
}

function mostrarCartao(indiceCartao){
    cartoes[indiceCartao].classList.add('selecionado')
}

function mostrarOuEsconderSetas() {
    const naoEhOPrimeiroCartao = cartaoAtual !==0
    if (naoEhOPrimeiroCartao) {
        btnVoltar.classList.remove('opaca')
    } else {
        btnVoltar.classList.add('opaca')
    }

    const chegouNoUltimoCartao = cartaoAtual !=0 && cartaoAtual===cartoes.length-1;
    if (chegouNoUltimoCartao) {
        btnAvancar.classList.add('opaca');
    } else {
        btnAvancar.classList.remove('opaca')
    }
}

btnAvancar.addEventListener('click', function () {    
    if (cartaoAtual === cartoes.length-1)
        return
    esconderCartaoSelecionado()
    cartaoAtual++
    mostrarCartao(cartaoAtual)
    mostrarOuEsconderSetas()
})

btnVoltar.addEventListener('click', function() {
    if (cartaoAtual === 0) 
        return

    esconderCartaoSelecionado()
    cartaoAtual--
    mostrarCartao(cartaoAtual)
    mostrarOuEsconderSetas()  
})

