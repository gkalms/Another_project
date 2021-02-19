const test = [1,2,3,4,5];

let test2 = [];
for (let i = 0; i < test.length; i++){
    test[i] = test[i]*2;
test2.push(test[i]);
};
console.log(test2);

test.forEach((num)=> {
return num + 1
});

console.log(num);

const test2 = test.map(test => test*3);
console.log(test2);

const test2 = test.filter(test => test);
console.log(test2);

const companies = [
    {name: "Company One", category: "Finance", start: 1981, end: 2003},
    {name: "Company Two", category: "Retail", start: 1992, end: 2008},
    {name: "Company Three", category: "Auto", start: 1999, end: 2007},
    {name: "Company Four", category: "Retail", start: 1989, end: 2010},
    {name: "Company Five", category: "Technology", start: 2009, end: 2014},
    {name: "Company Six", category: "Finance", start: 1987, end: 2010},
    {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
    {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
    {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
  ];

  const retailCompanies = companies.filter((companies) => companies.start > "1987");
  console.log(retailCompanies);



  const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

  const ageSort = ages.sort((a,b) => (a - b));
  console.log(ageSort);