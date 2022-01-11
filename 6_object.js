const cityField = 'city'
//появилась возможность задавать динамические ключи
const job = 'Frontend'

const person = {
    age: 26,
    name: 'Irina',
    job,
    [cityField]: 'Saint-Peterburg',
    'country-live': 'Russia',
    print: () => 'Person',
    toString() {
        return Object    //появление Object.keys
            .keys(this)
            .filter(key => key !== 'toString')
            .map(key => this[key])
            .join(' ')
    }
}

// console.log(person.toString())
// console.log(person.print())
// console.log(person)

// Methods
const first = {a: 1}
const second = {b: 2}

// console.log(Object.is(20, 20)) - можно проверять на эквивалентность
const obj = Object.assign({}, first, {  //позволяет обьединять объекты - асайн
    c: 2,
    d: 3
})
// console.log(obj)

console.log(Object.entries(obj)) //
console.log(Object.keys(obj)) // массив ключей объекта
console.log(Object.values(obj)) //
