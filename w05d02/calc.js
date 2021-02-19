var num1 = ""
$('.btn').on('click',(event) => {
    // console.log('submit button was clicked');
    // console.log($(event.target));
    console.log($(event.target).text());
    // console.log($(event.target));
    $('#result').append($(event.target).text());
    console.log(num1)
});


// let input = [];
// const calcResult = (input) => {
//   resultString = input.join('');
//   return eval(resultString);
// };
// $('.btn-secondary').on('click', (event) => {
//   input.push(event.target.value);
// });
// $('.btn-primary').on('click', () => {
//   const result = calcResult(input);
//   const resultElement = $('#result');
//   resultElement[0].innerHTML = result;
// });
// $('.btn-danger').on('click', () => {
//   input = [];
//   const resultElement = $('#result');
//   resultElement[0].innerHTML = 0;
// });