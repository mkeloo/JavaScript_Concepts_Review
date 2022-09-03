const print = (...stuff) => console.log(...stuff);
// Javascript Nuggets - Promises: to avoid callback hell

// async await
// consume/use promises

// Pending, Rejected, FulFilled

const value = 2;

const promise = new Promise((resolve, reject) => {
    const random = Math.floor(Math.random() * 3);
    print(random);

    if (random === value) {
        resolve("You guessed the number correctly!");
    } else {
        reject("Guessed an incorrect number :(");
    }

    // resolve('Hello Resolved Promised');
    // reject('There was an Error');
    // resolve([1, 3, 3, 5]);

})

print(promise);

promise.then((data) => {
    print(data)
}).catch((error) => {
    print(error)
})