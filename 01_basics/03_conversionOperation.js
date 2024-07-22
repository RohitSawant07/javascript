let a = Number("33abc")
// console.table([typeof a, a])
// the not valid number will be converted into number, and it's typeof will be number,
// but the value will be NaN, Not a number.

let b = Number(null)
// console.table([typeof b, b])
// the not valid number will be converted into number, and it's typeof will be number,
// but the value will be 0

let c = Number(true)
// console.table([typeof c, c])
// the not valid number will be converted into number, and it's typeof will be number,
// but the value for true will be 1


let d = Number(false)
// console.table([typeof d, d])
// the not valid number will be converted into number, and it's typeof will be number,
// but the value for false will be 0

let e = Number(undefined)
// console.table([typeof e, e])
// the not valid number will be converted into number, and it's typeof will be number,
// but the value for false will be NaN

// 33 -> 33
// "33abc" -> NaN
// true -> 1
// false -> 0

// console.table([typeof Boolean(""), Boolean("")]) //false
// console.table([typeof Boolean("Rohit"), Boolean("Rohit")]) //true
// console.table([typeof Boolean(1), Boolean(1)]) //true
// console.table([typeof Boolean(0), Boolean(0)]) //false

console.log(1 + 2 + 2 + "1" + NaN)
