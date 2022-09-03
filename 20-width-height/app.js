// Javascript Nuggets
// Width/Height - window, any element
// innerHeight - window
// innerWidth - window
// getBoundingClientRect() - any element

const print = (...stuff) => console.log(...stuff)

print('height', window.innerHeight);
print('width', window.innerWidth);

const btn = document.querySelector('.btn');
const box = document.querySelector('.box');

btn.addEventListener('click', () => {
    const dimensions = box.getBoundingClientRect();
    print(dimensions)
})