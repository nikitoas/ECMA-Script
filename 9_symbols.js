//Отдельный тип данных
const symbol = Symbol('demo')
const other = Symbol('demo')

// console.log(symbol)
// console.log(other)
//
// console.log(symbol === other) выглядят симболы одинаково но они разные,дает уникальность переменной

const obj = {
    name: 'Elena',
    demo: 'DEMO',
    [symbol]: 'meta'
}

for (let key in obj) { //цикл бежит и по прототипу
    console.log(key)
}

console.log(obj.demo)
console.log(obj[symbol])

