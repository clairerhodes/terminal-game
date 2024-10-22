// castle battle game :D
// by: claire rhodes, justin strohsnitter, & angel gerena vazquez

// let user input custom name & be able to reference custom name throughout game
const prompt = require('prompt-sync')();
const username = prompt(`What is your name? `);
console.log(`Your name is ${username}`);

const game = {
    player: { // create object player with keys barracks and hp with values true and 10
        barracks: true,
        hp: 10
    },
    barracks: [ // create barracks array to fill with peonUsername's

    ],
    createPeon: (name) => { // run method multiple times to keep pushing into barracks
        let peon = {peonUsername: name, job: `nothing`};
        // console.log(peon); check that you're getting {peonUsername: name, job: `nothing`}
        game.barracks.push(peon) // push each peon into your barracks
    }
}
const selectPeon = (peonName) => {
    let matchedPeon
    game.barracks.forEach((peon) => {
        if (peonName.toLowerCase() === peon.peonUsername.toLowerCase()){
            console.log(peon) //for reference
            matchedPeon = peon // access peon outside of forEach, can use find command but idfk what find is yet (ty glenn)
        }
    })
    // ACTION ITEM: how to change job from nothing to either repair or attack
    // make method 
}
const createSelectPeonOption = () => {

// start of player's turn, ask what the user wants to do: create or select a peon
console.log(`Do you want to "create" a peon or "select" a peon? `);
    const peonChoice = prompt(`type "create" or "select": `);
    if(peonChoice === `create`){
        const peonName = prompt(`What would you like to name your peon? `)
        console.log(`Your peon's name is ${peonName}`);
        game.createPeon(peonName) // adds named peon to our peon username array inside of the game constant
        createSelectPeonOption()
    } else if(peonChoice === `select`){ // else if b/c if user writes anything other than provided response, will cause error
        /// ask which peonUsername player wants to select
        //game.createPeon(`Fred`) // this is just checking to see that we can select a peon, no need to comment back in
        //game.createPeon(`Bob`) // this is just checking to see that we can select a peon, no need to comment back in
        let peonPrompt = `Which peon would you like to select:`
        game.barracks.forEach((banana) => {
            peonPrompt = peonPrompt + ` ` + banana.peonUsername
        })
        const peonSelection = prompt (peonPrompt);
        selectPeon(peonSelection)
        /// ACTION ITEM: choose what action peon should perform
        // if( === `attack`){

        // } else( === `repair`){

        // }
    }
}
createSelectPeonOption()


    // console.log(game.peon.peonUsername) // checking that i added new peonName to peonUsername

/* notes for east coast group mates:
- ive worked on this for like 6 hours by myself at this point, im calling it a night here and leaving you notes for what needs to be done
- i basically fixed things that we had incorrect in our initial set up during lecture time (i coded pretty much everything up to choosing a job for our peon)
- i've added notes throughout the code, some things say ACTION ITEM for what still needs to be added. but otherwise,
- here's a list of things that still needs to be done:
    - set up action that the peon should perform once chosen (1b)
        - including set up repair and attack options for jobs
    - step 2: what to do if peon's job is to repair, what to do if job is to attack
    - step 3: computer's turn
        this is my idea for a random number function:
        function randomHitPoints(min, max){
            return math.floor(math.random(min - max)+1)}
        randomHitPoints(1,5)
        - computer repairing itself or damaging player for that number of points
    - evaulate the state of the game
        - if cpu has <= 0 points, player wins
        - if player has <= 0 points, cpu wins
        - if both have 0 or <= 0 points, its a tie
        - if both > 0 hit points, start player's turn over again (go back to step 1)