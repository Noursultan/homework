var arr = [null, 123, undefined, null, "something", 34, 65, undefined, null, null, 43, "anything", "bag"];

var nulls = [];
var numbers = [];
var strings = [];
var undefineds = [];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] === null) {
    nulls.push(arr[i]);
  } else if (typeof arr[i] === 'number') {
    numbers.push(arr[i]);
  } else if (typeof arr[i] === 'string') {
    strings.push(arr[i]);
  } else if (arr[i] === undefined) {
    undefineds.push(arr[i]);
  }
}

var sortedResult = [nulls, numbers, strings, undefineds];

console.log(sortedResult);