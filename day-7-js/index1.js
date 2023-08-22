array

var array = ["yogesh", 'karan', `anuj`];

Object

var object = {key : "value"}
JSON = {key : "value"}

var emaina = {name : "yogesh", age : 34, days : ["monday", {myday : "tuesday"}], hii : "everyone", noofdays : true, mydata : {surname : "sakluri", array : [1, 2, 3, 4, 5, 6]} }

console.log(emaina)
console.log(emaina.name)
console.log(emaina.age)
console.log(emaina.days)
console.log(emaina.days[0])
console.log(emaina.days[1])
console.log(emaina.days[1].myday)
console.log(emaina.hii)
console.log(emaina.noofdays)
console.log(emaina.mydata)
console.log(emaina.mydata.surname)
console.log(emaina.mydata.array)
console.log(emaina.mydata.array[emaina.mydata.array.length-1])

const array = ["yogesh","karan"];

array.push("anuj")

console.log(array)