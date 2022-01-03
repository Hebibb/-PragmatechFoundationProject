//objects:is variable that can have multiple values
// let tree = {
//     name: 'Kuknar',//name,type and etc. are properties of object namely tree
//     type: 'evergreen',
//     climate: 'nothern hemisphere',
//     age: '50 years'
// }
//you can call objects through this on console screen tree.name

//object methods are actions that can be performed on object .They are added to properties as function.
let tree = {
    name: 'Kuknar',
    type: 'evergreen',
    climate: 'nothern hemisphere',
    age: '50 years',
    full_exp: function() {
        return this.name + ' ' + 'is' + ' ' + this.type + ' ' + 'tree in' + ' ' + this.climate

    }
}