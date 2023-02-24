// 1) Given an array, return a new array where the first and last elements from the original array are removed. I want this done in a function. If there's less than 3 elements, it shouldn't remove the items.

const arrOne = ["john", "denise", "Ryan", "olivia", "enoka"];

function removeReplace(arrParam) {
  let arrlength = arrOne.length;
  if (arrlength <= 2) {
    return arrParam;
  } else {
    arrParCopy = [...arrParam];
    arrParCopy.shift();
    arrParCopy.pop();

    return arrParCopy;
  }
}
console.log(removeReplace(arrOne));

// 2) Build a heading generator.
// IE:
// heading = 6
// content = "hey there, I'm a header"
// => '<h6>hey there, I'm a header</h6>'
// Keep in mind, valid heading tags are only 1-6

const size = prompt("Please enter heading number between 1-6");

function headingGen(sizeBig) {
  if (sizeBig >= 1 && sizeBig <= 6) {
    return `<h${sizeBig}>hey there, I'm a header</h${sizeBig}>`;
  } else {
    console.log("invalid input Please choose header tag size");
  }
}

console.log(headingGen(size));

// 3) Swap the first and last characters of a string.
// IE:
// "ryan" => "nyar"

const myName = "Enoka";

function switchCharac(newName) {
  const myArray = newName.split("");
  const firstLetter = myArray.shift();
  const lastLetter = myArray.pop();

  myArray.unshift(lastLetter);
  myArray.push(firstLetter);

  return myArray.join("");
}

console.log(switchCharac(myName));
