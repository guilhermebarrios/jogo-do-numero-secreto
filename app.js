//let titulo = document.querySelector('h1');
//titulo.innerHTML = 'Jogo do número secreto';

//let paragrafo = document.querySelector('p');
//paragrafo.innerHTML = 'Escolha um número entre 1 e 10';

//funcão para não ficar fazendo varias e varias linhas mudando paragrafo 
let listaNumeroSorteados = [];
let numeroLimite = 10;
let numeroSecreto  = gerarNumeroAleatorio();
let tentativas = 1;



function exibirTextoNaTela (tag, texto){
	let campo = document.querySelector(tag);
	campo.innerHTML = texto;
	responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function exibirMensagemInicial() {
	exibirTextoNaTela('h1','Escolha um número entre 1 e 10');
	exibirTextoNaTela('p','Escolha um número entre 1 e 10');
}
exibirMensagemInicial();

function verificarChute() {
        let chute = document.querySelector('input').value;
        
        if (chute == numeroSecreto) {
        	    exibirTextoNaTela('h1', 'Acertou!');
                let palavraTentativa = tentativas > 1 ? 'tentativas': 'tentativa';
                let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`; 
                exibirTextoNaTela('p', mensagemTentativas);
                document.getElementById('reiniciar').removeAttribute('disabled');

        } else {
                if (chute > numeroSecreto) { 
                	exibirTextoNaTela ('p', '0 número secreto é menor');
                } else {
                        exibirTextoNaTela('p', 'O número secreto é maior');
                }
                tentativas++;
                limparCampo();
        }
}
            
	
//console.log(chute == numeroSecreto);


function gerarNumeroAleatorio() {
	 let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
	 let quantidadeDeElementoNaLista = listaNumeroSorteados.length;

	 if (quantidadeDeElementoNaLista == numeroLimite){
	 	listaNumeroSorteados = [];
	 }
	 if (listaNumeroSorteados.includes(numeroEscolhido)){
	 	return gerarNumeroAleatorio();
	 } else{
	 	listaNumeroSorteados.push(numeroEscolhido);
	 	console.log(listaNumeroSorteados);
	 	return numeroEscolhido;
	 }

}

function limparCampo() {
	chute = document.querySelector('input');
	chute.value = '';
}

function reiniciarJogo() {
	numeroSecreto = gerarNumeroAleatorio();
	limparCampo();
	tentativas = 1;
	exibirMensagemInicial();
	document.getElementById('reiniciar').setAttribute('disabled',true);
}