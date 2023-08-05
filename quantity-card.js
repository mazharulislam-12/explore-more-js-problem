const shopingCard = [
    {name: 'shart', price: 1700, quantity: 6 },
    {name: 'shoe', price: 1200, quantity: 4 },
    {name: 'pant', price: 2000, quantity: 3 },
    {name: 'balt', price: 300, quantity: 2  },
];
function totalCost(products) {
    let sum = 0;
    for(let i = 0; i < products.length; i++){
        const product = products[i];
        const productTotal = product.price * product.quantity;
        sum = sum + productTotal;
    }
    return sum;
}
const expense = totalCost(shopingCard);
console.log(expense);