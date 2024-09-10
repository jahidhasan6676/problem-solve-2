// session problem solve ---------------------->

// function creatGmail(info){
//     if(typeof info !== 'object'){
//         return 'please provide a object';
//     }
//     const creat = info.name + '#' + info.address + '.gamil.com';
//     return creat;
// }

// const person = {
//     name: true,
//     address: 'rajshahi',
    
// }

// const gmail = creatGmail(person);
// console.log(gmail)

// // ---------------------------------------------->

// function savingsCount(income){
//     if(typeof income !== 'number'){
//         return 'invalid number';
//     }
//     const houseRent = 5000;
//     const foodCost = 3000;
//     const personalExpense = 2000;
//     const totalExpense = houseRent + foodCost + personalExpense;

//     const savings = income - totalExpense;
//     return savings;
// }
// const monthlySalary = savingsCount(15000);
// console.log(monthlySalary);

// ------------------------------------------------->

// function arrayCount(arrayCode){
//     if(Array.isArray(arrayCode) === false){
//         return 'provide a array'
//     }
//     let count = 0;
//     for(let str of arrayCode){
//         if(typeof str === 'boolean'){
//             count++;
//         }
        
//     }
//     return count;
// }

// const array = [true, 56, 'go', false, 667, ];
// // const array = ('jahid', 'hasan', 'kamrul');
// const result = arrayCount(array);
// console.log(result);

// ------------------------------------------------>

// function rikshawVaraCount(peoples){
//     if(typeof peoples !== 'number'){
//         return 'invalid number';
//     }
//     const bus = 50;
//     const micro = 15;
//     const rikshawVara = 20;

//     const busPeople = peoples % bus;
//     const microPeople = busPeople % micro;
//     const rikshawVaraTotal = microPeople * rikshawVara;
//     return rikshawVaraTotal;
// }

// const result = rikshawVaraCount(434);
// console.log(result);

// ----------------------------------------------------->

// const person1 = {
//     name: 'jahid hasan',
//     honours: 40,
//     hsc: 30,
//     isFFfamily: true
// }

// const person2 = {
//     name: 'kamrul hasan',
//     honours: 45,
//     hsc: 30,
//     isFFfamily: false
// }

// function jobInterview(person){
//     if(typeof person !== 'object'){
//         return 'please provide a object';

//     }

    
//     let marksCount = person.honours + person.hsc;
    
//     if(person.isFFfamily === true){
//         marksCount = marksCount + (marksCount * 0.2);
//     }

//     if(person.isFFfamily === true && marksCount >= 80){
//         return 'tmar job confirm vatija';
//     }
//     else if(person.isFFfamily === true && marksCount < 80){
//         return 'bad luck vatija';
//     }
//     else if(person.isFFfamily === false && marksCount >= 80){
//         return 'konorokom job paili sala';
//     }
//     else if(person.isFFfamily === false && marksCount < 80){
//         return 'sala vag ekhan theke';
//     }
    
//     // if(marksCount >= 80){
//     //     return 'you got a job';
//     // }
//     // else{
//     //     return 'bad luck'
//     // }

    
// }

// const men = jobInterview(person1);
// console.log(men)

// ---------------------------------------------------->