//objects are advanced value storing place
//objects stores keyed(named with string) data values
// let obj = {
//     name: 'stekan', //these are properties. they applied when they have been called by object.key (the name given to properties is called key)
//     color: 'white', //key has to be only string while value can be anything
//     shape: "square",
// 'info desk':'located in the middle',//you can apply key with multiple words in this way
// }
// console.log(obj['info desk']);//you can call it in this way afterward
// console.log(obj.name);
// //new object can be created by two following ways
// let user = new Object()
//     //or
// let object = { //this is more useful

// }
// delete obj.name//to remove key:value pair from object
// console.log(obj);
// let obj = {
//     name: 'stekan', //these are properties. they applied when they have been called by object.key (the name given to properties is called key)
//     color: 'white', //key has to be only string while value can be anything
//     shape: "square",
//     'info desk': 'located in the middle', //you can apply key with multiple words in this way
// }
// let key = prompt('what do you want', 'name');
// alert(obj[key]) //you can use square brasckets in this way.this will give you stekan if you input name in prompt
// let key = 'name';//you cannot use this trick in dot notations
// console.log(obj.key); //undefined will pop up
//BRASCKETS ARE MOSTLY FOR COMPLEX WORKS
//You can use anything for naming keys even the variable command names
//https://javascript.info/object#computed-properties :on this site i solved examples

// class student { //class creates template for new objects
//     constructer(name, surname, height) { //class is not an object 
//         this.name = name;
//         this.surname = surname;
//         this.height = height
//     }
// }
// let student1 = new student('Akif', 'Feyzullayev', '1.85sm')
// console.log((student1));
document.getElementById('demo').innerHTML = 'This is SPARTA!';