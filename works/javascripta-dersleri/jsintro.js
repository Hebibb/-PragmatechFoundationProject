let arr = []

// for (let i = 0; i < 5; i++) {
//     let isciAdi = prompt('Iscinin adini daxil et')
//     let isciSoyadi = prompt('Soyadini daxil et')
//     let isciYasi = prompt('Yasini daxil et')
//     let isci = {
//         ad: isciAdi,
//         soyad: isciSoyadi,
//         yas: isciYasi
//     }
//     arr.push(isci)
// }
// console.log(arr)

while (true) {
    emr = confirm('Yeni isci elave edilsin mi?')

    if (emr == true) {
        let isciAdi = prompt('Iscinin adini daxil et')
        let isciSoyadi = prompt('Soyadini daxil et')
        let isciYasi = prompt('Yasini daxil et')
        let isci = {
            ad: isciAdi,
            soyad: isciSoyadi,
            yas: isciYasi
        }
        arr.push(isci)
    } else {
        console.log(arr)
        break
    }
}