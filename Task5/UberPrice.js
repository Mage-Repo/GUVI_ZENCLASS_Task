class UberPrice{
    constructor(distance,duration){
        this.distance = distance
        this.duration = duration
    }
    calculatePrice(){
        const baseFare = 5;
        const perMileFare = 10;
        const perMinuteFare = 2.5;
        return `Total Fare ${baseFare+(this.distance*perMileFare)+(this.duration * perMinuteFare)}`;
    }
}

var objUberPrice = new UberPrice(10,50);
console.log(objUberPrice.calculatePrice().toFixed(2));