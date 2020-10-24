function calc(a, b){
    return a + b;
}
console.log(calc(5, 7));


console.log(returnNum());
function returnNum(){ // создается до прохода js 
    let num = 50;
    
    return num;
}

const returnNumFunc = function returnNum(){ // создается после прохода js 
    let num = 50;
    
    return num;
}


const calcFunc = (a, b) => {
    const a = 5;
    const b = 5;
    console.log(a + b)
}; // нельзя вызвать 

