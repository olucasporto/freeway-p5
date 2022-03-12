//imagens
let imagemRoad;
let imagemActor;
let imgCarros = [];
//sons
let somTrilha;
let somPontos;
let somColisao;

function preload(){
  imagemRoad = loadImage("./imagens/estrada.png");
  imagemActor = loadImage("./imagens/ator-1.png");
  somColisao = loadSound("./sounds/colidiu.mp3");
  somPontos = loadSound("./sounds/pontos.wav");
  somTrilha = loadSound("./sounds/trilha.mp3");  
  imgCarros = [
    loadImage("./imagens/carro-1.png"),
    loadImage("./imagens/carro-2.png"),
    loadImage("./imagens/carro-3.png"),
    loadImage("./imagens/carro-2.png"),
    loadImage("./imagens/carro-3.png"),
    loadImage("./imagens/carro-1.png"),
    loadImage("./imagens/carro-2.png"),
    loadImage("./imagens/carro-3.png"),
    loadImage("./imagens/carro-1.png")
    ]
}