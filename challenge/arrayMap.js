
// 1.coding challenge 1


// ...to find  target sum in subarray
// ...

function findSubarrayWithTargetSum(array, targetSum) {
    let start = 0;
    let end = 0;
    let currentSum = 0;
  
    while (end < array.length) {
      currentSum += arr[end];
  
      while (currentSum > targetSum) {
        currentSum -= arr[start];
        start += 1;
      }
  
      if (currentSum === target) {
        return true;
      }
  
      end += 1;
    }
  
    return false;
  }
  const myarray = [4, 2, 7, 1, 9, 5];
const targetsum = 17;

console.log(findSubarrayWithTargetSum(myarray, targetsum));


