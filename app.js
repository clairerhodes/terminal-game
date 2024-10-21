// castle battle game :D
// by: claire rhodes, justin strohsnitter, & angel gerena vazquez

// let user input custom name & be able to reference custom name throughout game
const prompt = require('prompt-sync')();
const username = prompt(`What is your name?`);
console.log(`Your name is ${username}`);

const game = {
    player: [
        // barracks: true,
        // hp: 10],
    //barracks: [

    ],
    peon: [
        peonName = (`${peonName}`,)
        nothing = true,
        repair = false,
        attack = false
    ]
}

// start of player's turn, ask what the user wants to do: create or select a peon
const peonSelection = require('prompt-sync')()
const startTurn = peonSelection(`Do you want to "create" a peon or "select" a peon, type "create" or "select"`)



if(startTurn === 'create') {
    const prompt3 = require('prompt-sync')()
    const createPeon = prompt3('Type an name for your Peon')
}



/// claire's attempt
console.log('Do you want to "create" a peon or "select" a peon`);
    const peonChoice = prompt(`type "create" or "select"`);
    if(peonChoice === `create`){
        const peonName = prompt(`What would you like to name your peon?`)
        // create peon w/unique name that has job nothing
        console.log(`Your peon's name is ${peonName}`)


        // add peon to barracks
        
    } else(peonChoice === `select`){

    }