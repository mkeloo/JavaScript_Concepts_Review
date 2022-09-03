const menu = [
    {
        name: 'pancakes',
        category: 'breakfast',
    },
    {
        name: 'burger',
        category: 'lunch',
    },
    {
        name: 'steak',
        category: 'dinner',
    },
    {
        name: 'bacon',
        category: 'breakfast',
    },
    {
        name: 'eggs',
        category: 'breakfast',
    },
    {
        name: 'pasta',
        category: 'dinner',
    },
];
// map = get all instances
// new Set - narrow down
// ['all', ...] - turn it back to array

// const categories = [...new Set()]  => Spread Operator
// const categories = ['all', 'afternoon tea',...new Set(menu.map((item) => item.category))];
// console.log((categories))

// Displaying Set Values
const categories = ['all', 'afternoon tea',...new Set(menu.map((item) => item.category))];
const result = document.getElementById("result");
result.innerHTML = categories.map((category) => {
    return `<button>${category}</button>`;
}).join(' ');





