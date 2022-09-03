const print = (...stuff) => console.log(...stuff);
//  Javascript Nuggets

//  Timestamps
print(new Date());

// Unix Time
// January 1, 1970
// 1s = 1000ms

// Date.now()
print(Date.now());

// new Date().getTime()
print(new Date().getTime());

// new Date().valueOf()
print(new Date().valueOf());

setTimeout(() => {
    print(Date.now());
}, 1000);

// create id's in learning apps
let people = [];
people = [...people, {id: Date.now(), name: 'peter'}]

setTimeout(() => {
    people = [...people, {id: Date.now(), name: 'jon'}];
    print(people);

}, 1000)


// create / Get Dates
print(new Date(1694191874230))
const now = Date.now();
const futureDate = new Date(now + 1000 * 60);
print(futureDate);
print(new Date())

// difference between dates
const firstDate = new Date();
const secondDate = new Date(2022, 8, 5);

const firstValue = firstDate.getTime();
const secondValue = secondDate.getTime();

print(firstValue);
print(secondValue);

const timeDiff = secondValue - firstValue;
print(timeDiff);
const minutes = timeDiff / (1000 * 60);
const hours = minutes / (60);
const days = hours / (24);
print(days);


