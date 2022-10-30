
const array = [
 {
  id:1,
  result_1: false,
  result_2: false,
  result_3: false,
  result_4: false,
 },
 {
  id:2,
  result_1: false,
  result_2: false,
  result_3: false,
  result_4: true,
 },
 {
  id: 3,
  result_1: false,
  result_2: false,
  result_3: false,
  result_4: true,
 },
]

const result = array.filter(item => [item.result_1, item.result_2, item.result_3, item.result_4].some(i => i));

console.log({result})
