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
    caixaPerguntas.textContent = "The Neighbourhood";
    textoResultado.textContent = "The Neighbourhood é uma banda de Indie Rock que trata sobre relacionamentos, memórias e o amor em suas músicas. The Neighbourhood é a minha banda favorita justamente por botar todos os meus sentimentos e questões pessoais em músicas maravilhosas. As recomendações de música são: Lurk, 1 of those Weaks e Sadderdaze";
    caixaAlternativas.textContent = "The Neighbourhood";
    caixaPerguntas.textContent = "Bôa";
    textoResultado.textContent = "Bôa é uma banda de Rock Alternativo que trata sobre amor e o indivíduo na sociedade em suas músicas. Bôa possui uma vocalista com descendência oriental, a vocalista conta em muitas músicas da banda como ela, uma mulher oriental se sente em relação ao amor e como indivíduo numa sociedade americana. As recomendações de música são: Fool, Twilight e For Jasmine";
    caixaAlternativas.textContent = "Bôa";
    caixaPerguntas.textContent = "Deftones";
    textoResultado.textContent = "Deftones é uma banda de Metal Alternativo,  em suas músicas eles narram sobre memórias e questões morais que são corrompidas pelos sentimentos mundanos: amor, sofrimento, raiva, tédio. Deftones é uma banda que traz uma narrativa de forma nua e crua os sentimentos mundanos. As recomendações de música são: Beware, Change e Knife Party";
    caixaAlternativas.textContent = "Deftones";
    caixaPerguntas.textContent = "Chase Atlantic";
    textoResultado.textContent = "Chase Atlantic é uma banda Alternativa/Indie assim como Deftones esle narram sobre questões morais que são corrompidas pelos sentimentos mundanos mas principalmente pelo vício. Chase Atlantic é uma banda que mescla o Indie com o R&B oque atrai muitos jovens pela batida sensual e o significado imoral das letras. As recomendações de música são: Empty, Chase e Numb to the Feeling";
    caixaAlternativas.textContent = "Chase Atlantic";
    
}


mostraPergunta();
