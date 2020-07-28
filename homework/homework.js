'use strict';
// Named function expression
const factorial = function factorial (n) {
  if (n > 1) {
      return n * factorial(n-1);
  } else {
      return 1;
  }
};
factorial(3);


// Generate array using function-generator
const tank = () => ({ammo:100, armor: 100});
const car = () => ({power: 100, type: 'minivan'});
const generateArray  = (gen, count) => {
    let items = [];
    for (let i = 0; i < count; i++) {
        items.push(gen());
    }
    return items;
};
const tanks = generateArray(tank, 10);
const cars = generateArray(car, 100);

// Create increment closure
const createIncrement = () => {
  let i = 0;
  return () => i++;
};

const incrementFolders = createIncrement();
const incrementFiles = createIncrement();
const Folder = function (id) {
    this.id = id;
};
const File = function (id, folderId) {
    this.id = id;
    this.folderId = folderId;
};

const createData = () => {
      const folders = [];
      const files = [];
      for (let i = 0; i<5 ; i++) {
          const id = incrementFolders(); // id - folder id
          folders.push(new Folder(id)); // create folder with specified id and push it to array
          for (let j = 0; j < 5; j++) {
              const fileId = incrementFiles();
              files.push(new File(fileId, id));
          }
      }
      return {
          folders,
          files
      }
};

const data = createData();

const getData = path => new Promise((resolve, reject) => {
    const result = data[path];
    setTimeout(resolve, 5000, result);
});

const getFolders = async () => await getData('folders');
const getFilesForFolder = async folderId => {
    const result = await getData('files');
    return result.filter(file => file.folderId === folderId);
};

const processData = async () => {
    const folders = await getFolders();
    const files = await  getFilesForFolder(folders[1].id);
    console.log(folders);
    console.log(files);
};

processData();

// Map Reduce

const cars = [
    {
        model: 'Tesla X',
        power: 400
    },
    {
        model: 'Mercedes',
        power: 350
    }
];

const models = cars.map(car => car.model);

const weather = [
    {
        wind: 3,
        t: 15
    },
    {
        wind: 10,
        t: 35
    }
];

const sumTemp = weather.reduce((acc, dayWeater) => {
    acc += dayWeater.t;
    return acc;
}, 0);

const averageTemp = sumTemp/weather.length;
