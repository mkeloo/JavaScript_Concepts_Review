// MAP Method
// returns a new array
// does not change the size of original array (unlike filter)
// uses values from original array when making new one
const people = [
    {
        name: 'bob',
        age: 20,
        position: 'developer',
    },
    {
        name: 'anna',
        age: 25,
        position: 'designer',
    },
    {
        name: 'susan',
        age: 30,
        position: 'boss',
    },
    {
        name: 'john',
        age: 77,
        position: 'intern',
    },
];

const getAges = (person) => person.age * 5;
const ages = people.map(getAges);
// console.log(person);
console.log(ages);

const newPeople = people.map((item) => {
    return {
        firstName: item.name.toUpperCase(),
        oldAge: item.age + 20,
    }
})
console.log(newPeople);

const names = people.map((person) => `<h2>${person.name}</h2>`);
const result = document.querySelector('#result');

result.innerHTML = names.join('');