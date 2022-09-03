//  Javascript Nuggets - Callback Hell
const print = (...stuff) => console.log(...stuff);
// after 1s first red;
// after 3s second blue; 4s
// after 2s third green; 6s
// IN SEQUENCE !!!!

const first = document.querySelector('.first')
const second = document.querySelector('.second')
const third = document.querySelector('.third')

const btn = document.querySelector('.btn')

// Callback Hell
btn.addEventListener('click', () => {
    print('Hello World!');

    setTimeout(() => {
        first.style.color = 'red';
        print("First: red");

        setTimeout(() => {
            second.style.color = 'blue';
            print("Second: blue");

            setTimeout(() => {
                third.style.color = 'green';
                print("Third: green");
            }, 2000);

        }, 3000);

    }, 5000);


})
