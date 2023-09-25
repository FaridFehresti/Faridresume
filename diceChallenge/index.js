

document.querySelector(".btn").addEventListener("click",function(){
    function dice(){
        var roll = Math.floor(Math.random()*6) + 1;
        return roll;
    }
    n1 = dice();
    n2 = dice();
    var dice1 = document.querySelector("#dice1");
    var dice2 = document.querySelector("#dice2");
    
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
    }

    const Player1 = document.querySelector(".input1").value;
    const Player2 = document.querySelector(".input2").value;
    
    if (Player1.length === 0) {
        document.getElementById("p1").textContent = "Player1";
    }
    
    if (Player2.length === 0) {
        document.getElementById("p2").textContent = "Player2";
    }

    if (n1 > n2) {
        document.querySelector(".result").innerHTML = Player1 + " Win!";
    }
    if (n1 < n2) {
        document.querySelector(".result").innerHTML = Player2 + " Win!";
    }
    if (n1 === n2) {
        document.querySelector(".result").innerHTML = "Holy shit its a tie!!!";
    }
    
});
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


