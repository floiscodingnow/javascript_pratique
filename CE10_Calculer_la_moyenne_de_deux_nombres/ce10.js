function calculerMoyenne(a, b){
    if (typeof a !== "number" && typeof b !== "number"){
        throw new Error("Put a fucking number here not something else");
    }
    return ((a+b)/2);
}
 
console.log(calculerMoyenne(10, 12));
