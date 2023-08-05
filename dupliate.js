// 01-------------------
const names = ['Theodore', 'Benjamin', 'Lucas', 'Henry', 'James' 'Benjamin', 'Lucas', 'Benjamin'];
function removeDuplicate(names) {
    const unique = [];
    for(let i = 0; i < names.length; i++){
        const name = names[i];
        if (unique.includes(name) === false) {
            uniceName.push(name);
        }
      }
      return unique;
}
const uniceName = removeDuplicate(names);
console.log(uniceName);




// 02---------------

let names = ['Theodore', 'Benjamin', 'Lucas', 'Henry', 'James', 'Lucas', 'Benjamin'];
function removeDuplicate(names) {
    let unique = [];
    for(let i = 0; i < names.length; i++){
        let name = names[i];
        if (unique.includes(name) === false) {
            unique.push(name);
        }
    }
    return unique;
}
let uniceName = removeDuplicate(names);
console.log(uniceName);