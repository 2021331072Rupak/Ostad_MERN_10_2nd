// 1. Calculate Sum 
function calculateSum(a, b) {
    return a + b;
}

//  2. Is Even 
function isEven(number) {
    return number % 2 === 0;
}

//  3. Find Max 
function findMax(numbers) {
    let max = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i];
        }
    }
    return max;
}

// 4. Filter Odd Numbers
function filterOddNumbers(numbers) {
    let oddNumbers = [];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 !== 0) {
            oddNumbers.push(numbers[i]);
        }
    }
    return oddNumbers;
}

// 5.Count Words
function countWords(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        
        if (str[i] !== " ") {
            count++;
        }
    }
    return count;
}


//  6. Remove Duplicates 
function removeDuplicates(arr) {
    let uniqueArray = [];
    for (let i = 0; i < arr.length; i++) {
       
        if (!uniqueArray.includes(arr[i])) {
            uniqueArray.push(arr[i]);
        }
    }
    return uniqueArray;
}

console.log("1. Sum of 10 and 20:", calculateSum(10, 20)); 

console.log("2. Is 5 even?:", isEven(5)); 
console.log("2. Is 8 even?:", isEven(8)); 

console.log("3. Max number in [5, 12, 8, 130, 44]:", findMax([5, 12, 8, 130, 44])); 

console.log("4. Odd numbers from [1, 2, 3, 4, 5, 6]:", filterOddNumbers([1, 2, 3, 4, 5, 6])); 

console.log("5. Word count in 'Hello world':", countWords("Hello world")); 


console.log("6. Unique items from ['apple', 'banana', 'apple', 'orange']:", removeDuplicates(['apple', 'banana', 'apple', 'orange'])); 
