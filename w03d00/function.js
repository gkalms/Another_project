//return the total count of how many odd and even

// function evenOdd(numArr) {
//     const totalCount = {
//         even: 0,
//         odd: 0
//     }
//   for (let i = 0; i <= numArr.length; i++) {
//     if (numArr[i] % 2 === 0){ 
//     console.log(`${numArr[1]} is even`)
//     totalCount.even++
// //         //console.log(totalCount.even++);
//         } else {
//         console.log(totalCount.odd++);
//         }
//         return totalCount;
//     }
// }
// evenOdd([10,3,88,9,24,25, 103]);
// console.log(evenOdd)

//Oli's fix
// function evenOdd(numArr) {
//     const totalCount = {
//       even: 0,
//       odd: 0,
//     };
//     for (let i = 0; i < numArr.length; i++) {
//       if (numArr[i] % 2 === 0) {
//         totalCount.even++;
//       } else {
//         totalCount.odd++;
//       }
//     }
//     return totalCount;
//   }
//   console.log(evenOdd([10, 3, 88, 9, 24, 25, 103, 1]));

//Teachers's example to help break code into individual code:

evenOdd([10, 3, 88, 9, 24, 25, 103]);
function evenOdd(numArr) {
    for (let i = 0; i < numArr.length; i++) {
        console.log(numArr[i]);
    }
}
//Test each piece of code individually
//test that for loop is running though index of array
//test that the code is taking nuber and identifying whteher odd or een