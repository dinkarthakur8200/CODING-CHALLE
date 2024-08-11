const books = [
        { title: "Book1", author: "author1", year: 2015 },
        { title: "Book2", author: "author2", year: 2008 },
        // ... more books
      ];
// A funtion which helps in captilize the strings...
function Captilize(str){
    return  str.toUpperCase();
}
// Main function to filter and captilize ...
const filteredAndCaptilized = books
.filter(book => book.year > 2010)
.map(book=>({
    ...book,
    author: Captilize(book.author)
}));

// Callback the above function ...
console.log(filteredAndCaptilized);
