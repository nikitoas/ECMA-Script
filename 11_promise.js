// Promise - удобная конструкция,которая позволяет удобно работать с асинхронным кодом.
// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('Success')
//   }, 500)
// })

const delay = ms => new Promise(((resolve, reject) => {
    setTimeout(() => resolve(`Done! ${ms}`), ms) // чейнинг
}))

// delay(1000)
//   .then(data => delay(500)) метод then будет вызван,когда сработат асинхронный код
//   .then(data => console.log(data))
//   .catch(err => console.log(err)) получаем ошибку и с ней можно работать
//   .finally(() => console.log('Finally')) промис возвращается ошибку,и дает промису работать

// async function asyncDelay() {  асинхронная функция,что бы не было ошибок нужно функцию обернуть в блок try-catch
//   try {
//     const data = await delay(2000)
//     console.log(data)
//   } catch (e) {
//     console.log('Error', e)
//   }
// }
//
// asyncDelay()

Promise.all([ //работа с группой промисов,ждет результаты всех промисов
    delay(1000),
    delay(500),
    delay(2000)
]).then(data => console.log(data))

Promise.race([ //выбирает промис который сработает первым
    delay(1000),
    delay(500),
    delay(2000)
]).then(data => console.log(data))