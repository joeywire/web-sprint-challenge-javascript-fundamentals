// 1. Copy and paste your prototype in here and refactor into class syntax.

class CuboidMaker2{
    constructor(attrs){
        this.length = attrs.length; 
        this.width = attrs.width;
        this.height = attrs.height;
    }
    volume(){
        return this.length * this.height * this.width;
    }
    surfaceArea(){
        return (2 * ((this.length * this.width) + (this.length * this.height) + (this.width * this.height)));
    }
}

const cuboid2 = new CuboidMaker2({
    length: 4,
    width: 5, 
    height: 5, 
  });


// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid2.volume()); // 100
console.log(cuboid2.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

class CubeMaker extends CuboidMaker2{
    constructor(attrs){
        super(attrs);
    }
    surfaceArea(){
        return 6 * (this.length * this.height);
    }
    isACube(){
        if(this.length === this.height && this.length === this.width){
            return 'I am a cube!';
        } else {
            return `I'm a cuboid bro...`;
        }
    }
}

const cube = new CubeMaker ({
    length: 10, 
    width: 10, 
    height: 10,
});

console.log(cube.volume());
console.log(cube.surfaceArea());
console.log(cube.isACube());