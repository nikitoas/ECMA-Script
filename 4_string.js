// const title = 'Hello'
//
// const isVisible = () => Math.random() > 0.5
//
// const template = `
//   ${isVisible() ? `<p>Visible</p>` : ''}
//   <h1 id='demo' style="color: red">${title}</h1>
// `
//
// console.log(template)

// Methods
const str = 'Hello'

console.log(str.startsWith('He'))// проверяет начинается ли строка на не
console.log(str.startsWith('e'))
console.log(str.endsWith('lo'))//проверяет заканчивается ли строка на lo
console.log(str.startsWith('e'))

console.log(str.includes('llo'))//есть ли такая строка подстрока в исходной строке


console.log(str.repeat(3))//позволяет продублировать строку

console.log(str.trim())//позволяет удалить пробелы слева и справа
console.log(str.trimEnd())
console.log(str.trimStart())

console.log(str.padStart(10, '1234'))//позволяет задать минимальное значение длины строки
console.log(str.padEnd(8, 'abc')) //