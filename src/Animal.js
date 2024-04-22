export class Animal{
    constructor(name,age,gender){
        this.name = name
        this.age = age
        this.gender = gender
    }

    getName() { 
        return this.name
    }
}

//sub class

//instances of each Animal-elephant
export class Elephant extends Animal{
    constructor(name,age,gender,trunk){
        super(name, age, gender)
        this.trunk = trunk
    }

    hasTrunk() {
        return true
    }
}

 
const myElephant = new Elephant('Olie', 30, 'female', true)  

export class Lion extends Animal { 
    constructor(name,age,gender,species){
        super(name, age, gender)
        this.species = species
    }

    makesSound() { 
       return 'roar'
    }
}

const myLion = new Lion('Linda', 30, 'female', 'mammal')
console.log(myLion.species);

//snake

export class Snake extends Animal{
    constructor(name,age,gender,legs){
        super(name, age, gender)
        this.legs = legs
    }
hasLegs(){
    {
    return false
      }
    
    }
}

const mySnake = new Snake('cobra', 2, 'male', false)
console.log(mySnake.gender);

//giraffe
export class Girraffe extends Animal{
    constructor(name,age,gender,horns){
        super(name, age, gender)
        this.horns = horns
    }

    hasHorns(){
        return true
    }
}

const myGiraffe = new Girraffe('giraffe', 6, 'female', true)
console.log(myGiraffe.gender);

//cat

export class Cat extends Animal{
    constructor(name,age,gender,domesticated){
    super(name, age, gender)
     this.domesticated=domesticated
}
    makesSound(){
        return 'Meow'
    }
}

const myCat = new Cat('Kitty', 4, 'female', true)
console.log(myCat.makesSound());




