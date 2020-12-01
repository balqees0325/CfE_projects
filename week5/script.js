let myList = [['Mackbook Pro 2020', 5],['Hp 320', 3], ['Latest Dell', 1], ['Beverage', 4], ['Cheese', 10], ['cheicken', 7]];
let firstRemove = myList.shift();
let lastRemove = myList.pop();
let replacedArr = myList.splice(2, 0, ['Orange Juice', 17])
let loopArr = myList.map(arr=> arr.length
);
console.log(firstRemove);
console.log(lastRemove);
console.log(replacedArr);
console.log(loopArr);