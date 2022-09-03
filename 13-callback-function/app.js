const print = (...stuff) => console.log(...stuff);

function makeUppercase(value) {
    console.log(value.toUpperCase())
}

makeUppercase('peter')

function reverseString(value) {
    print(value.split('').reverse().join(''));
}

function handleName(name, cb) {
    const fullName = `${name} smith`;
    cb(fullName);
    //some more logic
}


handleName('peter', makeUppercase)
handleName('peter', reverseString)

handleName('demetri', (value) => print(value))

handleName('susan', function (value) {
    print(value);
});


// Event Listeners

const btn = document.querySelector('.btn');
btn.addEventListener('click', function () {
    print('hello world');
})

btn.addEventListener('mouseover', sayHello);

function sayHello() {
    print("Hello People! ")
}

// array methods, setTimeout, event listeners etc