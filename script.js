const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Para você uma noite perfeita seria?",
        alternativas: [
            {
                texto: "Uma noite fria na praia onde você está sozinha sentindo o vento e observando o mar",
                afirmacao: "Deftones."
            },
            {
                texto: "Uma noite bem animada com os amigos em um parque de diversão",
                afirmacao: "The Neighbourhood."
            },
            {
                 texto: "Uma noite onde você dirige um carro em alta velocidade com o som no talo",
                afirmacao: "Chase Atlantic."
            },
            {
                 texto: "Uma noite onde você observa as estrelas e a cidade",
                afirmacao: "Bôa."
            }
            
        ]
    },
    {
        enunciado: "Escolha uma frase",
        alternativas: [
            {
                texto: "Estive sozinho quase a vida toda, garota, E esse tipo de coisa não muda da noite pro dia",
                afirmacao: "Chase Atlantic."
            },
            {
                texto: "Agora eu vejo o mundo como um lugar onde eu possa correr para me esconder",
                afirmacao: "Bôa."
            },
            {
               texto: "Vocês pensam que estamos na mesma página, mas não estamos",
                afirmacao: "Deftones."
            },
            {
                texto: "Eu vou digerir você, um beijo de cada vez, você deseja que eu seja seu e eu espero que você seja minha",
                afirmacao: "The Neighbourhood."  
            }
        ]
    },
    {
        enunciado: "Escolha um lugar",
        alternativas: [
            {
                texto: "Biblioteca",
                afirmacao: "Bôa."
            },
            {
                texto: "Loja de Discos de Vinil",
                afirmacao: "Deftones. "
            },
            {
                texto: "Praia",
                afirmacao: "The Neighbourhood." 
            },
            {
                texto: "Floresta",
                afirmacao: "Chase Atlantic. "
            }
        ]
    },
     {
        enunciado: "Qual desses tema você mais pensa?",
        alternativas: [
            {
                texto: "Relacionamentos",
                afirmacao: "Chase Atlantic."
            },
            {
                texto: "Quem você é",
                afirmacao: "Bôa."
            },
            {
               texto: "Moralidade e ética",
                afirmacao: "Deftones."
            },
            {
                texto: "Memórias",
                afirmacao: "The Neighbourhood."  
            }
        ]
    }
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
