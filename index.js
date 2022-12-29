
// generate random number from 1 to 6
let randomNumber1 = Math.floor(Math.random() * 6) + 1

//dice image

let diceImage1 = "./assets/dice" + randomNumber1 + ".png"

//changing dice rolling

let diceRolling1 = document.getElementById("dice1");

diceRolling1.setAttribute("src", diceImage1)


//code for dice 2


let randomNumber2 = Math.floor(Math.random() * 6) + 1



let diceImage2 = "./assets/dice" + randomNumber2 + ".png"



let diceRolling2 = document.getElementById("dice2");

diceRolling2.setAttribute("src", diceImage2)

//To change h1

let heading = document.querySelector("h1")

if(randomNumber1 > randomNumber2){
    heading.innerHTML = "user 1 win"
} else if (randomNumber2>randomNumber1){
    heading.innerHTML = "user 2 win"
}else{
    heading.innerHTML = "draw"
}
