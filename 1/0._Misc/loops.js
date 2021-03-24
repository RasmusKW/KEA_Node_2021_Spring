const fruits = ["apples", "banana", "blueberries"];

const copiedFruits = fruits.map((fruit, index) => {
    return {id: index+1, fruit, delicious: "yes"}
})

console.log(copiedFruits);