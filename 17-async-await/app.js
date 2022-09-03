const print = (...stuff) => console.log(...stuff);

//  Javascript Nuggets
// async / await
// async must be present, always returns a promise
// await waits till promise is settled
// error handling - try/catch block

// const example = async () => {
//   return 'hello there'
// }

// async function someFunc() {
//   const result = await example()
//   console.log(result)
//   console.log('hello world')
// }

const users = [
    {id: 1, name: 'john'},
    {id: 2, name: 'susan'},
    {id: 3, name: 'anna'},
]

const articles = [
    {userId: 1, articles: ['one', 'two', 'three']},
    {userId: 2, articles: ['four', 'five']},
    {userId: 3, articles: ['six', 'seven', 'eight', 'nine']},
]


function getUser(name) {
    return new Promise((resolve, reject) => {
        const user = users.find((user) => user.name === name);

        if (user) {
            return resolve(user);
        } else {
            reject(`No such user with that name: ${name}!`)
        }
    })
}