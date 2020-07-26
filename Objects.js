// Objects

const Tank = {
    fuel: 100,
    ammo: 100,
    x: 0,
    y: 0,
    armor: 100,
    fire: function () {
        this.ammo--
    },
    fire1 () {
        this.ammo--
    }
};

// Prototype
const T90 = {type: 'T90'};
T90.__proto__ = Tank;

// Constructor
function TankConstructor (ammo = 100, armor = 100) {
    this.fuel = 100;
    this.ammo = ammo;
    this.x = 0;
    this.y = 0;
    this.armor = armor;
}

// Function - Generator
const TankGen = (ammo = 100, armor = 100) => ({
    fuel: 100,
    ammo,
    armor,
    x: 0,
    y: 0,
});

// Class
class TankClass {
    constructor(ammo = 100, armor = 100) {
        this.fuel = 100;
        this.ammo = ammo;
        this.x = 0;
        this.y = 0;
        this.armor = armor;
    }
    fire () {
        this.ammo--
    }
}

class T90 extends TankClass {
    constructor(ammo = 100, armor = 100) {
        super(ammo = 150, armor = 100);
    }
}

const newTank = new T90();

// Array

let arr = [1, 3, 'safasdf', 3432];
console.log(arr[0]);

// JSON format
let obj = {story: 346};
JSON.stringify(obj);
JSON.parse(JSON.stringify(obj));
