// Code
const NBR_COUPS = 10;
let number = generateNumber(0, 100);
let i = NBR_COUPS;

// Fonctions

function generateNumber(min, max){
  const nbr = Math.floor(Math.random() * max) + min;
  return nbr;
}

function testNbr(){
  if( checkGame() ){
    const nbr = document.getElementById("nbrInput").value;
    if(!verifNbr(nbr, number)){
      i--;
    }
  }
}

function verifNbr(nbr1, nbr2){
  if(nbr1 > nbr2){
    displayMessage("Trop Grand<br>Encore "+(i-1)+" essai(s)");
  } else if (nbr1 < nbr2 ) {
    displayMessage("Trop petit<br>Encore "+(i-1)+" essai(s)");
  } else {
    winGame();
    return 1;
  }
  return 0;
}

function checkGame(){
  if(!(i+1)){
    loseGame();
    return 0;
  }
  return 1;
}

function loseGame(){
  displayMessage("Vous avez perdu, le bon numéro était " + number);
  switchButtonVisibility();
}

function winGame(){
  displayMessage("Victoire en "+(NBR_COUPS-i)+" coups !","green");
  switchButtonVisibility();
}


function displayMessage(msg,color){
  const element = document.getElementById("message");
  element.style.color = color ? color : "red";
  element.innerHTML = msg;
}

function forfeit(){
  displayMessage("Pourquoi abandonner ?<br>Le nombre caché était : " + number);
  switchButtonVisibility();
}

function switchButtonVisibility(){
  document.getElementById("send").hidden = !document.getElementById("send").hidden;
  document.getElementById("forfeit").hidden = !document.getElementById("forfeit").hidden;
  document.getElementById("restart").hidden = !document.getElementById("restart").hidden;
}


function restartGame(){
  displayMessage("Nouveau numéro générer","blue");
  number = generateNumber(0,100);
  i = NBR_COUPS;
  switchButtonVisibility();
}
