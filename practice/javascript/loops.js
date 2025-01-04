// for loops
for (let i = 0; i < 6; i++) {
  console.log(i);
}
// _________________________
console.log("************");
for (let i = 1; i <= 6; i++) {
  console.log(i);
}
// _________________________
for (let i = 1; i <= 50; i++) {
  console.log("kashaf", i);
}

// _____________________________
console.log("*********************");
for (let i = 1; i <= 100; i++) {
  console.log("kashaf karamat", i);
}
// while loops
let i = 1;
while (i <= 100) {
  console.log(i);
  i++;
}
console.log("***************************");
let i1 = 1;
while (i1 <= 40) {
  console.log("alishba", i1);
  i1++;
}
console.log("****************************");
let i2 = 1;
while (i2 <= 20) {
  console.log("ali", i2);
  i2++;
}
let i3 = 0;
while (i3 <= 40) {
  console.log("ali", i3);
  i3++;
}
// // table printed
console.log("table printed 77");
let numbertable = 77;
for (let i = 1; i <= 10; i++) {
  console.log(numbertable, "X", i, "=", numbertable * i);
}
// example2
// for loops
console.log("table printed 7");
let table2 = 7;
for (let i = 1; i <= 10; i++) {
  console.log(table2, "X", i, "=", table2 * i);
}
// do-while Loop
let i5 = 0;
do {
  console.log("kashaf");
  i5++;
} while (i5 < 0);
// example 2
let i6 = 1;
do {
  console.log("my name");
  i6++;
} while (i6 <= 10);
// nested loops
console.log("********************");
for (let i = 1; i <= 4; i++) {
  let row = " ";
  for (let j = 1; j <= 4; j++) {
    row = row + "*";
  }
  console.log(row);
}
// example2
console.log("********************8");
for (let i = 1; i <= 4; i++) {
  let row = " ";
  for (let j = 1; j <= i; j++) {
    row = row + "*";
  }
  console.log(row);
}
// break loops
console.log("*******************");
for (let i = 0; i <= 10; i++) {
  if (i == 5) {
    break;
  }
  console.log(i);
}
// example 2
console.log("******************************");
for (let i = 1; i <= 10; i++) {
  if (i == 7) {
    break;
  }
  console.log(i);
}
// continoue loops
console.log("******************************");
for (let i = 0; i <= 10; i++) {
  if (i == 7) {
    continue;
  }
  console.log(i);
}
// for of loops
// for loops only use for array anf strings
console.log("**************************");
let name = "kashaf";
for (let i of name) {
  console.log(i);
}
console.log("*******************");
let name2 = "Pakistan Zindabad";
for (let j of name2) {
  console.log(j);
}
console.log("*****************");
        let array=["apple","watermelon","melon","peach","grapes"];
        for(let i of array){
console.log(i);
        }
// _______________________
console.log("***********************");
let name3 = ["apple", "orange", "grapes", "banana"];
for (let key in name3) {
  console.log(key);
}
// _______________________
console.log("**************************");
let product = {
  name: "pencil",
  price: 40,
  rating_people: 340,
  rating: "⭐⭐⭐⭐⭐",
  sale: true,
};
for (let key in product) {
  console.log(product[key]);
}
for (let key in product) {
  console.log(key);
}
//  ___________________
console.log("*************");
let str = "Pakistan Zindabad ";
let str2 = "Allama iqbal ";
console.log(str.length);
console.log(str.charAt(4));
console.log(str.concat(str2));
console.log(str.indexOf(7));
console.log(str.indexOf("d"));
console.log(str.toUpperCase());
console.log(str.toLowerCase());

