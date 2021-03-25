let angA = 60
let angB = 60
let angC = 60

let soma = angA + angB + angC


if(angA < 0|| angB < 0 || angC < 0){
  console.log('erro');
}
else if(soma === 180){
  console.log(true);
}
else{
  console.log(false);
}