//STEP 1 - Write a JavaScript function that returns a passed string with letters in alphabetical order. 
//         Assume punctuation and number symbols are not included in the passed-in string.

// function strSort(str) {

//     let sortedStr = str.split('').sort()
//     return sortedStr
// }

// let str = 'webmaster'
// console.log(strSort(str))

//STEP 2 - Write a JavaScript function that accepts a string as a parameter and converts the first letter of each
//         word of the string to upper case.

// function wordsToUpperCase(str) {

//     let wordsList = str.split(' ')
    
//     for (let i = 0; i < wordsList.length; i++) {

//         wordsList[i] = wordsList[i].slice(0, 1).toUpperCase() + wordsList[i].substr(1)
        
//     }
    
//     let convertedStr = wordsList.join(' ');
   
//     return convertedStr
// }

// let str = 'the quick brown fox'
// console.log(wordsToUpperCase(str))

//STEP 3 - Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within 
//         the string.

// function countVowels(str) {

//     let num = str.match(/[aeiouy]/g).length
//     return num

// }

// let str = 'The quick brown fox'
// console.log(countVowels(str))

//STEP 4 - Write a JavaScript function that generates a string id (specified length) of random characters.


// function generateId(num) {

//     let text = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
//     let value = ''

//     for (let i=0; i<num; i++) {

//         index = Math.round(Math.random() * 62)
//         value = value + text.charAt(index)
//     }

//     return value

// }

// console.log(generateId(8))

//STEP 5 - Write a JavaScript function that accepts a list of country names as input and returns the longest
//         country name as output.

// function Longest_Country_Name(list) {

//     let length = 0
//     let country

//     for (let i = 0; i < list.length; i++) {

//         if (list[i].length > length) {

//             length = list[i].length
//             country = list[i]
//         }
//     }

//     return country

// }

// let list = ["Australia", "Germany", "United States of America"]
// console.log(Longest_Country_Name(list))