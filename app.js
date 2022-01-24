let inquirer = require("inquirer");

let {mainQuestions, gameQuestions} = require("./questions");

let { Unicorn, Octopus, Phoenix } = require("./classes");

let myCyberPet

let ui = new inquirer.ui.BottomBar()

const begin = async () => {

    let answer = await inquirer.prompt(mainQuestions)

    if (answer.type === "Unicorn") {
        myCyberPet = new Unicorn(answer.name)

        gameQuestions[0].choices.push("Ride (Unicorn only)","Shower (Unicorn only)","Play (Unicorn only)")
    }
    else if (answer.type === "Octopus") {
        myCyberPet = new Octopus(answer.name)

        gameQuestions[0].choices.push("Play (Octopus only)", "Swim (Octopus only)", "Hunting (Octopus only)")
    }
    else {
        myCyberPet = new Phoenix(answer.name)

        gameQuestions[0].choices.push("Play (Phoenix only)", "Fly (Phoenix only)", "Sing (Phoenix only)")
    }

    ui.log.write(`${myCyberPet.name.toUpperCase()} 
    Hunger: ${myCyberPet.hunger} 
    Thirst: ${myCyberPet.thirst} 
    Happiness: ${myCyberPet.happiness} 
    Energy: ${myCyberPet.energy} 
    Boredom: ${myCyberPet.boredom} 
    Level: ${myCyberPet.level}`)
    
    gameLoop()
}

const gameLoop = async () => {
    try {
        if (myCyberPet.hunger >= 50) {
            console.log(`Your cute little ${myCyberPet.name.toUpperCase()} died because you haven't feed him properly...`)
            return
        } else if (myCyberPet.thirst >= 50) {
            console.log(`Your cute little ${myCyberPet.name.toUpperCase()} died because you haven't given him anything to drink...`)
            return
        } else if (myCyberPet.happiness <= 0 || myCyberPet.boredom >= 50) {
            console.log(`Your cute little ${myCyberPet.name.toUpperCase()} died because of sadness...`)
            return
        } else if (myCyberPet.energy <= 0) {
            console.log(`Your cute little ${myCyberPet.name.toUpperCase()} died because it didn't have any more energy to move`)
            return
        }  
        else if (myCyberPet.happiness >= 60) {
            myCyberPet.level++
            console.log(`Your ${myCyberPet.name.toUpperCase()} is now level ${myCyberPet.level}!!!`)
            myCyberPet.happiness = 10
        }   

    let answer = await inquirer.prompt(gameQuestions)

    if (answer.action === "Water") {
        myCyberPet.water()
    }
    else if (answer.action === "Feed") {
        myCyberPet.feed()
    }
    else if (answer.action === "Sleep") {
        myCyberPet.sleep()
    }
    else if (answer.action === "Ride (Unicorn only)") {
        myCyberPet.ride()
    }
    else if (answer.action === "Shower (Unicorn only)") {
        myCyberPet.shower()
    }
    else if (answer.action === "Play (Unicorn only)") {
        myCyberPet.play()
    }
    else if (answer.action === "Play (Octopus only)") {
        myCyberPet.play()
    }
    else if (answer.action === "Swim (Octopus only)") {
        myCyberPet.swim()
    }
    else if (answer.action === "Hunting (Octopus only)") {
        myCyberPet.hunting()
    }
    else if (answer.action === "Play (Phoenix only)") {
        myCyberPet.play()
    }
    else if (answer.action === "Fly (Phoenix only)") {
        myCyberPet.fly()
    }
    else if (answer.action === "Sing (Phoenix only)") {
        myCyberPet.sing()
    }
    

    ui.log.write(`${myCyberPet.name.toUpperCase()} 
    Hunger: ${myCyberPet.hunger} 
    Thirst: ${myCyberPet.thirst} 
    Happiness: ${myCyberPet.happiness} 
    Energy: ${myCyberPet.energy} 
    Boredom: ${myCyberPet.boredom} 
    Level: ${myCyberPet.level}`)

    gameLoop()

    }
    catch (error) {
        console.log(error);
    }
}

begin()