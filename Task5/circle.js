class Circle{
    constructor(radius,color){
        this.radius = radius
        this.color = color
    }
    getRadicus(){
        return this.radius;
    }
    getArea(){
        return Math.PI*Math.pow(this.radius,2);
    }
    getCircumference(){
        return (2*Math.PI)*this.radius;
    }
    getColor(){
     return `The Given Color is ${this.color}`;
    }
}

var objCircle = new Circle(1.0,"red");
console.log(objCircle.getRadicus());
console.log(objCircle.getArea());
console.log(objCircle.getCircumference());
console.log(objCircle.getColor());