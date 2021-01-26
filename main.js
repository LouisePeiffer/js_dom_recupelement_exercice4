// 1 
let secondH1 = document.getElementsByTagName('h1')[1]
let textSecondH1 = secondH1.textContent
console.log(textSecondH1);

// 2 
let laDiv = document.getElementsByTagName('div')[0]
console.log(laDiv);

let firstLi = laDiv.getElementsByTagName('ul')[0].getElementsByTagName('li')[0]
console.log(firstLi);

let textFirstLi = firstLi.textContent
console.log(textFirstLi);

// 3 
let leP = laDiv.getElementsByTagName('p')[0].textContent.toUpperCase()
console.log(leP);

// 4 
let lesI = document.getElementsByTagName('li')
console.log(lesI);

let iArray = Object.values(lesI)
console.log(iArray);

iArray.forEach(el => {
    console.log(el.textContent);
});

