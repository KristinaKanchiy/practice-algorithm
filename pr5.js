const N = 50;
let array = [];

for (let i = 0; i < N; i++) {
  array.push(Math.floor(Math.random() * 51)); 
}

console.log(`Початковий масив: ${array}`);

function bubbleSort(array) {

    for (let i = 0; i < N - 1; i++) {
      for (let j = 0; j < N - i - 1; j++) {
        if (array[j] < array[j + 1]) {
          [array[j], array[j + 1]] = [array[j + 1], array[j]];
        }
      }
    }
    return array;
  }
  
  const sortedArray = bubbleSort([...array]);
  
console.log(`Відсортований масив : ${sortedArray} `);

