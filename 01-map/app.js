const rest = new Map();
rest.set('name', 'Classico Italy');
rest.set(1, 'Firenze');
console.log(rest.set(2, 'Lisbon, Portugal'))

rest.set('categories', ['Italian', 'Pizzeria', 'Vegetable'])
    .set('open', 11)
    .set('close', 23)
    .set(true, 'We are open')
    .set(false, 'We are closed')


console.log(rest.get('name'))
console.table(rest)
console.log(rest.get(1))
console.log(rest.get(true))

const time = 8;
const hours = rest.get(time > rest.get('open') && time < rest.get('close'))
console.log(hours)

console.log(rest.has(true))
rest.delete(2);
console.log(rest.size)
// rest.clear()

const arr = [1, 2]
rest.set(arr, 'test')
// rest.set(document.querySelector('h1'), 'Heading')
console.log(rest)

console.log(rest.get(arr))
