"use strict";
const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

const renderCountry = function (data, className = "") {
  const html = `<article class="country ${className}">
//                 <img class="country__img" src="${data.flag}" />
//                 <div class="country__data">
//                   <h3 class="country__name">${data.name}</h3>
//                   <h4 class="country__region">${data.region}</h4>
//                   <p class="country__row"><span>👫</span>${(
      +data.population / 1000000
    ).toFixed(1)} people</p
//                   <p class="country__row"><span>🗣️</span>${data.languages?.[0]?.name || "Unknown"
    }</p>
                  <p class="country__row"><span>💰</span>${data.currencies?.[0]?.name || "Unknown"
    }</p>
//                 </div>
//               </article>`;

  countriesContainer.insertAdjacentHTML("beforeend", html);
  countriesContainer.style.opacity = 1;
};

// const getCountryAndNeighbour = function (country) {
//   // Ajax call country 1
//   const request = new XMLHttpRequest();
//   request.open("GET", `https://restcountries.com/v3.1/name/${country}`);
//   request.send();

//   request.addEventListener("load", function () {
//     const [data] = JSON.parse(this.responseText);
//     // Render data
//     renderCountry(data);
//     // Get neighbour of country(2)
//     const [neighbour] = data.borders?.[0];
//     if (!neighbour) return;

//     const request2 = new XMLHttpRequest();
//     request2.open("GET", `https://restcountries.com/v3.1/alpha/${neighbour}`);
//     request2.send();

//     request2.addEventListener("load", function () {
//       const data2 = JSON.parse(this.responseText);
//       console.log(data2);
//       renderCountry(data2, "neighbour");
//     });
//   });
// };

// // Call the function with the country name
// getCountryAndNeighbour('vietnam');
// setTimeout(() => {
//   console.log('1 seconds passed ');
//   setTimeout(() => {
//     console.log('2 s passed ');
//     setTimeout(() => {
//       console.log('3 s passed ');
//       setTimeout(() => {
//         console.log('4 s passed ');
//       }, 1000)
//     }, 1000)
//   }, 1000)

// }, 1000)
// const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
//   request.send();

// const request =  fetch('https://restcountries.com/v3.1/name/vietnam');
// console.log(request);

// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v3.1/name/${country}`).then(function (response) {
//     console.log(response);
//    return  response.json()
//   }).then(function (data) {
//     console.log(data);
//   })
// }

// const request = fetch("https://restcountries.com/v3.1/name/vietnam");
// console.log(request);

// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(
//       (response) => response.json(),
//       err => alert(err)
//     )
//     .then((data) => {
//       renderCountry(data[0]);

//       renderCountry(data[0]);
//       const neighbour = data[0].borders[0];
//       if (!neighbour) return;
//       return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`)
//         .then(
//           (response) => response.json(),
//           err => alert(err)
//         )
//         .then((data) => renderCountry(data, "neighbour"))
//         .catch(err => console.log(`${err}`))

//       });
// };

// btn.addEventListener("click", function () {
//   getCountryData("vietnam");
// });// const getCountryAndNeighbour = function (country) {
//   // Ajax call country 1
//   const request = new XMLHttpRequest();
//   request.open("GET", `https://restcountries.com/v3.1/name/${country}`);
//   request.send();

//   request.addEventListener("load", function () {
//     const [data] = JSON.parse(this.responseText);
//     // Render data
//     renderCountry(data);
//     // Get neighbour of country(2)
//     const [neighbour] = data.borders?.[0];
//     if (!neighbour) return;

//     const request2 = new XMLHttpRequest();
//     request2.open("GET", `https://restcountries.com/v3.1/alpha/${neighbour}`);
//     request2.send();

//     request2.addEventListener("load", function () {
//       const data2 = JSON.parse(this.responseText);
//       console.log(data2);
//       renderCountry(data2, "neighbour");
//     });
//   });
// };

// // Call the function with the country name
// getCountryAndNeighbour('vietnam');
// setTimeout(() => {
//   console.log('1 seconds passed ');
//   setTimeout(() => {
//     console.log('2 s passed ');
//     setTimeout(() => {
//       console.log('3 s passed ');
//       setTimeout(() => {
//         console.log('4 s passed ');
//       }, 1000)
//     }, 1000)
//   }, 1000)

// }, 1000)
// const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
//   request.send();

// const request =  fetch('https://restcountries.com/v3.1/name/vietnam');
// console.log(request);

// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v3.1/name/${country}`).then(function (response) {
//     console.log(response);
//    return  response.json()
//   }).then(function (data) {
//     console.log(data);
//   })
// }

// const request = fetch("https://restcountries.com/v3.1/name/vietnam");
// console.log(request);

// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(
//       (response) => response.json(),
//       err => alert(err)
//     )
//     .then((data) => {
//       renderCountry(data[0]);

//       renderCountry(data[0]);
//       const neighbour = data[0].borders[0];
//       if (!neighbour) return;
//       return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`)
//         .then(
//           (response) => response.json(),
// //           err => alert(err)
// //         )
// //         .then((data) => renderCountry(data, "neighbour"))
// //         .catch(err => console.log(`${err}`))

// //       });
// // };

// // btn.addEventListener("click", function () {
// //   getCountryData("vietnam");
// // });

// const whereAmI = function (lat, lng) {
//   fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
//     .then((res) => {
//       if (res.ok) throw new Error(`propblem with geocoding ${res.status}`)
//       console.log(res);
//       return res.json();
//     })
//     .then((data) => {
//       console.log(data);
//       console.log(`You are in ${data.city} , ${data.country}`);
//     })
//   return fetch(`https://restcountries.eu/rest/v2/name/${data.country}`)
//     .then(res => {
//       if (!res.ok) throw new Error(`Country not found (${res.status})`);

//       return res.json();
//     })
//     .then(data => renderCountry(data[0]))

//     .catch(err => console.error(`${err.message}`))
// };
// whereAmI(51.50354, -0.12768);
// whereAmI(19.037, 72.873);
// whereAmI(52.508, 13.381);



// coding challenge 2 
const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  })
}
const imgContainer = document.querySelector('.images');
const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const img = document.createElement('img');
    img.src = imgPath;
    img.addEventListener('load', function () {
      imgContainer.append(img);
      resolve(img);
    })
    img.addEventListener('error', function () {
      reject(new Error('image not  found '))
    })
  })
}
// let currentImage;
// createImage('img/img-1.jpg').then(img => {
//   console.log('img 1 load ');
//   return wait(2);
// })
//   .then(img => {
//     currentImage.style.display = 'none';
//     return createImage('img/img-1.jpg');
//   })
//   .then(img => {
//     currentImage = img;
//     console.log('image 2 loaded');
//     return wait(2)
//   })
//   .then(() => {
//     currentImage.style.display = 'none';

//   })
//   .catch(err => console.error(err))


// coding challenge 3 
const loadNPause = async function () {
  try {
    let img = await createImage('img/img-1.jpg');
    console.log('img 1 load ');
    await wait(2);
    img.style.display = 'none';



    img = await createImage('img/img-2.jpg');
    console.log('img 2 load ');
    await wait(2);
    img.style.display = 'none';
  } catch (err) {

  }
}
loadNPause();

const loadAll = async function (imgArr) {
  try {
    const imgs = imgArr.map(async img => await createImage(img));
    const imgEl = await Promise.all(imgs)
    console.log(imgEl);
    imgEl.forEach(img => img.classList.add('parallel'))
  } catch (err) {
    console.log(err);
  }
}
loadAll(['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']);