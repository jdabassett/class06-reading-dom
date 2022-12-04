function changeColor(element) {
  element.style.backgroundColor="grey";
}


//select and change grandparent color

// const grandparent = document.querySelector('.grandparent');
// changeColor(grandparent);



//select and change both parents color

// const parent = Array.from(document.querySelectorAll(".parent"));
// parent.forEach(changeColor);



//select and change children color

// const children = Array.from(document.querySelectorAll(".child"));
// children.forEach(changeColor);


//select first child of first parent

const childOneParentOne = document.querySelector(".child");
changeColor(childOneParentOne);



//go down DOM hierarchy to select all children of first parent

// const grandparent = document.querySelector(".grandparent");
// const parentOne = grandparent.children[0];
// const childrenParentOne = Array.from(parentOne.children);
// childrenParentOne.forEach(changeColor);



//go down DOM hierarchy to select first child of first parent

// const grandparent = document.querySelector(".grandparent");
// const childOneParentOne = grandparent.querySelector(".child");
// changeColor(childOneParentOne);



//go up DOM hierarchy to select grandparent

// const childOneParentOne = document.querySelector("#child-one");
// const parentOne = childOneParentOne.parentElement;
// const grandParent = parentOne.parentElement;
// changeColor(grandParent);


//go up DOM hierarchy to select grandparent

// const childOneParentOne = document.querySelector("#child-one");
// const grandParent = childOneParentOne.closest(".grandparent");
// changeColor(grandParent);
