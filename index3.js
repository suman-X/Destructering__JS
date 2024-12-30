
// this one is best code 
let a = {
    name:'suman',
    age:21,
    ht:172
}
let b = {
    name2:'biltu',
    age:20,
    ht:177
}

let obj = {...a,b};
b.name2='dip'
console.log(b)
console.log(obj);


let arr = [10,20,30];
let abc = {...arr};
console.log(abc);

function sum(s1,s2,s3){
    return s1 + s2 + s3;
}

let xyz = sum(...arr)
console.log(xyz);