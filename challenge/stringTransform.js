//   2.coding challenge 2


function ChangeString(str) {
    const length = str.length;
  
    if (length % 15 === 0) {
      // Divisible by both 3 and 5
      return reverseString(str).split('').map(char => char.charCodeAt(0)).join(' ');
    } else if (length % 3 === 0) {
      // Divisible by 3
      return reverseString(str);
    } else if (length % 5 === 0) {
      // Divisible by 5
      return str.split('').map(char => char.charCodeAt(0)).join(' ');
    }
  
    // Not divisible by 3, 5, or 15
    return str;
  }
  
  function reverseString(str) {
    return str.split('').reverse().join('');
  }
  console.log(ChangeString("Hamburger")); // Output: "regrubmaH"
console.log(ChangeString("Pizza")); // Output: "80 105 122 122 97"
console.log(ChangeString("Chocolate Chip Cookie")); // Output: "eikooCpihCetalocohC"