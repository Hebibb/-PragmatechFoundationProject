/*function defaultparameters(parameter1, parameter2 = "necesen?") //we gave parameter2 default value
{
    let c = parameter1 + parameter2
    console.log(c)
    return c //returns c variable to global scope to be able to use

}
defaultparameters('Hebib:')
function addaxilet(ad) { return ad; }

function daxiledilenmelumat(ad) {
    let melumat = addaxilet(ad);
    console.log(melumat + " " + 'salam!')
}
daxiledilenmelumat('hebib')

function flightno(no) { return no; }//to use one function in another one

function yolkaninyanmasi(no) {
    let lights = flightno(no)
    if (no > 10) { console.log(lights + 'ucun isiqlar yanmisdir.') } else(console.log('xosgelmisiniz'))
}
yolkaninyanmasi(5)*/
//IF THERE IS NO RETURN STATEMENT IN FUNCTION WE WILL CALL IT VOID(ICRACI) FUNCTION


//CREATING OBJECT IN JS
let maaslar = [300, 500, 750, 800, 900, 5000, 3000, 2000, 1400, 500, 700, 650] //butun maaslar ekranda gosterilsin
    //while
let sira = 0;
while (sira < 12) {
    console.log(maaslar[sira]);
    sira++
}