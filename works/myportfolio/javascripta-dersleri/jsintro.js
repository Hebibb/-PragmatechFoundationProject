//let a = prompt('giris baliniz')
//let b = prompt('imtahan baliniz')
//let giris_bali = parseInt(a)
//let imtahan_bali = parseInt(b)

//let c = prompt('imtahan ortalamanizi deyin')
//let imtahan_ortalamasi = parseInt(c)
//imtahan_ortalamasi = giris_bali * 0.4 + imtahan_bali * 0.6

//if (giris_bali >= 0 && giris_bali <= 100) {
//   if (((giris_bali * 0.4) + (imtahan_bali * 0.6)) >= 50) {

//     if (imtahan_bali <= 100 && imtahan_bali >= 0) { alert('tebrikler,imtahandan kecdiniz') }
//} else { alert('kesildiniz') }
//}
//if (((giris_bali < 0) || (imtahan_bali < 0)) || ((giris_bali > 100) || (imtahan_bali > 100))) { alert('girilen melumat duzgun deyil') }
//if ((imtahan_ortalamasi) < 50 && (imtahan_bali < 50)) { 'kesildiniz' }
//if ((imtahan_ortalamasi >= 50) && (imtahan_ortalamasi <= 65)) { alert("kafi") }
//if ((imtahan_ortalamasi > 65) && (imtahan_ortalamasi <= 80)) { alert('ortabab') }
//if ((imtahan_ortalamasi > 80) && (imtahan_ortalamasi <= 90)) { alert('yaxsi') }
//if ((imtahan_ortalamasi > 90) && (imtahan_ortalamasi <= 100)) { alert('super') }

//let a = 1
//a++
//a++
//a--
//console.log(a)
//let a = 57
//let b = 'hebib'
//let c = a + b
//console.log(c)
//let a = 78
//let b = null
//let c = a + b
//console.log(c)
//let a = 20
//let b = true
//let c = a + true
//console.log(c)
//let a = 20
//let b = false
//let c = a + b
//console.log(c)
//let a = 20
//let b = NaN
//let c = a + b
//console.log(c)
//let a = null
//let b = true
//console.log(a + b)
//if there is no 
//a = 56
//a += 56
//console.log(a)
//console.log('hebib' > 'feteli')
//every symbol has its own number embedded in javascript 

// creating calculator
//let a = prompt('birinci operandi daxil edin')
//let b = prompt('ikinci ededi daxil edin')
//let birinci = parseInt(a)
//let ikinci = parseInt(b)
//let riyaziemeliyat = prompt('riyazi emeliyati daxil edin')
//if (riyaziemeliyat == "+") { alert(birinci + ikinci) }
//if (riyaziemeliyat == '-') { alert(birinci - ikinci) }
//if (riyaziemeliyat == '/') { alert(birinci / ikinci) }
//if (riyaziemeliyat == '*') { alert(birinci * ikinci) }

//FUNCTIONS
//function sayhi() { console.log('hello everyone') }
//let username = 'Habib'

//function showgreeting() {
//   let message = 'Hello!' + username;
//    alert(message)
////}
//showgreeting()
///function can use variables from outer spaces
//if you change the message of variable in function program will ignore previous one.
//let username = 'Habib'

//function sayhi() { console.log('hello everyone') }

//function showgreeting() {
//  let username = 'Hemid' //local variable
//let message = 'Hello!' + username;
//alert(message)
//}
//showgreeting()
//alert(username)
//SHOWING PARAMETRS//

//function showgreeting(from, text = 'Please give your message!') { //writing parameter's default message
//  from = '*' + from + '*' //to add parameter additional symbols to look nice
//alert(from + ':' + text)
//}
//let n = 10



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