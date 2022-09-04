


const array2 = ["Patika","219","Akbank","React","Bootcamp"]
Array.prototype.includesCi= function(checkvalue)
{
   
       return this.some((item) => item.toUpperCase() === checkvalue.toUpperCase())
    
};

console.log(array2.includesCi("patika")===true ? "Beklendiği gibi" : "Beklendiği gibi değil")
console.log(array2.includesCi("melisa")===true ? "Beklendiği gibi" : "Beklendiği gibi değil")
console.log(array2.includesCi("reACt")===true ? "Beklendiği gibi" : "Beklendiği gibi değil")