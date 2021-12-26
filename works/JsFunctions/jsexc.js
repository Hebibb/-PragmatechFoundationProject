function numbertostring(n) {
    n = n + 1
    n = String(n)
    console.log(typeof n)
    return n
}
numbertostring()

function increase(n) {
    n = n - 1
    n = Number(n)
    console.log(n)
    return n
}
increase(4)

function add(x, y) {
    console.log(x + y)
    return x + y;
}
add(5, 6)

function substract(x, y) {
    console.log(x - y)
    return x - y;
}
substract(10, 11)

function multiply(x, y) {
    console.log(x * y)
    return x * y;
}
multiply(20, 10)

function divide(x, y) {
    console.log(x / y)
    return x / y;
}
divide(4, 10)

function divide(x) {

    console.log(x * x)
    return x * x;
}
divide(2)

function calculate(operation, x, y) {
    operation = 1
    x = 5
    y = 6
    console.log(y = operation + x)
    return y;
}
calculate(1, 5, 6)

function isGreaterThan(a, b) {
    if (a > b) { return console.log(true) } else(console.log(false))

}
isGreaterThan(10, 5)

function isLessThan(a, b) {
    if (a < b) { return console.log(true) } else(console.log(false))

}
isLessThan(15, 10)

function areEqual(a, b) {
    if (a === b) { console.log(true) } else(console.log(false))

}
areEqual(10, 10)


function minimum(a, b) {
    smallest = a
    if (a < b) { smallest == a } else(smallest == b)
    console.log(smallest)
}
minimum(16, 20)


function maximum(a, b) {
    biggest = a
    if (a > b) { biggest == a } else(biggest == b)
    console.log(biggest)
}
maximum(29, 28)

function isEven(n) {
    if (n % 2 === 0) { console.log(true) } else(console.log(false))

}
isEven(8)

function isOdd(n) {
    if (n % 2 != 0) { console.log(true) } else(console.log(false))

}
isOdd(5)

function combine(word1, word2) {
    word1 = word1
    word2 = word2
    console.log(word1 + " " + word2)
    return word1 + " " + word2

}
combine('qatar', 'relsi')