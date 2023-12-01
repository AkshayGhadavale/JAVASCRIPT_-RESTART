// const penuser=new Object();
const penuser={}

penuser.name="akshay";
penuser.email="ag@gmail.com"

console.log(penuser)

const reguser={
    email:"ak@google.com",
    fullname:{
        fname:"Akshay",
        lname:"ghadavale"
    }


}

console.log(reguser)
console.log(reguser.fullname.fname);
console.log(reguser.fullname?.fname);  //?  use for check if else if vaule found or not


const  obj1={1:"a",2:"b"}
const  obj2={3:"c",4:"d"}

// to join two object methods

obj3=Object.assign(obj1,obj2);  //if they have same key vaules it getsecinde object vaules

obj4={...obj1, ...obj2}

console.log(obj3)
console.log(obj4)

// array in object

const arr=[{name:"a",email:"b"}
,{name:"a",do:"b"}]

console.log(arr[1].name)//to access object from array

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));
