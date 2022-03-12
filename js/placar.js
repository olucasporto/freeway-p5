function incluiPontos() {
  textAlign(CENTER)
  textSize(25);
  fill(color(255,240,60))
  text(meusPontos,width / 5, 27);
}

function ganhou(){
  meusPontos++
  yAtor = 366;
  xAtor = 250; 
  somPontos.play();
}

function colidiu() {
  yAtor = 366;
  xAtor = 250; 
  if(meusPontos > 0){
    meusPontos--;
  }
  somColisao.play();
}