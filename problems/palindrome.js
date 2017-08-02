/**
 Write code to check a String is palindrome or not? (solution)
 Palindrome are those String whose reverse is equal to original.

*/

const stringToTest = "11122111";
let isPalindrome =  true;

for(let index in stringToTest) {
    if(stringToTest[index] !== stringToTest[(stringToTest.length - index) -1]){
        isPalindrome = false;
        break;
    }
}

console.log(`is Palindrome? : ${isPalindrome}`);

/** The Javascript way.
 * */


