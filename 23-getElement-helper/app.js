//  Javascript Nuggets
const print = (...stuff) => console.log(...stuff);

const heading = document.querySelector('.heading');
// print(heading);

const listItems = document.querySelectorAll('.list-item');
// print(listItems);

/*
const getElement = (selector, isList) => {
    if (isList) {
        const el = [...document.querySelectorAll(selector)];
        if (el.length < 1) {
            throw new Error(`PLease double check List selector: ${selector}`);
        }
        return el;
    }

    const el = document.querySelector(selector);

    if (el) return el;
    throw new Error(`Please double check selector: ${selector}`);
};
 */

const getElement = (selector, isList) => {
    const el = isList ? [...document.querySelectorAll(selector)] : document.querySelector(selector);

    // not a list - exist or not
    // list - empty or not

    // if (!isList && el) return el;
    // if (!isList && !el.length < 1) return el;

    if ((!isList && el) || (isList && !el.length < 1)) return el;
    throw new Error(`Please double check selector : ${selector}`);
}

// print(getElement('.heading'))
// print(getElement('.list-item', true))
print(getElement('.lis-item', true))


