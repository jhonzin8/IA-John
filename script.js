const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Assim que se destacou na base você se depara com propostas de alguns clubes, um de grande expressão e um de menor expressão, Para qual vc vai?,
        alternativas: [
            {
                texto: "Santos",
                afirmacao: "Nesse clube você jogará pouco. "
            },
            {
                texto: "CRB",
                afirmacao: "Você chega para ser titular, e ser o 10 do time."
            }
        ]
    },
    {
        enunciado: "Após vc se destacar você recebeu uma proposta de alguns times da serie A do brasileirão, para qual clube vc iria?",
        alternativas: [
            {
                texto: "Palmeiras",
                afirmacao: "Chegou para suprir a saída de algum jogador importante do time."
            },
            {
                texto: "Atlético-MG",
                afirmacao: "Disputou posição e não se firmou como titular"
            }
        ]
    },
    {
        enunciado:"Após se destacar nesse clube,você recebeu duas propostas de patrocínio, você aceitaria qual empresa de patrocinar"?
        alternativas: [
            {
                texto: "Adidas",
                afirmacao: "Você se tornou o cara dessa marca, e ganhou visibilidade e muito dinheiro"
            },
            {
                texto: "Puma",
                afirmacao: "Você dividiu sua imagem com o Neymar e não ganhou muito dinheiro"
            }
        ]
    },
    {
        enunciado: "Ao final da temporada do Brasileirão, você recebeu algumas propostas de clubes europeus, para qual clube você vai?",
        alternativas: [
            {
                texto: "Liverpol"
                afirmacao: "Chegou para ser o cara do time, se destacou bastante e ganhou 1 Premier League"
            },
            {
                texto: "Bayer Munchen"
                afirmacao: "Chegou para ser o cara do time, mas não entregou nada e virou reserva no começo da temporada"
            }
        ]
    },
    {
        enunciado: "Você está na final da Champions League, você sai cara a cara com o goleiro, o que você faria?",
        alternativas: [
            {
                texto: "Você tentaria ser ousado, tentava uma cavadinha",
                afirmacao: "Você errou, prejudicou o time e o seu time perdeu a final"
            },
            {
                texto: "Você fazia o simples, chapava no canto",
                afirmacao: "Você fez o gol, se tornou o  heroi de um titulo inédito e ao final da temporada se sagrou o melhor jogador do mundo "
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
