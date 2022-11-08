/* Example # 1 */
function sum(a, b) {
  return a + b;
}

function calc(num1, num2, callback) {
  return callback(num1, num2);
}

console.log(calc(20, 12, sum));

/* Example # 2 */
setTimeout(function () {
  console.log('Hello fiend!');
}, 3000)

function greet(name) {
  console.log(`Hi ${name}`);
}

setTimeout(greet, 2000, 'Jose Luis');