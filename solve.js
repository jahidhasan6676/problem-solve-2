// const jahid = 90;
// const hasan = 80;

// if(jahid > hasan){
//     console.log('jahid will get the strawyberry');
// }
// else{
//     console.log('hasan will get the strawberry')
// }

// function getMax(num1, num2){
//     if(num1 > num2){
//         return num1;
//     }
//     else{
//         return num2;
//     }
// }

// const max1 = getMax(50, 70);
// const max2 = getMax(90, 70);
// console.log('max of two is:', (max1, max2))

// const jim = 100;
// const tim = 80;
// const kim = 90;

// if(jim > tim && jim > kim){
//     console.log('jim will get the best mark');
// }
// else if (tim > jim && tim > kim){
//     console.log('tim will get the best mark');
// }
// else{
//     console.log('kim will get the best mark');
// }

// function getMax(num1, num2, num3){
//    if(num1 > num2 && num1 > num3){
//     return num1;
//    }
//    else if(num2 > num1 && num2 > num3){
//     return num2;
//    }
//    else{
//     return num3;
//    }
// }

// const number = getMax(50, 90, 80);
// console.log('max of number is:', number)

// const max = Math.max(2, 34, 45, 54, 6576, 67, 8, 78);
// console.log(max)

// ----------------------------------------------------------

// const heights = [23, 34, 54, 66, 89, 28, 90];

// function getMax(numbers){
//     let max = numbers[0];
//     for(const number of numbers){
//         if(number > max){
//             max = number;

//         }
          
//     }
//     return max;

// }
// const max = getMax(heights);
// console.log('max of number is:', max)



// function getMin(numbers){
//     let min = numbers[0];
//     for(const number of numbers){
//         if(number < min){
//             min = number;
//         }
//     }
//     return min;
// }

// const heights = [34, 45, 56, 67, 89, 12, 54, 59, ];
// const min = getMin(heights);
// console.log('min number is:', min)

// chair : 3 cft; table : 10 cft; bed : 50 cft; amr 3 ta chair , 4 ta able and 5 ta bed korte koto cft wood lagbe?

// function woodQuantity(chairQuantity, tableQuantity, bedQuantity){
//     const perChairWood = 3;
//     const perTableWood = 10;
//     const perBedWood = 50;

//     const chairTotalWood = chairQuantity * perChairWood;
//     const tableTotalWood = tableQuantity * perTableWood;
//     const bedTotalWood = bedQuantity * perBedWood;
//     const totalWood = chairTotalWood + tableTotalWood + bedTotalWood;
//     return totalWood;


// }

// const totalWood = woodQuantity(3, 4, 5);
// console.log('total wood is:', totalWood)

/**
 * shirt price ---> 500 tk;
 * pant price ---> 600 tk;
 * shoe price ---> 800tk;
 * t-shirt price --> 200tk;
 * punjabi price ---> 1000tk
 * 
 * two shirt, one pant, one even shoe, two t-shirt, one punjabi
 */

// Solution ------->

// function marketQuantity(shirtQuantity, pantQuantity, shoeQuantity, tShirtQuantity, punjabiQuantity){

//     const perShirtPrice = 500;
//     const perPantPrice = 600;
//     const perShoePrice = 800;
//     const perTShirtPrice = 200;
//     const perPunjabiPrice = 1000;

//     const totalShirtPrice = shirtQuantity * perShirtPrice;
//     const totalPantPrice = pantQuantity * perPantPrice;
//     const totalShoePrice = shoeQuantity * perShoePrice;
//     const totalTShirtPrice = tShirtQuantity * perTShirtPrice;
//     const totalPunjabiPrice = punjabiQuantity * perPunjabiPrice;

//     const totalPrice = totalShirtPrice + totalPantPrice + totalShoePrice + totalTShirtPrice + totalPunjabiPrice;

//     return totalPrice;
// }

// const allPrice = marketQuantity(2, 1, 1, 2, 1);
// console.log(allPrice);


// ----------------------------------------------

// const mobiles = [
//     {name: 'Samsung', price: 20000, camera: '12mp', battery: '5000mpr'},
//     {name: 'Oppo', price: 50000, camera: '12mp', battery: '5000mpr'},
//     {name: 'Iphone', price: 10000, camera: '12mp', battery: '5000mpr'},
//     {name: 'Walton', price: 100000, camera: '12mp', battery: '5000mpr'},
//     {name: 'Xoami', price: 30000, camera: '12mp', battery: '5000mpr'}
// ]

// function minMobilePrice(mobiles){
//     let small = mobiles[0];
// for(const mobile of mobiles){
//     if(mobile.price < small.price){
//         small = mobile;
//     }
    
// }
// return small;


// }

// const min = minMobilePrice(mobiles);
// console.log('mobile min price is:', min)

// --------------------------------------------

// const products = [
//     {name: 'shampoo', price : 300},
//     {name: 'chiruni', price : 100},
//     {name: 'shirt', price : 500},
//     {name: 'punjabi', price : 800}
// ]

// function shoppingChart(products){
//     let total = 0;
//     for(const product of products){
//         total = total + product.price;
//     }
//     return total;
// }

// const totalPrice = shoppingChart(products);
// console.log(totalPrice);


// const products = [
//         {name: 'shampoo', price : 300, quantity: 1 },
//         {name: 'chiruni', price : 100, quantity: 2 },
//         {name: 'shirt', price : 500, quantity: 3 },
//         {name: 'punjabi', price : 800, quantity: 2 }
//     ]

//     function cartTotal(products){
//         let total = 0;
//         for(const product of products){
//             // const thisItemPrice = product.price * product.quantity;
//             total = total + product.price * product.quantity ;

