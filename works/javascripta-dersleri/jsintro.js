let a = prompt('giris bali')
let b = prompt('imtahan bali')
let giris_bali = parseInt(a)
let imtahan_bali = parseInt(b)

if ((giris_bali >= 0) && (imtahan_bali >= 50)) {
    if ((giris_bali <= 100) && (imtahan_bali <= 100)) {
        if (((giris_bali * 0.4) + (imtahan_bali * 0.6)) >= 50) {

            alert('imtahandan kecdiniz')


        }
    }

} else { alert('kesildiniz') }