// n is th nth trerm
// f(n) = f(n-2) + f(n-1)

// fib(6) => 8
// fib(5) => 5
// fib(4) => 3
// assume n >= 1 and is a number
let count = 0;

// takes a lifetime  of universe for big numbers
// const fib = (n) =>{
//     count++
//     // ALWAYS NEED A base case (A way to exit avoid infinite loop: manifest as a stackover flow error)
//     if(n == 1 || n == 2 ){
//         return 1
//     }
//     return  fib(n-2) + fib(n-1)
// }

// takes a fraction of sec for big numbers
function fib(num){
    var a = 1, b = 0, temp;
  
    while (num >= 0){
      temp = a;
      a = a + b;
      b = temp;
      num--;
    }
  
    return b;
  }
// console.log(fib(1))  // value:1 count :1
// console.log(fib(2)) // value:1 count :1
//  console.log(fib(3))  // value:2 count :3
// console.log(fib(4))   // value:3 count :5
//  console.log(fib(5)) // value:5 count :9
// console.log(fib(6)) // value:8    count :15
//  console.log(fib(7)) // value:13    count :25
//   console.log(fib(8)) // value:21    count :41
//   console.log(fib(9)) // value:34    count :67
//  console.log(fib(10)) // value:55    count :109
//   console.log(fib(12)) // value:144    count :287
//  console.log(fib(15)) // value:610    count :*
//  console.log(fib(20)) // value:6765    count :13529
//   console.log(fib(25)) // value:75025    count :150049
//   console.log(fib(30)) // value:832040    count :1664079
//console.log(fib(35)) // value:9227465    count :18454929
// console.log(fib(40)) // value:102334155    count :204668309
//console.log(fib(45)) // value:1134903170    count :2269806339
console.log(fib(500)) // value:1134903170    count :1
// console.log(fib(500)) // value:1134903170    count :1
console.log('count:', count) 


let arr = [10,20,30,40,50,70,40,30,60,70]

let sortedArr = [10,20,30,40,50,60,700,800,1000,2000]
// let sortedArr = [700,800,1000,2000]
// let sortedArr = [700]

// find by index
// accessing by index
//O(1) YAY THE BEST
// arr[4]

// find the index
// n is length of ARRAY
// O(n) worst case n

// if array is sorted
// O(log(n)) 2^x === 10000000     logbase2
// find(99) 