// Select the first paragraph
const firstParagraph = document.querySelector('.section p');
console.log(firstParagraph);
// Access the next sibling (second paragraph)
const secondParagraph = firstParagraph.nextElementSibling;

console.log(secondParagraph); // Logs the second <p>

// Access the previous sibling
const firstParagraphSibling = secondParagraph.previousElementSibling;
console.log(firstParagraphSibling); // Logs the first <p>

// Access all siblings by iterating
let currentSibling = firstParagraph;
while (currentSibling) {
  console.log(currentSibling); // Logs each <p> in the section
  currentSibling = currentSibling.nextElementSibling;
}
