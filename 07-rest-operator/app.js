// Rest Operator...
// gathers/collects items
// destructuring, functions
// placement important, careful with the same name
// rest when declare function, spread when invoke the function

// arrays
const fruits = ['apple', 'orange', 'lemon', 'banana', 'pear', 'mango'];
const [first, second, third, ...restOfTheFruits] = fruits;
console.log(first, second, third, restOfTheFruits)

const specificFruit = restOfTheFruits.find((fruit) => fruit === 'pear');
console.log(specificFruit);

// objects
const person = { name: 'john', lastName: 'smith', job: 'developer', city: 'chicago' };
const { city, ...restPerson } = person;
console.log(city, restPerson);

// functions
const getAverage = (name, ...scores) => {
    console.log(name);
    console.log(scores);
    const average = scores.reduce((total, item) => {return total += item}, 0) / scores.length;
    console.log(average);
}

// getAverage(person.name, 89, 89, 99, 88)
const testScores = [23, 45, 67, 89];
getAverage(person.name, ...testScores)