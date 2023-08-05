/* 
fixed: per item wood requirements
1. chair --> 3 cfr
2. table --> 10 cfr
3. bed --> 50 cfr
very: quantity

*/
function woodCalculator(chairQuantity, tableQuantity, bedQuantity) {
    const perChairWood = 3;
    const perTableWood = 10;
    const perBeddWood = 50;

    const chairWood = chairQuantity * perChairWood;
    const tableWood = tableQuantity * perTableWood;
    const bedWood = bedQuantity * perBeddWood;

    const totalWood = chairWood + tableWood + bedWood;
    return totalWood;
}
const totalWood = woodCalculator(5, 2, 1);
console.log("total wood required :", totalWood);


