function isPalindrome(word) {
  // Write your algorithm here
  return word == word.split('').reverse().join('')
}

/* 
  Add your pseudocode here
  
function isPalindrome(word) {
  return word == word.split('').reverse().join('')
}

*/

/*
  Add written explanation of your solution here

  any string passed as an argument will be placed into an array like object
  the array like object will be reversed to check it is a palindrome or not 
  join() will join the array like objects to be checked  
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
