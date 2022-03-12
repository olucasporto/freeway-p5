function setup() {
  createCanvas(500, 400);
  somTrilha.loop();
}

function draw() {
  background(imagemRoad);
  mostraAtor();
  mostraCarro();
  movimentaCarro();
  movimentaAtor();
  loopCarro();
  verificaColisao();
  incluiPontos();
}
