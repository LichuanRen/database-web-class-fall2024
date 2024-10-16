// Select the root element
const root = document.getElementById('root');

// Access the first child of the root
const firstChild = root.firstElementChild;
console.log(firstChild); // Logs the <h1> element

// Access all children of the root
const children = root.children;
console.log(children);
for (let child of children) {
  console.log(child); // Logs each child element within the <div id="root">
}

// Access a specific child node
const sectionDiv = root.querySelector('.section');
const paragraphs = sectionDiv.children;
for (let para of paragraphs) {
  console.log(para); // Logs each <p> inside the .section div
}
