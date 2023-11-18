const dogs = [];

let nextDogId = 1;

function getNewDogId() {
  const newDogId = nextDogId;
  nextDogId++;
  return newDogId;
}

//  HANDLERS

// GET /dogs
const getAllDogs = (req, res) => {
  console.log(dogs);
  res.json(dogs);
};

// POST /dogs
const createDog = (req, res) => {

  const name = req.body.name;
  const species = req.body.species;
  const age = req.body.age;
  const color = req.body.color;
  const weight = req.body.weight;

  const newDog = {
    dogId: getNewDogId(),
    name, species, age, color, weight,  // ES6 shorthand for key-value pairs
  };

  dogs.push(newDog);
  res.json(newDog);
};

// GET /dogs/:dogId
const getDogById = (req, res) => {
  const dogId = req.params.dogId;
  const dog = dogs.find((dog) => dog.dogId == dogId);
  res.json(dog);
};

// PUT /dogs/:dogId
const updateDog = (req, res) => {

  const name = req.body.name;
  const species = req.body.species;
  const age = req.body.age;
  const color = req.body.color;
  const weight = req.body.weight;
  const dogId = req.params.dogId;

  const dog = dogs.find((dog) => dog.dogId == dogId);
  dog.name = name;
  dog.species = species;
  dog.age = age;
  dog.color = color;
  dog.weight = weight;

  res.json(dog);
};

// DELETE /dogs/:dogId
const deleteDog = (req, res) => {
  const dogId = req.params.dogId;
  const dogIdx = dogs.findIndex((dog) => dog.dogId == dogId);
  dogs.splice(dogIdx, 1);
  res.json({ message: "success" });
};

// Middleware to log request time
function logRequestTime(req, res, next) {
  const requestTime = new Date(); // .toLocaleTimeString() can be used to format the time
  console.log(`Request received at ${requestTime} for ${req.method} ${req.url}`);
  next(); // Continue with the next middleware or route handler
}
  

module.exports = {
  getAllDogs,
  getDogById,
  createDog,
  updateDog,
  deleteDog,
  logRequestTime,
};