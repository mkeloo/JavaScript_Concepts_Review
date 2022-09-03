// Spread Operator...
// Allows and iterable to spread/expand individually inside reciever
// Split into single items and COPY them

const udemy = 'udemy';
const letters = [...udemy];
console.log(letters)


const boys = ['john', 'peter', 'bob'];
console.log([...boys]);
const girls = ['susan', 'anna'];
const bestFriend = 'arnold';
const friends = [...boys, bestFriend, ...girls];
console.log(friends);

//reference
// const newFriends = friends;
// newFriends[0] = 'nancy';
// console.log(friends);
// console.log(newFriends);

// copy
const newFriends = [...friends]
newFriends[0] = 'nancy';
console.log("Friends Array: " + friends.join(' '));
console.log("New Friends Array (copy): " + newFriends.join(' '));

// ES2018 - ES8 Objects: spread operator copies the values from the object and does not references the original object
// Able to change new object properties without changing the original properties of the object
const person = { name: 'john', job: 'developer'}
const newPerson = {...person, city: 'chicago', name: 'peter'}
console.log(person);
newPerson.age = 25;
newPerson.firstName = 'NewPerson'
console.log(newPerson);
person.age = 36;
person.firstName = 'Person'
console.log(person);
console.log(newPerson);

