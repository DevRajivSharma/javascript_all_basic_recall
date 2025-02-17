const factof = 5
let array = [];
for (let i = 1; i <= factof; i++) {
    array.push(i);
}
console.log(array.reduce((acc,num)=>{
    return acc * num
},1))
