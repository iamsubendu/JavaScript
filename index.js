const arr1 = ['Ram1', 'Ram2', 'Ram3'];
// om click should change the name from h1
const nameChange = document.getElementById('nameChange');
let currentIndex = -1;
nameChange.onclick = () => {
  currentIndex = (currentIndex + 1) % arr1.length;
  console.log(currentIndex, arr1.length);
  //  nameChange.textContent = arr1[currentIndex];
  nameChange.innerHTML = arr1[currentIndex];
  //   nameChange.innerText = arr1[currentIndex];
};
// console.log(0 % 3);
// after divide, remainder will be 0
// console.log(1 % 3);
// after divide, remainder will be 1
// console.log(2 % 3);
// after divide, remainder will be 2
