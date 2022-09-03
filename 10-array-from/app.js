// Array.from - NOT ON PROTOTYPE

// from - returns Array Object from an object
// with a length property or an iterable object
// from - turns array-like/ish into array - string, nodeList, Set
const print = (...stuff) => console.log(...stuff);

const udemy = 'udemy'

// print(Array.from(udemy))

// const text = document.querySelectorAll('.text')
//
// const newText = Array.from(text).find((item) => item.textContent === 'person')
// print(newText)

// General Pagination feature using Array.from

const items = Array.from({length: 120}, (_, index) => {
    return index;
})

const itemPerPage = 8;
const pages = Math.ceil(items.length / itemPerPage);

const newItems = Array.from({length: pages}, (_, index) => {
    const start = index * itemPerPage;
    const tempItems = items.slice(start, start + itemPerPage);
    return tempItems;
})

print(newItems)