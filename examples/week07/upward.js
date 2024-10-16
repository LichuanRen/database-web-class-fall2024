// Select one of the paragraphs
const paragraph = document.querySelector('.section p');

console.log(paragraph);
// Get the parent of the paragraph
const parentDiv = paragraph.parentElement;
console.log(parentDiv); // Logs the .section <div>

// Traverse all the way up to the root
let currentElement = paragraph;
while (currentElement.parentElement) {
  currentElement = currentElement.parentElement;
  console.log(currentElement); // Logs each parent up to <body> and <html>
}
