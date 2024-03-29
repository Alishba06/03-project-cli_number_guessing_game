#! /usr/bin/env node


import inquirer from"inquirer"

//  1) computer will generate a randam number
// 2)  user input for guessing number
// 3)  compare user input with computer generated number show result



const randomNumber = Math.floor(Math.random() * 10  + 1);

const answer = await inquirer.prompt([

    {
        name: "user",
        type: "number",
        message: "select a guess number between 1-10"
    }
]);
if(answer.user === randomNumber){
    console.log("congtratulationa you are win")
}else{
     console.log("your number is rong")

}





