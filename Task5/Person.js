class Person{
    constructor(name,age,location,regNo){
     this.name = name
     this.age = age
     this.location = location
     this.regNo = regNo
    }
    getDetails(){
        return `Name :- ${this.name} 
Age :- ${this.age}
Location :- ${this.location}
RegNo :- ${this.regNo}`
    }
}

var objPerson = new Person("Magendran",24,"Chennai",2023)
console.log(objPerson.getDetails());