const person = {
    name: 'john',
    age: '25',
    status: 'student',
}

for (const propertyName in person) {
    console.log(`${propertyName} : ${person[propertyName]}`);
}

// Three methods to convert objects into arrays
// Object.keys() - converts property names into array
// Object.values() - converts property values into array
// Object.entries() - converts both

const keys = Object.keys(person)
const values = Object.values(person)
const entries = Object.entries(person)

console.log((keys).join(' ; '))
console.log((values).join(' ; '))
console.table((entries))

// map method
const newResult = entries.map((item) => {
    const [first, second] = item;
    console.log(first, second)

    return second;
});

console.log(newResult)

// For of
for (const [first, second] of entries) {
    // const [first, second] = item;
    console.log(first, second);
}

// Array includes() - checks if the item is an array
// useful in the conditional statements

const groceries = ['milk', 'bread', 'meat', 'lemon'];

let randomItem = 'lemon';
randomItem = 'milk';

// const isIncluded = groceries.includes(randomItem, 1);
// console.log(isIncluded);

if (groceries.includes(randomItem)) {
    console.log(`Yeah it's on the list!`);
}

// String includes() = checks if a string containes another string
const products = [
    {title: 'Modern Poster'},
    {title: 'Bar Stool'},
    {title: 'ArmChair'},
    {title: 'Leather Chair'},
];

const text = 'a';
const filteredProducts = products.filter((product) => {
    product.title.toLowerCase().includes(text);
})
console.log(filteredProducts)

/*
const firstName = 'jon';
// const result = firstName.includes('n', 2);
// console.log(result);

const product = {
    title: 'Leather Chair',
};
const result = product.title.includes('Le');
console.log(result)
 */