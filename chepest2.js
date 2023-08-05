const phones = [
    {name: 'Sumsung', camara: 12, stroge: '6gb', price: 63100, color: 'silver'},
    {name: 'Walton', camara: 10, stroge: '32gb', price: 100000, color: 'black'},
    {name: 'Iphone', camara: 52, stroge: '120gb', price: 9000, color: 'golden'},
    {name: 'Nothing', camara: 12, stroge: '96gb', price: 2122, color: 'silver'},
    {name: 'Oppp', camara: 63, stroge: '56gb', price: 845, color: 'orage'},
    {name: 'Radmi', camara: 8, stroge: '100gb', price: 45121, color: 'blue'},
    {name: 'Vivo', camara: 18, stroge: '120gb', price: 5545, color: 'black'},
    {name: 'Techno', camara: 23, stroge: '64gb', price: 55154, color: 'Adyen'}
];

function cheapestPhone(phones) {    
    let chepest = phones[0];
    for(let i = 0; i < phones.length; i++){
        const phone = phones[i];
        if (phone.stroge < chepest.stroge) {
            chepest = phone;
        }
    }
    return chepest;
}
const mySelection = cheapestPhone(phones)
console.log(mySelection);