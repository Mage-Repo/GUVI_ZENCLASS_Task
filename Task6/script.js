var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload = function(){
    var res = JSON.parse(request.response);
    var asiaCountries = res.filter((ele)=>ele.region === 'Asia');
    var population  = res.filter((ele)=>ele.population < 200000);
    var totalPopulation = res.reduce((acc,cv)=>acc+cv.population,0);   
    var usaCurrencies = res.filter((ele)=>ele.currencies && ele.currencies.USD)
    res.forEach(function(element){
        console.log("Name: " + element.name.common);
        console.log(`Name ${element.name.common}
Capital: ${element.capital}
flag: ${element.flag}`)
    });    
     console.log(asiaCountries); 
     console.log(population); 
     console.log(`Total Population: ${totalPopulation}`);
     console.log(usaCurrencies);  
}