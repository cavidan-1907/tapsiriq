// // let kreditCalc=(emek,mebleg,muddet)=>{
// //     let faiz;
// //     if (muddet>0 && muddet <= 12) {
// //         faiz = 0.13;
// //     } else if (muddet>12 && muddet <= 24) {
// //         faiz = 0.15;
// //     } else if (muddet>24 && muddet <= 36) {
// //         faiz = 0.17;
// //     }
// //     let ayliqodenis = (mebleg + mebleg * faiz) / muddet;
// //     if (muddet>36 || mebleg>emek*10  || ayliqodenis>(emek*45)/100) {
// //         return `size bu sertlerde kredit dusmur`
// //     }
// //     else if(muddet>0 && muddet<=12){
// //         return `size ${mebleg} azn mebleg 13 faizle ${muddet} ayliq ${ayliqodenis} odenisle verilir`
// //     }
// //     else if(muddet>12 && muddet<=24){
// //         return `size ${mebleg} azn mebleg 15 faizle ${muddet} ayliq ${ayliqodenis} odenisle verilir`
// //     }
// //     else if(muddet>24 && muddet<= 36){
// //         return `size ${mebleg} azn mebleg 17 faizle ${muddet} ayliq ${ayliqodenis} odenisle verilir`
// //     }
// // }
// // console.log(kreditCalc(2000,6000,15));

// // let Emilya="gihfshi*njfrg*njefjbi*jihij";
// // let Cavidan=Emilya.split(" ");
// // console.log(Cavidan);

// let persons=[
//     {
//         name:"Cavidan",
//         age:20,
//         gender:"male"
//     },
//     {
//         name:"Sadiq",
//         age:21,
//         gender:"male"
//     },
//     {
//         name:"Asmar",
//         age:19,
//         gender:"female"
//     },
//     {
//         name:"Khatica",
//         age:19,
//         gender:"female"
//     },
//     {
//         name:"Amaliya",
//         age:20,
//         gender:"female"
//     },
//     {
//         name:"Eli",
//         age:20,
//         gender:"male"
//     },
//     {
//         name:"Perviz",
//         age:20,
//         gender:"male"
//     },
// ]
// let objFunc=function (obj) {
//     if (obj.age>=18) {
//         return `${obj.name} konserte gede biler`
//     } else {
//         return `${obj.name} konserte gede bilmez`
//     }
// }

// persons.forEach(person => {
//     console.log(objFunc(person));
// });
// // let numFunc=function (obj) {

// //    return obj.name
// // }
// // console.log(numFunc(persons));

// // let nameFunc=function (obj) {

// //     return obj.name
// //  }
// // persons.forEach(person=>{
// //     console.log(nameFunc(person));
// // })
// // let averageFunc=function(objArr){
// //     let totalAge=0;
// //     let femaleCount=0;
// //    objArr.forEach(obj => {
// //     if (obj.gender=="female") {
// //         totalAge += obj.age;
// //         femaleCount++;
        
// //     }
    
// //    });
// //    if (femaleCount==0) {
// //     return "Bu siyahida qadin yoxdur"
    
// //    }
// //    return totalAge/femaleCount
// // }
// // console.log(averageFunc(persons));

// // let ageNameFunc = function (obj) {
// //     if (obj.age >= 20) {
// //         return `${obj.name}`;
// //     } else {
// //         return `${obj.name} 20 yasdan boyuk deyil`;
// //     }
// // }

// // persons.forEach(person => {
// //     console.log(ageNameFunc(person));
// // });

// let startA = function(obj) {
//     if (obj.name.startsWith("A")) {
//         return obj.name;
//     } else {
//         return `${obj.name} adi A ile baslamir`;
//     }
// }

// persons.forEach(person => {
//     console.log(startA(person));
// });

// // let maleFunc = function(obj) {
// //     if (obj.gender=="male") {
// //         return obj.name;
// //     } else {
// //         return `${obj.name} oglan deyil`;
// //     }
// // }


// // let maleFunc = function(obj) {
// //     if (obj.name=="Perviz") {
// //         return `Ama ${obj.name} yaxsi oglan deyil`;
// //     }
// //     else {
// //         return `bu sert ${obj.name}e aid deyil`;
// //     }
// // }

// // persons.forEach(person => {
// //     console.log(maleFunc(person));
// // });



// function A(persons, name) {
//     const person = persons.find(person => person.name.toLowerCase() === name.toLowerCase());
//     if (!person) {
//         return "Bilet al.";
//         return;
//     }

//     if (person.age < 18) {
//         return `${person.name} böyəl gəl.`;
//     } else {
//         return `${person.name} buyur.`;
//     }
// }

// let persons = [
//     {
//     name: "Mike",
//     age: 12,
//     gender: "male"
//     },{
//     name: "Madeline",
//     age: 80,
//     gender: "female"
//     },{
//     name: "Cheryl",
//     age: 22,
//     gender: "female"
//     },{
//     name: "Sam",
//     age: 30,
//     gender: "male"
//     },{
//     name: "Suzy",
//     age: 4,
//     gender: "female"
//     }
//     ];
    
// console.log(A(persons, "mike"));
// console.log(A(persons, "cheryl")); 
// console.log(A(persons, "Ali"));
let arr=[1,2,3,4,5];
console.log(arr.toSpliced(2,0,45));

