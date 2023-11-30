//#region  Print odd numbers in an array
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

var output = (arr)=>{
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            console.log((arr[i]));
        }
    }

    return outArr;
}

console.log(output(arr));
//#endregion

//#region Convert all the strings to title caps in a string array
let stringArray = ["apple", "banana", "cherry"];


let convertToTitleCase = (arr) => {
    return arr.map(function(str) {
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    });
};

console.log(convertToTitleCase(stringArray));
//#endregion

//#region  Sum of all numbers in an array
var sumNum = [1,2,3,88];

let sumofNumber = (arr)=>{
    return arr.reduce((acc,cv)=>acc+cv,0);
};
console.log(sumofNumber(sumNum));

//#endregion

//#region  Return all the prime numbers in an array
let primnumbers = [2, 3, 4, 5, 6, 7, 8, 9, 10];

let findPrimeNumbers = (arr) =>{
    return arr.filter(function(number) {
        for (let i = 2; i < number; i++) {
            if (number % i === 0) {
                return false;
            }
        }
        return number > 1;
    });
};
console.log(findPrimeNumbers(primnumbers));
//#endregion

//#region Return all the palindromes in an array
const findPalindromes = (arr) => {
    return arr.filter(function(str) {
    const reversedStr = str.toLowerCase().split('').reverse().join('');
    return str.toLowerCase() === reversedStr; 
    });
  };
  
  const Arr = ["level", "hello", "deed", "refer", "civic", "guvi","mom"];
  console.log(findPalindromes(Arr));
//#endregion