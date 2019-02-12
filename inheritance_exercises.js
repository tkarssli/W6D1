function MovingObject(position) {
    this.position = position;
}

function Ship(position, size) {
    MovingObject.call(this, position);
    this.size = size;

};

function Asteroid(position, color) {
    MovingObject.call(this, position);
    this.color = color;
};



Function.prototype.inherits = function (superClass) {
    // function Surrogate() {};
    // Surrogate.prototype = superClass.prototype;
    // this.prototype = new Surrogate();
    // this.prototype.constructor = this;

    this.prototype = Object.create(superClass.prototype)
    this.prototype.constructor = this;

}

Ship.inherits(MovingObject);
Asteroid.inherits(MovingObject);

const mo = new MovingObject(429)
const ship = new Ship(3, "Tamir's Weight(228 lb)")
const asteroid = new Asteroid(1000, "Magenta")

console.log(mo.position)
console.log(mo.size) //undefined
console.log(ship.size)
console.log(asteroid.position)
console.log(asteroid.size) //undefined