

function includesCi(checkvalue)
{
    const array2 = ["Patika","219","Akbank","React","Bootcamp"]
    const array3 = array2.filter(function(c){
   
       return c.toUpperCase() === checkvalue.toUpperCase()
    })

    return array3.length > 0
}

console.log(includesCi("patika")===true ? "Beklendiği gibi" : "Beklendiği gibi değil")
console.log(includesCi("melisa")===true ? "Beklendiği gibi" : "Beklendiği gibi değil")
console.log(includesCi("reACt")===true ? "Beklendiği gibi" : "Beklendiği gibi değil")
