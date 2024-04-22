
import{ Elephant,Lion,Girraffe,Cat,Snake} from '../src/Animal.js'

describe('Elephant', () => {
    test('Creating an instance of Elephant', () => {
        const myElephant = new Elephant('Olie', 30, 'female', true)  
        expect(myElephant.name).toBe('Olie');
        expect(myElephant.age).toBe(30);
        expect(myElephant.gender).toBe('female');
        expect(myElephant.hasTrunk()).toBe(true);
    });
});

describe('Lion', () => {
    test('Creating an instance of Lion', () => {
        const myLion = new Lion('Linda', 30, 'female', 'mammal');
        expect(myLion.name).toBe('Linda');
        expect(myLion.age).toBe(30);
        expect(myLion.gender).toBe('female');
        expect(myLion.species).toBe('mammal');
    });

    test('Lion makes sound "roar"', () => {
        const myLion = new Lion('Linda', 30, 'female', 'mammal');
        expect(myLion.makesSound()).toBe('roar');
    });
});

// Test for mySnake
describe('Snake', () => {
    const mySnake = new Snake('cobra', 2, 'male', false);

    test('Check gender of Snake', () => {
        expect(mySnake.gender).toBeDefined(); // Using "toBeDefined" matcher
    });

    test('Check gender of Snake is "male"', () => {
        expect(mySnake.gender).toBe('male'); // Using "toBe" matcher
    });
});

// Test for myGiraffe
describe('Giraffe', () => {
    const myGiraffe = new Girraffe('giraffe', 6, 'female', true);

    test('Check gender of Giraffe', () => {
        expect(myGiraffe.gender).toBeTruthy(); // Using "toBeTruthy" matcher
    });

    test('Check gender of Giraffe is "female"', () => {
        expect(myGiraffe.gender).toEqual('female'); // Using "toEqual" matcher
    });
});

// Test for myCat
describe('Cat Class', () => {
    const myCat = new Cat('Kitty', 4, 'female', true);

    test('Check if myCat makes sound "Meow"', () => {
        expect(myCat.makesSound()).toMatch('Meow'); // Using "toMatch" matcher
        expect(myCat.makesSound()).not.toBe('Woof'); // Using "not.toBe" matcher
    });

    test('Check if myCat is domesticated', () => {
        expect(myCat.domesticated).toBeTruthy(); // Using "toBeTruthy" matcher
        expect(myCat.domesticated).toBeDefined(); // Using "toBeDefined" matcher
        expect(myCat.domesticated).not.toBeFalsy(); // Using "not.toBeFalsy" matcher
    });

    test('Check if myCat age is a 4', () => {
        expect(myCat.age).toBe(4); 
    });
});