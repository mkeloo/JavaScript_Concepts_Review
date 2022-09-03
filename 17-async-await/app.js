const print = (...stuff) => console.log(...stuff);
const table = (...stuff) => console.table(...stuff);

/*
Javascript Nuggets
async / await: allows to write async code in sync manner
async must be present, always returns a promise
await waits till promise is settled
error handling - try/catch block
*/

/* Example
const example = async () => {
    return 'hello there'
}
print(example())
async function someFunc() {
    // const result = await example()
    await example();
    // print(result);
    print("Hell0 World!")
}
someFunc();
*/

const users = [
    {id: 1, name: 'john', job: 'developer'},
    {id: 2, name: 'susan', job: 'CEO'},
    {id: 3, name: 'anna', job: 'baker'},
]

const articles = [
    {userId: 1, articles: ['one', 'two', 'three']},
    {userId: 2, articles: ['four', 'five']},
    {userId: 3, articles: ['six', 'seven', 'eight', 'nine']},
]

const careerChange = [
    {eID: 1, profession: ['hacker', 'frontend', 'developer']},
    {eID: 2, profession: ['manager', 'MBA', 'CEO']},
    {eID: 3, profession: ['bakery', 'chef', 'baker']},
]

// Typical .then() .catch() => Chaining Then methods
// getUser('anna')
//     .then((user) => getArticles(user.id))
//     .then((articles) => print(articles))
//     .catch((err) => print(err))


// New Method with Async / Await
const getData = async (name) => {
    try {

        const user = await getUser(name);
        const articles = await getArticles(user.id);
        const job = await getJobTypes(user.id)
        
        print(user.name, articles, job.profession.join('/'))

    } catch (error) {
        console.error(error)
    }
}

getData('anna');
// getData('john');

// getData('bozo');

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

function getArticles(userId) {
    return new Promise((resolve, reject) => {
        const userArticles = articles.find((user) => user.userId === userId)

        if (userArticles) {
            return resolve(userArticles.articles)
        } else {
            reject(`Wrong ID!`);
        }
    })
}

function getJobTypes(employeeID) {
    return new Promise((resolve, reject) => {
        print(employeeID)
        const currentJob = careerChange.find((employee) => employee.eID === employeeID)

        if (currentJob) {
            return resolve(currentJob)
        } else {
            // print(currentJob)
            reject(`Sorry Change Career!`)
        }

    })
}