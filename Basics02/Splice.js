
// syntx

// splice(start)
// splice(start, deleteCount)
// splice(start, deleteCount, item1)
// splice(start, deleteCount, item1, item2)
// splice(start, deleteCount, item1, item2, /* …, */ itemN)



//add elements in array using splice 

// he adds Element before the position we mentions like we mwthoned  splice(2,0,'x',"y")
// he added before 2 index postions



let arr=['a','b','c','d'];

arr.splice(2,0,'x',"y")
console.log(arr)
// Output:- [ 'a', 'b', 'x', 'y', 'c', 'd' ]



//Deleting  elements in array using splice 
// he deleteing vaules form starting vaule to ending vaules 


arr.splice(0,1);
 console.log(arr)
 // Output:-[ 'b', 'x', 'y', 'c', 'd' ]

//Replaceing  elements in array using splice 
// he first delte the Element and then add the Element that postions

 arr.splice(2,1,"O")
 console.log(arr)

 // Output:- [ 'b', 'x', 'O', 'c', 'd' ]