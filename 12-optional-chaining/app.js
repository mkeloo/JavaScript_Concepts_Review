const print = (...stuff) => console.log(...stuff);

const people = [
    {
        name: 'bob',
        location: {street: '123 main street', timezone: {offset: '+7:00'}},
    },
    {
        name: 'peter', location: {street: '123 Pine street'}
    },
    {
        name: 'susan',
        location: {street: '123 Apple street', timezone: {offset: '+9:00'}},
    },
]

people.forEach((person) => {
    // print(person.name)

    print(person?.location?.timezone?.offset || 'Hwllo World');
})

