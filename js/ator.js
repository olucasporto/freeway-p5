//ator
let xAtor = 250;
let yAtor = 366;
let velocidadeAtor = 3;
let colisao = false;
let meusPontos = 0;

function mostraAtor(){
  image(imagemActor, xAtor, yAtor, 30, 30);
}

function movimentaAtor() {
  if (yAtor == 0){
    ganhou();
  }else{ 
    if (keyIsDown(UP_ARROW)) {
      yAtor -= velocidadeAtor;
    } else if (keyIsDown(DOWN_ARROW) && yAtor < 400-30) {
      yAtor += velocidadeAtor;
    }else if (keyIsDown(LEFT_ARROW) && xAtor > 0) {
      xAtor -= velocidadeAtor;
    }else if (keyIsDown(RIGHT_ARROW) && xAtor < 500-30) {
      xAtor += velocidadeAtor;  
    }
  }
}

function verificaColisao(){
  for (let i = 0; i < imgCarros.length; i++){
    colisao = collideRectCircle(xCarros[i],yCarros[i],largCar,alturaCar,xAtor,yAtor+14,21)
    if (colisao) {
      colidiu();
    }
  }
}

