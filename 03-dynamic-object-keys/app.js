// Dot notation
const person = {
    name: 'john',
};

console.log(person.name);
person.age = 25;
console.log(person);

// Square Bracket Notation
const items = {
    'feature-items': ['item1', 'item2'],
}
console.log(items['feature-items'])
console.log(person['name'])

// Setup Keys dynamically by [] Notation
let appState = 'loading';
appState = 'error';
// value becomes the key name => 'loading' (value) becomes key
const keyName = 'computer';

const app = {
    [appState]: true,
}
app[keyName] = 'apple';
// value becomes the key name => 'loading' (value) becomes key
console.log(app)

const state = {
    loading: true,
    name: '',
    job: '',
};

// Setup Keys dynamically by [] Notation
function updateState(key, value) {
    state[key] = value;
};
updateState('name', 'john')
updateState('job', 'carpenter')
updateState('loading', false)
updateState('products', ['pencil', 'paper'])
updateState('name', 'Peter')
console.log(state);
