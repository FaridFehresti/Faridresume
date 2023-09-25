function dice(){
    var roll = Math.round(Math.random()*6);
    return roll;
}
n1 = dice();
n2 = dice();

if (n1===1){
    document.querySelector(".img1").setAttribute("src", "./images/dice1.png");
}
if (n1===2){
    document.querySelector(".img1").setAttribute("src", "./images/dice2.png");
}
if (n1===3){
    document.querySelector(".img1").setAttribute("src", "./images/dice3.png");
}
if (n1===4){
    document.querySelector(".img1").setAttribute("src", "./images/dice4.png");
}
if (n1===5){
    document.querySelector(".img1").setAttribute("src", "./images/dice5.png");
}
// ################ player 2:
if (n2===1){
    document.querySelector(".img2").setAttribute("src", "./images/dice1.png");
}
if (n2===2){
    document.querySelector(".img2").setAttribute("src", "./images/dice2.png");
}
if (n2===3){
    document.querySelector(".img2").setAttribute("src", "./images/dice3.png");
}
if (n2===4){
    document.querySelector(".img2").setAttribute("src", "./images/dice4.png");
}
if (n2===5){
    document.querySelector(".img2").setAttribute("src", "./images/dice5.png");
}

if (n1 > n2){
    document.querySelector("h1").innerText = " Player 1 wins!";
}
if(n1 < n2){
    document.querySelector("h1").innerText = " Player 2 wins!";
}
if(n1 === n2){
    document.querySelector("h1").innerText = "WOW, Tie!!";
}