const mynums=[1,2,3,4]

// const total= mynums.reduce(function(acc,currval){
//     console.log(`acc:${acc}  and Curr : ${currval}`);
//     return acc+currval
// },0)

// console.log(total)

const mytotal =mynums.reduce((acc,curr)=> acc+curr,0)

console.log(mytotal)


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);