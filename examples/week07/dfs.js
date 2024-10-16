function traverseDOM(element) {
  console.log(element); // Logs the current element
  let child = element.firstElementChild;
  
  while (child) {
    traverseDOM(child); // Recursively call traverseDOM on each child
    child = child.nextElementSibling; // Move to the next sibling
  }
}

// Call the function on the root element
const rootElement = document.getElementById('root');
traverseDOM(rootElement);

const sectionDiv = root.querySelector('.section');
traverseDOM(sectionDiv);
