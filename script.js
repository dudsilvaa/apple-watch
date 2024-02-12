const verdeCipreste = {
    nome: "Verde-ciprestre",
    nomePastaImagens: "imagens-verde-cipreste",
};

const azulInverno = {
    nome: "Azul-inverno",
    nomePastaImagens: "imagens-azul-inverno",
};

const meiaNoite = {
    nome: "Meia-noite",
    nomePastaImagens: "imagens-meia-noite",
};

const estelar = {
    nome: "Estelar",
    nomePastaImagens: "imagens-estelar",
};

const rosaClaro = {
    nome: "Rosa-claro",
    nomePastaImagens: "imagens-rosa-claro",
};

const opcoesCores = [verdeCipreste, azulInverno, meiaNoite, estelar, rosaClaro];
const opcaoImagem0 = document.getElementById('0-imagem-miniatura');
const opcaoImagem1 = document.getElementById('1-imagem-miniatura');
const opcaoImagem2 = document.getElementById('2-imagem-miniatura');
const tituloProduto = document.getElementById('titulo-produto');
const imagemVisualizacao = document.getElementById('imagem-visualizacao');
const nomeCorSelecionada = document.getElementById('nome-cor-selecionada');
const opcoesTamanho = ['41 mm', '45 mm'];

let tamanhoSelecionado = 1;
let imagemSelecionada = 1;
let corSelecionada = 1;


// Função para mudar o tamanho de acordo com o que o usuário escolher
function atualizarTamanho() {
    const opcaoTamanhoSelecionado = document.querySelector('[name="opcao-tamanho"]:checked').id.charAt(0);
    tamanhoSelecionado = opcaoTamanhoSelecionado;

    // Se o usuário escolher o menor tamanho (41mm), a imagem do relógio diminui
    if (opcoesTamanho[tamanhoSelecionado] === "41 mm") {
        imagemVisualizacao.classList.add("caixa-pequena");
        tituloProduto.innerText = `Pulseira loop esportiva ${opcoesCores[corSelecionada].nome.toLowerCase()} para caixa de ${opcoesTamanho[tamanhoSelecionado]}`;
        return;
    }
    imagemVisualizacao.classList.remove('caixa-pequena');
    tituloProduto.innerText = `Pulseira loop esportiva ${opcoesCores[corSelecionada].nome.toLowerCase()} para caixa de ${opcoesTamanho[tamanhoSelecionado]}`;
}

// Função para mudar o tamanho da imagem do relógio de acordo com o que o usuário escolher
function atualizarImagemSelecionada() {
    const opcaoImagemSelecionada = document.querySelector('[name="opcao-imagem"]:checked').id.charAt(0);
    imagemSelecionada = opcaoImagemSelecionada;

    imagemVisualizacao.src = `./imagens/opcoes-cores/${opcoesCores[corSelecionada].nomePastaImagens}/imagem-${imagemSelecionada}.jpeg`;
}

function atualizarCorSelecionada() {
    const numeroCorSelecionada = document.querySelector('[name="opcao-cor"]:checked').id.charAt(0);
    corSelecionada = numeroCorSelecionada;
    nomeCorSelecionada.innerText = `Cor: ${opcoesCores[corSelecionada].nome}`;
    imagemVisualizacao.src = `./imagens/opcoes-cores/${opcoesCores[corSelecionada].nomePastaImagens}/imagem-${imagemSelecionada}.jpeg`;
    tituloProduto.innerText = "Pulseira loop esportiva " + opcoesCores[corSelecionada].nome.toLocaleLowerCase() + " para caixa de " + opcoesTamanho[tamanhoSelecionado];
    
    opcaoImagem0.src = `./imagens/opcoes-cores/${opcoesCores[corSelecionada].nomePastaImagens}/imagem-0.jpeg`;
    opcaoImagem1.src = `./imagens/opcoes-cores/${opcoesCores[corSelecionada].nomePastaImagens}/imagem-1.jpeg`;
    opcaoImagem2.src = `./imagens/opcoes-cores/${opcoesCores[corSelecionada].nomePastaImagens}/imagem-2.jpeg`;
    tituloProduto.innerText = `Pulseira loop esportiva ${opcoesCores[corSelecionada].nome.toLowerCase()} para caixa de ${opcoesTamanho[tamanhoSelecionado]}`;
}
