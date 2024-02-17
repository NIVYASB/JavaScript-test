//[id , brand , model , type , pricePerDay, available]

let carBooking = [
    [1, 'Toyota', 'Corolla', 'Sedan', 50, 10],
    [2, 'Honda', 'Civic', 'Sedan', 55, 8],
    [3, 'Ford', 'Mustang', 'Sports Car', 80, 5],
    [4, 'Jeep', 'Wrangler', 'SUV', 70, 7],
    [5, 'Nissan', 'Altima', 'Sedan', 45, 12]
  ];

//1)print all car brands

Brands = carBooking.map(car => car[1]);
console.log(" All Car Brands:", Brands.length > 0 ? Brands : "No car brands available");
//products.forEach(item=>{console.log(item[1]);})
console.log('---------------------------------');
//2)print total number of cars available
let totalAvailableCars = carBooking.reduce((total, car) => total + car[5], 0);
  console.log(" Total Number of Cars Available:", totalAvailableCars > 0 ? totalAvailableCars : "No cars available");
  console.log('------------------------------');

//3)print Sedan cars details
let sedanCars = carBooking.filter(car => car[3] == 'Sedan');


  console.log(" Sedan Cars Details:", sedanCars.length > 0 ? sedanCars : "No Sedan cars available");
  console.log('-------------------------------');

//4)print car with price per day>60
let expensiveCars = carBooking.filter(car => car[4] > 60);
console.log(" Cars with Price Per Day > 60:", expensiveCars.length > 0 ? expensiveCars : "No cars with price > 60");
console.log('----------------------------------------');


//5)print details of 'jeep wrangler'
  let jeepWranglerDetails = carBooking.find(car => car[1] == 'Jeep' && car[2] == 'Wrangler');
  console.log(" Details of 'Jeep Wrangler':", jeepWranglerDetails ? jeepWranglerDetails : "Car not found");
  console.log('------------------------------------');
//6)sort cars based on the decending order of the price per day
  let Descending = carBooking.sort((a, b) => b[4] - a[4]);
  console.log(" Cars Sorted by Price Descending:", Descending.length > 0 ? Descending : "No cars available");
  console.log('-----------------------------------------------');
//7)sort cars based on asending order of available cars
let Ascending = carBooking.sort((a, b) => a[5] - b[5]);
console.log(" Cars Sorted by Availability Ascending:", Ascending.length > 0 ? Ascending : "No cars available");
console.log('-----------------------------------------');
//8)find the car  with the most available cars

let mostAvailableCar = carBooking.reduce((maxCar, car) => (car[5] > maxCar[5] ? car : maxCar));
console.log("Car with the Most Available Cars:", mostAvailableCar ? mostAvailableCar : "No cars available");
console.log('-------------------------------------');
//9)Calculate the revenue if all cars are rented for a day
let totalRevenue = carBooking.reduce((revenue, car) => revenue + car[4] * car[5], 0);
console.log("Total Revenue if All Cars are Rented for a Day:", totalRevenue > 0 ? totalRevenue : "No revenue generated");
console.log('---------------------------------------');
//10)count the number of Sedan cars
let numOfSedanCars = carBooking.filter(car => car[3] === 'Sedan').length;
console.log(" Number of Sedan Cars:", numOfSedanCars > 0 ? numOfSedanCars : "No Sedan cars available");

//12)print all unique car brands
let uniqueCarBrands = [];
carBooking.forEach(car => {
    if (!uniqueCarBrands.includes(car[1])) {
        uniqueCarBrands.push(car[1]);
    }
});

console.log(" Unique Car Brands:", uniqueCarBrands.length > 0 ? uniqueCarBrands : "No unique car brands");
 
//13)find the total number of available cars for all types


let AllTypes = carBooking.reduce((total, car) => total + car[5], 0);
console.log("Total Number of Available Cars for All Types:", AllTypes > 0 ? AllTypes : "No cars available");

//14)find the cars with least availability
 
  
  let LeastAvailability = carBooking.filter(car => car[5] === Math.min(...carBooking.map(c => c[5])));
  console.log("Cars with the Least Availability:", LeastAvailability.length > 0 ? LeastAvailability : "No cars available");
  
//15)check if there is any car with a price per day of exactly 55

  let Price55Exists = carBooking.some(car => car[4] === 55);
  console.log(" Car with Price Per Day of Exactly 55 Exists:", Price55Exists ? "Yes" : "No");
  
  
  
  