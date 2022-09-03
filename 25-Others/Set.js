// Set Object - stores a collection of unique values of any type

/*
// new Set()
// add(value)
// delete(value)
// clear()
// has(value)
 */


// iterators
// entries(), keys(), values(), forEach()

const unique = new Set();

const random = 'third';

unique.add('first');
unique.add('second');
unique.add(random);
unique.add('first');
unique.add(4);


// const result = unique.delete('third');
// console.log(result);

const result = unique.delete('five ');
console.log(result);

const isValue = unique.has(4);
console.log(isValue);

const keys = unique.keys();
const values = unique.values();
const entries = unique.entries();
console.log(keys);
console.log(values);
console.log(entries);


console.table(unique);


// New Set() - accepts iterable objects

const products = [
    {title: 'high-back bench', company: 'ikea'},
    {title: 'albany table', company: 'marcos'},
    {title: 'accent chair', company: 'caressa'},
    {title: 'wooden table', company: 'ikea'},
]


/*
const companies = products.map((item) => item.company)
console.log(companies)

const uniqueCompanies = new Set(companies);
console.log(uniqueCompanies)

// with spread operator
const finalCompanies = ['all', ...uniqueCompanies, 'all'];
console.log(finalCompanies)

// with rest operator
const [all, ikea, ...restCompanies] = finalCompanies;
console.log(all, ikea, restCompanies)

 */

const res = ['all', ...new Set(products.map((item) => item.company))];
console.log(res)
