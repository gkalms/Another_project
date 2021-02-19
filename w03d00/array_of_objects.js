const movies = [
    {title: "skyfall", year: "1980"},
    {title: "thunderball", year: "1990"},
    {title: "goldfinger", year: "2000"},

];
for (let i = 0; i < movies.length; i++) {
console.log("index:", i);
console.log(movies[i]);
console.log("movie title:", movies[i].title); //This is an expression - extracting info from part of array
console.log("year of production:", movies[i].year);
}

