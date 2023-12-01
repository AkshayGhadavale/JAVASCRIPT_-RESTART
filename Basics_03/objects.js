
const mySym = Symbol("key1")    

let jsuser = {
    name:"Akshay",
    [mySym]: "mykey1",
    "full name" :"Akshay",
    Age:23,
    location:"Dapoli",
    email:"akshayGhadavale@microsoft.com"
}

console.log(jsuser.name); //its normal method of call object or acces data 
//but sometime  object vaule in like "FULL name":"aG" so you can acces it by above  method so we use bellow method
console.log(jsuser["full name"]);

// how to get symbol in object and how to use it (interview Quetions )
console.log(jsuser[mySym])

jsuser.Age = 24;
console.log(jsuser.Age)

jsuser.greeting = function () {
console.log(`hiii ${this.name}`);
}

console.log(jsuser.greeting()) 