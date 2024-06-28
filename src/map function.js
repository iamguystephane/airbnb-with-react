const names = ["stephane", "rostand", "billy"]

let capitalize = names.map((name)=>{
    return name[0].toUpperCase() + name.slice(1)
})

const numbers = [1, 2, 3, 4, 5]

let double = numbers.map((num)=>{
    return num * 2;
})

console.log(double)