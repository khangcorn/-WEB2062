'use strict';
const retaurant = {
    name : 'Bun Cha Ha Noi ( Ha Noi Rice Noodle )',
    location : "249 / 42 Hoang Van Thu, Hoang Mai district, Ha Noi",
    categories : ['Bì', 'Viên','Sweet','Bitter' ,'Spicy'],
    starterMenu : ['Garlic' , 'Bread', 'Capresse', 'Bruschetta'],
    mainMenu  : ['Pho', 'Bun beef Hue'],
     openingHours : {
        thu : {
            open: 12,
            close : 22,
        },
        fri : {
            open: 11,
            close : 23,
        },
        sat : {
            open: 10,
            close : 24
        }
     },
    oder : function (starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex] , this.mainMenu[mainIndex]]
    },

    oderDelivery: function name({
        starterIndex = 1,
        mainIndex = 0, 
        time = '20.00', 
        address}
        ) {
        console.log(
        `Order received? ! ${this.starterMenu[starterIndex] } 
        and ${this.mainMenu[mainIndex]} 
        will be delivered to ${address} at ${time} `);
    }
};



const arr = [7,8,9];

const badNewArr = [1,2,arr[0], arr[1], arr[2]] ;
console.log(badNewArr);
const newArr = [1, 2, ...arr ];
console.log(newArr);
console.log(newArr);

console.log(...retaurant.mainMenu,'Noodle');

const mainMenuCopy = [...retaurant.mainMenu];
const menu = [...retaurant.starterMenu,...retaurant.mainMenu];
console.log(menu);

// Interable:  array , strings , map, sets Not the object 
const str = 'jonas';
const letter = [...str,'','s'];
console.log(letter);

// retaurant.oderDelivery({
//     time: '23',
// address: "249 / 42 Hoang Van Thu, Hoang Mai district, Ha Noi ",
// mainIndex: 2,
// starterIndex: 2,

// });

// retaurant.oderDelivery(){
//     address: "249 / 42 Hoang Van Thu, Hoang Mai district, Ha Noi ",
// starterIndex : 1;
// }
//  const {name, openingHours, categories} = retaurant;
//  console.log(name, openingHours,categories);

//  const { name : retaurantName , openingHours: hours , categories : tags} = retaurant ;
//  console.log(retaurantName , hours, tags);

// Default values 
//  const { menu  = [],starterMenu: starters = [] } 
//  = retaurant;
//  console.log(menu, starters);
 // Mutating values 

//  let a = 111;
//  let b  = 999;
//  const obj = {a: 200, b : 300, c: 300};
//  ({ a, b} = obj);
//  console.log(a,b);

//  // nested object 

//  const {fri: { open:o , close:  c  },
// } = openingHours;
//  console.log(o , c );
// const arr = [2,3,4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];
// const d = arr[3];

// const [x,y,z]  = arr;
// console.log(x,y,z);
// console.log(arr);
// let [main,secondary] = retaurant.categories;
// console.log(main,secondary);

// // switching value 
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main,secondary);

// [main , secondary ] = [secondary,main];
// console.log(main, secondary);

// const [starter , mainCourse ]= retaurant.oder(2,0);
// console.log(starter,mainCourse);


// // nest destructed
// const nested = [2,3, [5,6]];
// // const [i, , j] = nested;
// // console.log(i,j);
// const [i, ,[j,k]] = nested;
// console.log(i,j,k);

// const [p = 1, q = 1, r = 1] = [8];
// console.log(p,q, r);