//         }
//         return total;
//     }

//     const totalSum = cartTotal(products);
//     console.log(totalSum);
// -----------------------------------------------

// function discountPrice(quantity){
//     if(quantity <= 100){
//         const total = quantity * 100;
//         return total;
//     }
//     else if(quantity <= 200){
//         const total = quantity * 90;
//         return total;
//     }
//     else{
//         const total = quantity * 70;
//         return total;
//     }
// }
// const total = discountPrice(210);
// console.log(total)

// function discountPrice(quantity){
//     const first100Price = 100;
//     const second100Price = 90;
//     const above200Price = 70;
//     if(quantity <= 100){
//         const total = quantity * first100Price;
//         return total;
//     }
//     else if(quantity <= 200){
//         const first100Total = 100 * first100Price;
//         const remainingQuantity = quantity - 100;
//         const remainingTotal = remainingQuantity * second100Price;
//         const total = first100Total + remainingTotal;
//         return total;
//     }
//     else{
//         const first100Total = 100 * first100Price;
//         const second100Total = 100 * second100Price;
//         const remainingQuantity = quantity - 200;
//         const remainingTotal = remainingQuantity * above200Price;
//         const total = first100Total + second100Total + remainingTotal;
//         return total;

//     }
// }

// const price = discountPrice(250);
// console.log(price);

// ----------------------------------------------

// function add(num1, num2){
//     return num1 + num2;
// }

// function subtract(num1, num2){
//     return num1 - num2;
// }

// function multiply(num1, num2){
//     return num1 * num2;
// }

// function divide(num1, num2){
//     return num1 / num2;
// }


// function calculation(a, b, operation){
//     if(operation === 'add'){
//         const result = add(a, b);
//         return result;
//     }
//     else if(operation === 'subtract'){
//         return add(a, b);
//     }
//     else if(operation === 'multiply'){
//         return multiply(a, b);
//     }
//     else if(operation === 'divide'){
//         return divide(a, b)
//     }
//     else{
//         return "only 'add', 'subtract', 'multiply', 'divide', operation is allowed:";
//     }
// }
// const result = calculation(10, 12, 'divide');
// console.log(result);

// --------------------------------------
// const heights = [167, 190, 120, 165, 137];

// function getMin(numbers){
//     let total = numbers[0];
//    for(const number of numbers){
//     if(number <= total){
//         total = number;
//     }
//    }
//    return total;
// }
// const min = getMin(heights);
// console.log('min number is:',min);

// -------------------------------------

// const phones = [
//     { model: "PhoneA", brand: "Iphone", price: 95000 },
//     { model: "PhoneB", brand: "Samsung", price: 40000 },
//     { model: "PhoneC", brand: "Oppo", price: 26000 },
//     { model: "PhoneD", brand: "Nokia", price: 35000 },
//     { model: "PhoneE", brand: "Iphone", price: 105000 },
//     { model: "PhoneF", brand: "HTC", price: 48000 },
// ];

// function averagePrice(phones){
//     let sum = 0;
//     for(const phone of phones){
        
//         sum = sum + phone.price;
//          total = sum / 6;
//     }
//     return total;
// }
// const totalAveragePrice = averagePrice(phones);
// console.log('average number is:', totalAveragePrice);

// ---------------------------------------------------------

// const employees = [
//     { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
//     { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
//     { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
//     { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
// ];

// function presentMonthSalary(employees){
//     // shahin ---->

//       const shahinStartingSalary = 20000;
//       const shahinExperience = 5;
//       const shahinYearlyIncrement = 5000;

//       const shahinPresentMonthlySalary = shahinStartingSalary + shahinYearlyIncrement * shahinExperience;
//     //   return shahinPresentMonthlySalary;

//     //   shihab

//     const shihabStartingSalary = 15000;
//       const shihabExperience = 3;
//       const shihabYearlyIncrement = 7000;

//       const shihabPresentMonthlySalary = shihabStartingSalary + shihabYearlyIncrement * shihabExperience;
//     //   return shihabPresentMonthlySalary;

//     //   shikot

//     const shikotStartingSalary = 30000;
//       const shikotExperience = 9;
//       const shikotYearlyIncrement = 1000;

//       const shikotPresentMonthlySalary = shikotStartingSalary + shikotYearlyIncrement * shikotExperience;
//     //   return shikotPresentMonthlySalary;

//     //   shohel

//     const shohelStartingSalary = 15000;
//       const shohelExperience = 3;
//       const shohelYearlyIncrement = 7000;

//       const shohelPresentMonthlySalary = shohelStartingSalary + shohelYearlyIncrement * shohelExperience;
//     //   return shohelPresentMonthlySalary;

//     const currentTotalSalary = shahinPresentMonthlySalary + shahinPresentMonthlySalary + shikotPresentMonthlySalary + shohelPresentMonthlySalary;
//     return currentTotalSalary;
//     // let sum = 0;
//     // for(const salary of employees ){
//     //     sum = sum + salary;
//     // }
//     // return sum;
    




// }

// const totalSalary = presentMonthSalary(employees);
// console.log(totalSalary)


// const heights = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];

// function smallName(names){
    
// }
// const name = smallName(heights);
// console.log(name);

// function employeeTotalSalary(employees){
//     let totalMonthlySalary = 0;
//     for(let employee of employees){
//         let monthlySalary = employee.starting + employee.increment * employee.experience;
//         totalMonthlySalary = totalMonthlySalary + monthlySalary;
//     }
//     return totalMonthlySalary;
// }


// const employees = [
//         { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
//         { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
//         { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
//         { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
//     ];

//     const totalSalary = employeeTotalSalary(employees);
//     console.log(totalSalary);
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




