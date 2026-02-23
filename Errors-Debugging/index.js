// STARTER CODE

function calculateTotal(numbers) {
 let total = 0;
 for (let i = 0; i < numbers.length; i++) { // BUG: <= causes undefined
   total += numbers[i];
 }
 return total;
}

const data1 = [1, 2, 3];
const data2 = [4, 5, 6];

console.log(calculateTotal(data1));
console.log(calculateTotal(data2));

function calculateAverage(numbers) {
/* data1 add numbers (1+2+3)
/* data1 divided by total numbers of #s */
if (numbers.length === 0) return 0; 

const total = calculateTotal(numbers); 

return total/numbers.length 
}

console.log(calculateAverage(data1)); 