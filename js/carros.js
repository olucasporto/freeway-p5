//código dos carros
let yCarros = [40, 96, 150, 210, 270, 318, 40, 150, 270];
let xCarros = [600, 600, 600, 600, 600, 600, 1000, 1000, 1000];
let velocidadeCarros = [2.5, 3.5, 4, 2.7, 3.3, 3, 2.5, 3.5, 3.3]
let largCar = 50;
let alturaCar = 40;

function mostraCarro(){
  for(let i = 0; i < imgCarros.length; i++) {  image(imgCarros[i],xCarros[i],yCarros[i],largCar,alturaCar);
  }
}

function movimentaCarro(){
  for(let i = 0; i < imgCarros.length; i++) {
  xCarros[i] -= velocidadeCarros[i];
  }
}

function loopCarro(){
  for(let i = 0; i < imgCarros.length; i++) {
    if(fimTela(xCarros[i])){
      xCarros[i] = 600;
      velocidadeCarros[i] *= 1.5;
      if(velocidadeLimite(velocidadeCarros[i])){
        velocidadeCarros[i] = 2.5;
      }
    }
  }
}

function fimTela(xCarro){
  return xCarro < 0-largCar
}

function velocidadeLimite(vel){
  return vel > 13
}
  