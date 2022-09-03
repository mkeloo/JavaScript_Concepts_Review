const print = (...stuff) => console.log(...stuff);

/*
 Javascript Nuggets

 Fetch API -  Browser API for HTTP (AJAX) Requests
 Default - GET Requests, supports other methods as well
 Returns Promise
*/

const url = 'https://www.course-api.com/react-tours-project'

// .then() approach with invoking json() that returns another promise
// fetch(url)
//     .then((resp) => resp.json())
//     .then((data) => print(data))
//     .catch((err) => print(err))
//


const getTours = async () => {
    try {
        const resp = await fetch(url);
        const data = await resp.json();
        print(data);

    } catch (error) {
        print(error);
    }
}

const getTours2 = async function (url) {
    try {
        const resp = await fetch(url);
        return resp.json();
    } catch (error) {
        print(error)
    }
}


getTours();
getTours2('https://www.course-api.com/react-tours-project').then(data => print(data));