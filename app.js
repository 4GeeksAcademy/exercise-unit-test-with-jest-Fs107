const sum =(a,b) =>{
    return a+b
}

let oneEuroIs ={
    "JPY":156.5, //japan yen
    "USD":1.07, //us dollar
    "GBP":0.87, //brittish pound
}

const fromDollarToYen =(num1)=>{
    let toEuro= num1 / oneEuroIs.USD;
    return toEuro * oneEuroIs.JPY;
}
const fromEuroToDollar=(num1) =>{
    return num1 * oneEuroIs.USD;
}
const fromYenToPound=(num1) =>{
    let toEuro = num1 / oneEuroIs.JPY;
    return toEuro * oneEuroIs.GBP;
}
module.exports = {sum, fromDollarToYen, fromEuroToDollar, fromYenToPound};