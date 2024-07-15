//Step 1: Select a list item using data attribute

const selectedItem = document.querySelector('[data-item="fruit"]');
// console.log(selectedItem);

// Step 2: Navigate to the parent <ul> element

const parentListEl = selectedItem.parentNode;
// console.log(parentListEl);

// Step 3: Navigate to grandparent

const grandparentEl = parentListEl.parentNode;
// console.log(grandparentEl);

// Step 4: Navigate to great- grandparent

const greatGrandparentEl = grandparentEl.parentNode;
// console.log(greatGrandparentEl);
