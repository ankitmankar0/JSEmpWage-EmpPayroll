let origDogs = ["Bulldog", "Beagle", "Labrador"];
let cats = new Array("Americal Curl", "Bengal");
let birds = new Array("Falcon", "Ducks", "Flamingoes");

//Array Copy Elements
let slicedDogs = origDogs.slice(1,2);
let copyDogs = [...origDogs];
let dogs = origDogs.slice(0);

//Stack functions (LIFO) Push And Pop
let pushDog = dogs.push("Saint Bernard");
let popDog = dogs.pop();
dogs[dogs.length] = "Poodle";

//Add and Remove From First
let addFirst = dogs.unshift("Saint Bernard");
let shiftDog = dogs.shift();

//Atomic add and rmove Elements (where, how many to remove, element list)
dogs.splice(2, 1, "Pug", "Boxer");

// Array Function - Concat, Slice and Sort
let animals = dogs.concat(cats,birds);
let newAnimal = [...dogs, ...cats, ...birds].toString();
let sortDog = dogs.slice(0).sort();
function scanArray([first, second]) { console.log("Scan: " + first + " " + second); }
scanArray(animals);
let joinAnimals = animals.join(" ");
let allAnimals = " ";
for (let animal of animals) 
allAnimals += animal + " ";

console.log("Animals : " + allAnimals);