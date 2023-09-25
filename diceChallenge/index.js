document.getElementById("DiceRoller").addEventListener("click", function(){
    function Dice(){
        var randomN = Math.floor(Math.random() *6) + 1;
        return randomN;
    } 
    var n1 = Dice();
    var n2 = Dice();

    var Player1 = document.querySelector("#p1").innerHTML
    var Player2 = document.querySelector("#p2").innerHTML
    
    if(n1 > n2){
        document.querySelector("h1").innerHTML = Player1 + " Wins"
    }
    if(n2 > n1){
        document.querySelector("h1").innerHTML = Player2 + " Wins"

    }
    if(n2 == n1){
        document.querySelector("h1").innerHTML = " Holy Shit, Tie!!"

    }
    switch (n1) {
        case 1:
            dice1.setAttribute("src","./images/dice1.png");
            break;
        case 2:
            dice1.setAttribute("src","./images/dice2.png");
            break;
        case 3:
            dice1.setAttribute("src","./images/dice3.png");
            break;
        case 4:
            dice1.setAttribute("src","./images/dice4.png");
            break;
        case 5:
            dice1.setAttribute("src","./images/dice5.png");
            break;
        case 6:
            dice1.setAttribute("src","./images/dice6.png");
            break;
    }
    
    switch (n2) {
        case 1:
            dice2.setAttribute("src","./images/dice1.png");
            break;
        case 2:
            dice2.setAttribute("src","./images/dice2.png");
            break;
        case 3:
            dice2.setAttribute("src","./images/dice3.png");
            break;
        case 4:
            dice2.setAttribute("src","./images/dice4.png");
            break;
        case 5:
            dice2.setAttribute("src","./images/dice5.png");
            break;
        case 6:
            dice2.setAttribute("src","./images/dice6.png");
            break;
    }});
//  Player name change:
const Player1NameInput = document.querySelector(".input1");
const Player2NameInput = document.querySelector(".input2");
const Player1 = document.getElementById("p1");
const Player2 = document.getElementById("p2");


Player1NameInput.addEventListener("input", function(){
    Player1.textContent = Player1NameInput.value;
});
Player2NameInput.addEventListener("input", function(){
    Player2.textContent = Player2NameInput.value;
});

// Mobile menu ************************************
const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar');

menu.addEventListener('click', function(){
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});


