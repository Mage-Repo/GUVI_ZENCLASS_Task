//#region Print odd numbers in an array
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let printOddNumbers = function(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            console.log(arr[i]);
        }
    }
};

printOddNumbers(numbers);

(function(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            console.log(arr[i]);
        }
    }
})(numbers);
//#endregion

//#region Convert all the strings to title caps in a string array
let stringArray = ["apple", "banana", "cherry"];

let convertToTitleCase = function(arr) {
    return arr.map(function(str) {
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    });
};

console.log(convertToTitleCase(stringArray));


(function(arr) {
    var Outputarr=[];
    arr.map(function(str) {
         Outputarr.push(str.charAt(0).toUpperCase() + str.slice(1).toLowerCase());
    });
    console.log(Outputarr);
})(stringArray);
//#endregion

//#region Sum of all numbers in an array
var sumNum = [1,2,3,88];

let sumofNumber = function(arr){
    return arr.reduce((acc,cv)=>acc+cv,0);
};
console.log(sumofNumber(sumNum));

(function(arr){
    console.log(arr.reduce((acc,cv)=>acc+cv,0))
})(sumNum)

//#endregion


//#region  Return all the prime numbers in an array
let primnumbers = [2, 3, 4, 5, 6, 7, 8, 9, 10];

let findPrimeNumbers = function(arr) {
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

(function(arr){
    var out =  arr.filter(function(number) {
          for (let i = 2; i < number; i++) {
              if (number % i === 0) {
                  return false;
              }
          }
          return number > 1;
      });
      console.log(out);
  })(primnumbers)

//#endregion

//#region Return all the palindromes in an array
const findPalindromes = function(arr) {
    return arr.filter(function(str) {
    const reversedStr = str.toLowerCase().split('').reverse().join('');
    return str.toLowerCase() === reversedStr; 
    });
  };
  
  const Arr = ["level", "hello", "deed", "refer", "civic", "guvi","mom"];
  console.log(palindrofindPalindromes(Arr));
  
(function(arr){
    var outputArr = arr.filter(function(str) {
        const reversedStr = str.toLowerCase().split('').reverse().join('');
        return str.toLowerCase() === reversedStr; 
        });
        console.log(outputArr);
})(Arr)
//#endregion

//#region Return median of two sorted arrays of the same size.
const findMedian = function(arr1, arr2) {
    const sortedArray = arr1.concat(arr2).sort((a,b)=>a-b);
    const length = sortedArray.length;
  
    if (length % 2 === 0) {
      const midIndex = length / 2;
      return (sortedArray[midIndex - 1] + sortedArray[midIndex]) / 2;
    } else {
      const midIndex = Math.floor(length / 2);
      return sortedArray[midIndex];
    }
  };
  
  const arr1 = [1, 3, 5];
  const arr2 = [2, 4, 6];
  console.log(findMedian(arr1, arr2));

  (function(arr1,arr2){
    const sortedArray = arr1.concat(arr2).sort((a,b)=>a-b);
    const length = sortedArray.length;
    var output = "";
    if (length % 2 === 0) {
      const midIndex = length / 2;
      output =  (sortedArray[midIndex - 1] + sortedArray[midIndex]) / 2;
    } else {
      const midIndex = Math.floor(length / 2);
      output = sortedArray[midIndex];
    }
    console.log(output);
  })(arr1,arr2)
//#endregion
//#region Remove duplicates from an array
const removeDuplicates = function(arr) {
    return arr.filter(function(value, index, self) {
      return self.indexOf(value) === index;
    });
  };
  
  const originalArray = [1, 2, 3, 4, 2, 5, 6, 1];
  console.log(removeDuplicates(originalArray));

  (function(arr){
    var out = arr.filter(function(value, index, self) {
        return self.indexOf(value) === index;
      });
      console.log(out);
  })(originalArray)
//#endregion

//#region Rotate an array by k times
const rotateArray = function(arr, k) {
    const len = arr.length;
    const rotations = k % len;
    const rotatedArray = arr.slice(rotations).concat(arr.slice(0, rotations));
    return rotatedArray;
  }; 

  console.log(rotateArray([1, 2, 3, 4, 5,7,8,9], 3));
  
  (function(arr,k){
    const len = arr.length;
    const rotations = k % len;
    const rotatedArray = arr.slice(rotations).concat(arr.slice(0, rotations));
    console.log(rotatedArray);
  })([1, 2, 3, 4, 5,7,8,9], 3)
//#endregion