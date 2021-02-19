const input = [1, 2, 3, 4, 5, 6];

// using Map
const output = input.map((num) => {
    if (typeof num !== "number") {
        return num;
    }

    if (num % 2 === 0) {
        num = 1;
    }

    else {
        num = 0;
    }
    return num;
});
console.log(output);

// Using filter
const filterObject = input.filter((ele) => {
    if (ele % 2 == 0) {
    return ele;
    }
});
console.log(filterObject);


const expenses_for_the_week = [
  {
    creditCard: "Amex",
    day: "monday",
    expenses: "10$",
  },
  {
    creditCard: "VISA",
    day: "tuesday",
    expenses: "20$",
  },
  {
    creditCard: "VISA",
    day: "wednesday",
    expenses: "30$",
  },
  {
    creditCard: "Mastercard",
    day: "thursday",
    expenses: "0$",
  },
  {
    creditCard: "VISA",
    day: "friday",
    expenses: "100$",
  },
  {
    creditCard: "amex",
    day: "saturday",
    expenses: "999$",
  },
  {
    creditCard: "mastercard",
    day: "sunday",
    expenses: "888$",
  },
];

// expenses for monday
const expensesForMonday = expenses_for_the_week.filter((ele) => {
  if (ele.day == "monday") {
    return ele;
  }
});
console.log(`My expenses for monday are: ${JSON.stringify(expensesForMonday)}`);
// Filter for only weekend expenses
const expensesForWeekend = expenses_for_the_week.filter((ele) => {
  if (ele.day == "saturday" || ele.day == "sunday") {
    return ele;
  }
});
// map only the expenses key
const expensesMap = expensesForWeekend.map((ele) => {
  return {
    expenses: ele.expenses,
  };
});
console.log(
  `Filtered results for the weekend: ${JSON.stringify(expensesForWeekend)}`
);
console.log(
  `mapped results with ONLY expenses: ${JSON.stringify(expensesMap)}`
);