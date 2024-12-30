let arr = [1,2,3,5,70,48,85,55];
let [a, , ,d,...rest]=arr;
console.log(a,d,rest);


let newArr = ["suman",10,54,"biltu",78,"som"];
const flt = newArr.filter((value)=>{
       return typeof(value)==='string';
    
    })

let result = flt;
console.log(result);


