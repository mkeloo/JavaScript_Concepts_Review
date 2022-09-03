// Filter - returns a new array, can manipulate the size of new array (unlike map), returns based on condition
// Find - returns single instance (object), returns first match from multiple matches (unique values),  if no match - undefined

const people = [
    {name: 'bob', age: 20, position: 'developer'},
    {name: 'peter', age: 25, position: 'designer'},
    {name: 'susy', age: 30, position: 'the boss'},
    {name: 'anna', age: 35, position: 'intern'},
    {name: 'john', age: 18, position: 'developer'},
    {name: 'peter', age: 25, position: 'developer '},

];

const fruits = ['orange', 'pear', 'lemon']

// filter
const youngPeople = people.filter((person) => {
    // if (person.age < 30) {
    //     return person;
    // }
    return person.age < 30;
})

console.log(youngPeople);
const developers = people.filter((person) => person.position === 'developer');
console.log(developers)

// no match: empty array []
const seniorDevs = people.filter((item) => item.position === 'senior dev');
console.log(seniorDevs);


// find: only single instance
const peter = people.find((person) => person.name === 'peter');
console.log(peter);
const fruit = fruits.find((fruit) => fruit === 'lemon');
console.log(fruit)

// no match: undefined
const oldPerson = people.find((person) => person.age > 35);
console.log(oldPerson)

// multiple matches -first match
const randomPerson = people.find((person) => person.age < 35);
console.log(randomPerson)

const anna = people.filter((person) => person.name === 'anna');
console.log(peter.position);

// Filter like find method (find is easier)
console.log(anna[0].position);

