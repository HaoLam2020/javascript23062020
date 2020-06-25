//Go nodemon buoi1

//khai bao bien
/*
var a = 5
const b = 6
a = 10
console.log(a)
*/
//Kieu du lieu :null,undenfined
var a = null
var b 
console.log(a)
console.log(b)
console.log("hello world")
//Khai  bao Object
const teo = {
    name : "Nguyen Van Teo",
    age : 10
}
var keyname = 'name'
console.log(teo.name)
console.log(teo)
console.log(teo['name']) //truyen key
console.log(teo[keyname])
console.log(teo.address) //xay ra undefined

//Array
const arrayNames = ["Teo",'Ti',"Tun"]
console.log(arrayNames[0])
arrayNames[0] = "Tuan"
console.log(arrayNames[0]) //Khac voi const cho bien

//Mutable vs immutable

//Toan tu
/*
var a = 5
var b = 5
a = a++
console.log(a)  //in ra 5
b = ++b
console.log(b)  //in ra 6
*/
var a = 5
var b = 6
var ketqua = a++ - --b + --a + b-- + ++a - b++ + b-- - b++
//5 - --b + --a + b-- + ++a - b++ + b-- - b++
//5 - 5 + --a + b-- + ++a - b++ + b-- - b++
//5 - 5 + 5 + b-- + ++a - b++ + b-- - b++
//5 - 5 + 5 + 5 + ++a - b++ + b-- - b++
//5 - 5 + 5 + 5 + 6 - b++ + b-- - b++
//5 - 5 + 5 + 5 + 6 - 4 + b-- - b++
//5 - 5 + 5 + 5 + 6 - 4 + 5 - 4
console.log(ketqua)
//do uu tien
//1 : ++,--
//2 : *,/
//3 : +,-

//function
//pham vi truy cap (access modifier) khong co trong javascript
function showname(name)
{
    console.log(name)
    //function neu khong co return hoac chi co lenh return ma khong co gia tri thi se tra ve undefined
}
console.log(showname)
console.log("-------------")
console.log(showname("jimmy")) //se tra ve undefined 

//object method
const teoteo = {
    name : "Nguyen van teo teo",
    age : 10,
    info : function(){
        console.log("Name " + this.name)
        console.log("Age " + this.age)
    }
}
teoteo.info()