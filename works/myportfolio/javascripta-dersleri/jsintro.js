let a = prompt('giris baliniz')
let b = prompt('imtahan baliniz')
let giris_bali = parseInt(a)
let imtahan_bali = parseInt(b)

let c = prompt('imtahan ortalamanizi deyin')
let imtahan_ortalamasi = parseInt(c)
imtahan_ortalamasi = giris_bali * 0.4 + imtahan_bali * 0.6

if (giris_bali >= 0 && giris_bali <= 100) {
    if (((giris_bali * 0.4) + (imtahan_bali * 0.6)) >= 50) {

        if (imtahan_bali <= 100 && imtahan_bali >= 0) { alert('tebrikler,imtahandan kecdiniz') }
    } else { alert('kesildiniz') }
}
if (((giris_bali < 0) || (imtahan_bali < 0)) || ((giris_bali > 100) || (imtahan_bali > 100))) { alert('girilen melumat duzgun deyil') }
if ((imtahan_ortalamasi) < 50 && (imtahan_bali < 50)) { 'kesildiniz' }
if ((imtahan_ortalamasi >= 50) && (imtahan_ortalamasi <= 65)) { alert("kafi") }
if ((imtahan_ortalamasi > 65) && (imtahan_ortalamasi <= 80)) { alert('ortabab') }
if ((imtahan_ortalamasi > 80) && (imtahan_ortalamasi <= 90)) { alert('yaxsi') }
if ((imtahan_ortalamasi > 90) && (imtahan_ortalamasi <= 100)) { alert('super') }

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