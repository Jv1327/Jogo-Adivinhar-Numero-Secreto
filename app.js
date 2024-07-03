alert('Boas Vindas ao Jogo do Número Secreto');

let maxRange = 5000;  
let numeroMaximo = parseInt(Math.random() * maxRange + 1);  
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1); 
let tentativas = 1;

while (chute != numeroSecreto) {
    chute = parseInt(prompt(`Escolha um Número entre 1 e ${numeroMaximo}`));
    if (chute == numeroSecreto) {
        alert(`Parabéns! Você acertou o Número Secreto ${numeroSecreto} em ${tentativas} tentativas!`);
        break;
    } else {
        if (chute > numeroSecreto) {
            alert(`O Número Secreto é menor que ${chute}`);
        } else {
            alert(`O Número Secreto é maior que ${chute}`);
        }
        tentativas++;
    }
}


let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Isso ai!! Você descobriu o número Secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`);