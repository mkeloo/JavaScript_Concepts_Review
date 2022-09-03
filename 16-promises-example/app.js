//  Javascript Nuggets - Promises Example
// .first - after 1s first red;
// .second - after 3s second blue; 4s
// .third - after 2s third green; 6s
// IN SEQUENCE !!!!

const btn = document.querySelector('.btn')

btn.addEventListener('click', () => {
    addColor(1000, '.first', 'red', 'hello World')
        .then((data) => addColor(3000, '.second', 'blue', data))
        .then((data) => {
            console.log(data)
            addColor(2000, '.third', 'green', data)
        })
        .catch((error) => console.log(error));
})


function addColor(time, selector, color, data) {
    const element = document.querySelector(selector);

    return new Promise((resolve, reject) => {

        if (element) {

            setTimeout(() => {

                element.style.color = color;
                resolve(data);

            }, time);

        } else {
            reject(`There is no such element: "${selector}".`);
        }
    });
}