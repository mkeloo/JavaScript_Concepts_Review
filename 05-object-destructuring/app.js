// faster/easier way to access/unpack values from arrays and objects
const bob = {
    first: 'bob',
    last: 'sanders',
    city: 'chicago',
    siblings: {
        sister: 'jane',
        brother: 'henry'
    },
};

const joff = {
    first: 'joff',
    last: 'bozos',
    city: 'denver',
    siblings: {
        sister: 'missy',
        brother: 'mitch'
    },
};

// const firstName = bob.first;
// const lastName = bob.last;
// const sister = bob.siblings.sister;
//
// console.log(firstName, lastName, sister);

const first = 'some value'
const {first: shakeAndBake, last, city, siblings: {brother, sister: favoriteSibling}} = bob
console.log(shakeAndBake, last, city, first, favoriteSibling, brother)

function printPerson(person) {
    // console.log(person.first)
    const {first, last, siblings: {brother, sister}} = person;
    console.log(first, last, brother, sister)
}

function secondPrint({first, last, city, siblings: {brother, sister}}) {
    console.log(first, last, brother, sister);
}
printPerson(bob);
secondPrint(joff);
