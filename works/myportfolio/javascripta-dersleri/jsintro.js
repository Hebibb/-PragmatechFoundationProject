let a = prompt('giris baliniz')
let b = prompt('imtahan baliniz')
let giris_bali = parseInt(a)
let imtahan_bali = parseInt(b)

if (giris_bali >= 0 && giris_bali <= 100) {
    if (((giris_bali * 0.4) + (imtahan_bali * 0.6)) >= 50) {
        if (imtahan_bali <= 100 && imtahan_bali >= 0) { alert('tebrikler,imtahandan kecdiniz') }
    }
} else { alert('kesildiniz') }