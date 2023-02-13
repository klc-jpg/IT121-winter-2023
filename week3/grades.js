/* Name: Kelly Chapman
   Authors: Kelly Chapman, Brenden West, An0num0us
   Date: 1/23/23
   HW3  */

let studentData = 'jim|25, sue|32, mary|34, ann|22, ted|28, frank|15, lisa|19, mike|30, ahn|26, vishaya|27';
let valuePairs = studentData.replaceAll(',', ''); //remove commas
let items = valuePairs.replaceAll('|', ' ').split(' '); //remove bars, replace with and split into array on whitespace
const allNums = items.filter(items => items.length == 2).map(Number); //isolate number strings and cast items to integer
const allNames = items.filter(items => items.length > 2); //isolate names
let students = allNames.length; //get total number of students

//code block below (lines 13-27) courtesy of Mr. West from https://github.com/brendenwest/it121/blob/main/3_loops_arrays.rst
let sum = 0;
let highest = 0;
let lowest = 100;
let average = sum / students;

//iterate over numbers array to locate highest and lowest number
for (let i in allNums) {
    sum += allNums[i];
    if (allNums[i] > highest) {
        highest = allNums[i];
    }
    if (allNums[i] < lowest) {
        lowest = allNums[i];
    }
}

for (let i = 0; i < allNames.length; i++) { //iterate over allNames array
    allNames[i] = allNames[i].charAt(0).toUpperCase() + allNames[i].slice(1); //capitalize first letter of each element
}

//code snippet below sourced from stackOverflow 
//authored by username: An0num0us
//https://stackoverflow.com/questions/47960523/how-to-insert-array-values-into-a-html-table-with-a-while-loop
let firstCol = document.querySelectorAll('table tr td:nth-child(1)');
let secondCol = document.querySelectorAll('table tr td:nth-child(2)');
for (let i = 0; i < secondCol.length; ++i) {
    firstCol[i].innerHTML = allNames[i];
    secondCol[i].innerHTML = allNums[i];
}

document.getElementById('studentNames').innerHTML = students; //inject number of students into HTML
document.getElementById('highScore').innerHTML = highest; //inject highest score into HTML
document.getElementById('lowScore').innerHTML = lowest; //inject lowest score into HTML
document.getElementById('avg').innerHTML = sum / students; //find average score and inject into HTML