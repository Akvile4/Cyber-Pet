class Pet {
    constructor(type, name, doy, level) {
        this.type = type
        this.name = name
        this.doy = doy 
        this.level = level
    }

    get realName() {
        return `Your cute little ${this.type}'s name is ${this.name}.`
    }

    get age() {
        let date = new date()
        let age = date.getFullYear() - this.doy
        return age
    }

    hunger = 0
    thirst = 0
    happiness = 30
    energy = 50
    boredom = 10

    levelUp() {
        if (this.happiness >= 60) {
            this.level++
            console.log(`Your ${this.type} is now level ${this.level}!!!`)
            this.happiness = 10
        }
    }

    water() {
        this.thirst = 0
        this.energy += 10
        this.boredom += 10
    }

    food() {
        this.hunger = 0
        this.happiness += 20
        this.thirst += 20
    }

    sleep() {
        this.energy = 50
        this.boredom += 30
        this.happiness -= 30
        this.hunger -= 20
        this.thirst -= 30
    }

    death() {
        if (this.hunger >= 50) {
            console.log(`Your cute little ${this.type} died because you haven't feed him properly...`)
        } else if (this.thirst >= 50) {
            console.log(`Your cute little ${this.type} died because you haven't given him anything to drink...`)
        } else if (this.happiness <= 0 || this.boredom >= 50) {
            console.log(`Your cute little ${this.type} died because of sadness...`)
        } else if (this.energy <= 0) {
            console.log(`Your cute little ${this.type} died because it didn't have any more energy to move`)
        }
    }

}

class Unicorn extends Pet {
    constructor(type, name, doy, level) {
        super(type, name, doy, level)
    }

    ride() {
        this.energy = (this.energy / 2)
        this.happiness += 20
        this.thirst += 30
        this.hunger += 10
        this.boredom-= 10
        console.log(`Your ${this.name} after a really cool ride lost half of her energy, so now it's ${this.energy}, her happiness got to ${this.happiness}, the thirst level is now ${this.thirst}, hunger ${this.hunger}, and boredom got to ${this.boredom}.`)
    }

    // drink() {
    //     this.energy += 10
    //     this.happiness += 10
    //     this.thirst -= this.thirst
    //     this.hunger += 0
    //     this.boredom += 0
    //     console.log(`Your ${this.name} found a fresh water river, so now her energy is ${this.energy}, her happiness got to ${this.happiness}, the thirst level is now ${this.thirst}, hunger is ${this.hunger}, and boredom is ${this.boredom}.`)
    // }

    shower() {
        this.energy -= 20
        this.happiness -= 30
        this.thirst += 0
        this.hunger -= 10
        this.bored -= 20 
        console.log(`Your ${this.name} was forced to have a cold shower and its energy got to ${this.energy}, its happiness got to ${this.happiness}, the thirst level is now ${this.thirst}, hunger is ${this.hunger}, and boredom is ${this.boredom}.`)
    }

    play() {
        this.energy -= 30
        this.happiness += 30
        this.thirst += 30
        this.hunger += 20
        this.bored = 0 
        console.log(`Your ${this.name} was playing with more cute unicorns so the energy got to ${this.energy}, its happiness got to ${this.happiness}, the thirst level is now ${this.thirst}, hunger is ${this.hunger}, and boredom got to ${this.boredom}.`)
    }


}

class Octopus extends Pet {
    constructor(type, name, doy, level) {
        super(type, name, doy, level)
    }

    thirst = 0

    play() {
        this.energy = (this.energy / 2)
        this.happiness += 30
        this.hunger += 20
        this.bored = 0 
        console.log(`Your ${this.name} was playing with more cute octopuses so the energy got to ${this.energy}, its happiness got to ${this.happiness}, hunger is ${this.hunger}, and boredom got to ${this.boredom}.`)
    }

    swim() {
        this.energy -= 20
        this.happiness += 20
        this.hunger += 20
        this.bored += 10 
        console.log(`Your ${this.name} was swimming around in the ocean so the energy got to ${this.energy}, its happiness got to ${this.happiness}, hunger is ${this.hunger}, and boredom got to ${this.boredom}.`)
    }

    hunting() {
        this.energy -= 30
        this.happiness += 10
        this.hunger = 0
        this.bored -= 20 
        console.log(`Your ${this.name} was hunting in the ocean so the energy got to ${this.energy}, its happiness got to ${this.happiness}, the thirst level is now ${this.thirst}, hunger is ${this.hunger}, and boredom got to ${this.boredom}.`)
    }
}

class Phoenix extends Pet {
    constructor(type, name, doy, level) {
        super(type, name, doy, level)
    }

    play() {
        this.energy = (this.energy / 2)
        this.happiness += 30
        this.thirst += 30
        this.hunger += 30
        this.bored = 0 
        console.log(`Your ${this.name} was playing with other cute phoenixes so the energy got to ${this.energy}, its happiness got to ${this.happiness}, the thirst level is now ${this.thirst}, hunger is ${this.hunger}, and boredom got to ${this.boredom}.`)
    }

    fly() {
        this.energy -= 30
        this.happiness += 20
        this.thirst += 20
        this.hunger += 20
        this.bored += 10 
        console.log(`Your ${this.name} was flying in the sky so the energy got to ${this.energy}, its happiness got to ${this.happiness}, the thirst level is now ${this.thirst}, hunger is ${this.hunger}, and boredom got to ${this.boredom}.`)
    }

    sing() {
        this.energy -= 10
        this.happiness += 30
        this.thirst += 30
        this.hunger += 10
        this.bored = 0 
        console.log(`Your ${this.name} was singing with its beautiful voice so the energy got to ${this.energy}, its happiness got to ${this.happiness}, the thirst level is now ${this.thirst}, hunger is ${this.hunger}, and boredom got to ${this.boredom}.`)
    }
}

let beauty = new Unicorn("unicorn","Beauty", 2021, 1)
let beauty2 = new Pet("unicorn", "Beauty", 2022, 2)

let inky = new Octopus("octopus", "Inky", 2016, 2)

let felix = new Phoenix("pheonix", "Felix", 2010, 4)

beauty.ride()
// beauty.drink()
console.log(beauty.water())

console.log(inky.swim())
console.log(inky.food())

console.log(felix.fly())
console.log(felix.sing())