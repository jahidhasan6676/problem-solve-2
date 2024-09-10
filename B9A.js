// ----------------------------------------------------------------


// function calculateMoney(ticketSale){
//     if(ticketSale < 0){
//         return 'invalid number';
//     }
//     let remainingMoney = (ticketSale * 120) - (500 + (50 * 8));
//     return remainingMoney;
// }
// const ticketSale = calculateMoney(-130);

// console.log(ticketSale);

// --------------------------------------------------------

// function checkName(name){
//     let lastLetter = name.slice(-1).toLowerCase();
//     let checkArray = ['a', 'i', 'o', 'u', 'w', 'y', 'e'];
//     let result = false;
//     for(let char of checkArray){
//         if(char === lastLetter){
//             result = true
//         }
        
        
//     }
//     return result ? 'Good Name' : 'Bad Name';
// }

// const name = checkName('rafeE');
// console.log(name);

// --------------------------------------------------------------

// function deleteInvalids(array){
//     if(Array.isArray(array) === false){
//         return 'invalid'
//     }
//     let numberArray = [];
//     for(let arr of array){
//        if(typeof arr === 'number' && isNaN(arr) === false){
//         numberArray.push(arr);
//        }
//     }
//     return numberArray;

// }

// const number = deleteInvalids([1, 2, -3]);
// console.log(number);

// -----------------------------------------------------------------

// function passwordSetup(obj){
//     if(obj.name === undefined || obj.birthYear === undefined || obj.siteName === undefined || obj.birthYear.toString().length !== 4){
//         return 'invalid'
//     }
//     let capital = obj.siteName[0].toUpperCase() + obj.siteName.slice(1);
//     let passwordFunction = capital + '#' + obj.name + '@' + obj.birthYear;
//     return passwordFunction;
// }

// const pass = {name: 'jahid', birthYear : 1993, siteName: 'facebook'};
// const autoPass = passwordSetup(pass);
// console.log(autoPass);

// -------------------------------------------------------------------

// function monthlySavings(arr, livingCost){
//    if(Array.isArray(arr) === false || livingCost === 'number'){
//     return 'invalid'
//    }

//    let totalIncome = 0;
//    for(let payment of arr){
//         if(payment >= 3000){
//             let tax = payment * 0.2;
//             totalIncome = totalIncome + payment - tax;
//         }
//         else{
//             totalIncome = totalIncome + payment;
//         }
//    }
//    let savings = totalIncome - livingCost;
//    if(savings >= 0){
//     return savings;
//    }
//    else{
//     return 'earn more'
//    }
  
// }

// const total = monthlySavings([ 900], 1000);
// console.log(total);

// -------------------------------------------------------------




