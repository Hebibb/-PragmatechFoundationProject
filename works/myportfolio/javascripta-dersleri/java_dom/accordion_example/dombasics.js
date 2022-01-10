function showfirstname() {
    let firstname = document.getElementById('link').getAttribute('href'); //GETATTRIBUTE
    document.getElementById('inhtml').innerHTML = firstname;
    document.getElementById('surname').setAttribute('style', 'width:300px', ); //AS SOON AS CLICKED ON FIRSTNAME INPUT SURNAME INPUT ENLARGES TO 300PX WIDTH
    document.getElementById('email').style.backgroundColor = 'red' //instead of using setattribute for adding style you can use this format which is more useful
    document.getElementById('tel').removeAttribute('value')

}

function removetel() {
    document.getElementById('tel').style.display = 'none';
}

function changesome() {
    document.getElementById('account_name').setAttribute('type', 'button') //changes type of form element from input to button
}

function newsite() {
    document.getElementById('link').setAttribute('href', 'https://www.w3schools.com/jsref/met_element_setattribute.asp')
}

function changecolor() {

    let x = document.querySelector('.change').style.backgroundColor = 'pink';
    if (x = true) {
        document.getElementById('change').style.backgroundColor = 'red';

    }
}

function reddening() {
    document.querySelector('.header').style.color = 'white';
    document.querySelector('.header').style.backgroundColor = 'blue';


}

function getdiv() {
    let div1 = document.createElement('div');
    div1.innerHTML = 'asdkfh';
}