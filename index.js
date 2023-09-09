// Function to check if a string is a palindrome
function isPalindrome(word) {
  // Convert the input string to lowercase
  word = word.toLowerCase();
  
  // Remove non-letter characters (only keep letters)
  word = word.replace(/[^a-z]/g, '');

  // Initialize two pointers, one at the beginning (left) and one at the end (right) of the string.
  let left = 0;
  let right = word.length - 1;
  
  // Loop while the left pointer is less than or equal to the right pointer
  while (left < right) {
    // If the characters at the left and right pointers are not equal, return false
    if (word[left] !== word[right]) {
      return false;
    }
    // Move the left pointer one step to the right
    left++;
    // Move the right pointer one step to the left
    right--;
  }
  
  // If the loop completes without finding any unequal characters, return true
  return true;
}

// Test cases
console.log(isPalindrome("madam")); // true
console.log(isPalindrome("robot")); // false
console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("A man a plan a canal Panama")); // true

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
