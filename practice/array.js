//simple array////////////////
console.log("simple array example 1");
let array = [
  1,
  2,
  3,
  4,
  5,
  "kashaf",
  "karamat",
  "ali",
  ["amir", "alishba", 60, 97],
];
console.log(array);
console.log(array[7]);
console.log(array[5]);
console.log(array[4]);
// array ky oiunhder majoud array ko dhekne ky liya/////hum dheky gy array ky iunhder majoud array ka number 8 hai is liya 8 lihkne sea array ky iunder array lihka a raha/////
console.log(array[8]);
console.log(array[8][1]);
console.log(array[8][3]);
// array for of/////////////
console.log("array for of example");
for (let i of array) {
  console.log(i);
}
// array for in /////////////
console.log("array for in example ");
for (let i in array) {
  console.log(array[i]);
}
console.log("*******************************************");
// array with traditional loops/////////////////
console.log("traditional loop array example 1");
let array1 = ["Alishba", "Kashaf", "Ali", "Amir"];
for (let i = 0; i < array1.length; i++) {
  console.log(array1[i]);
  console.log(array1[i].toUpperCase());
  console.log(array1[i].toLowerCase());
}
console.log("*********************************************************");
console.log("traditional loop of array example 2");
let array2 = ["Kashaf", "Lahore", "Karachi", "Multan"];
for (let i of array2) {
  console.log(i);
}
console.log("************************************");
for (let i in array2) {
  console.log(array2[i]);
}
console.log("++++++++++++++++++++++++++traditional loop");
for (let i = 0; i < array2.length; i++) {
  console.log(i);
  console.log(array2[i]);
  console.log(array2[2]);
  console.log(array2[3].toLowerCase());
  console.log(array2[i].toUpperCase());
}
// loop ky bahir for of aur in loop ko maloom kiya ja sekta hai////////////////
console.log("*****************************");
for (let i of array2) {
  console.log(i);
}
console.log("*********************");
for (let i in array2) {
  console.log(array2[i]);
}
console.log("********************************");
console.log("example number 3");
let array3 = [2, 3, 4, "Ali", "Amir", "Kashaf", 7, 9, 9];
let array4 = ["monday", "tuesday", "wednesday", "thursday"];
console.log(array3.concat(array4));
console.log(array3.indexOf(4));
console.log(array3.indexOf(1));
console.log("**************************************");
console.log(array3.join("*"));
// arr[5]=[8,9,"ali",9]
// console.log(arr[5][3]);
// console.log("*********************");
// array ky method string to,string to ko hum array ko string mea change krne ky liya use krty hai /////////////
let arr1 = [
  2,
  4,
  7,
  9,
  "aysh",
  "ali",
  "hum",
  222,
  6666,
  ["kashaf", "ali", "amir"],
];
console.log(arr1.toString());
// join array ka method hai ///////////////////
console.log("join method");
console.log(arr1.join("*"));
// push ////////////
console.log("array push*****************");
let arr2 = [];
arr2.push(2, 4, "ali", "amir,3,67,987", [22, 980.0, "ahmed", "hamza", "mano"]);
arr2.push([33.3, 99.9, "ali"]);
arr2.push({
  name: "pen",
  price: 77,
});
arr2.push(55, 88);
console.log(arr2);
console.log("*************************");
// pop arrray//////////////////////
console.log("pop array ************************");
arr2.pop();
console.log(arr2);
arr2.pop();
console.log(arr2);
arr2.pop();
console.log(arr2);
// unshift for array//////////////////////
console.log("unshift for array*******************");
arr2.unshift("kashaf", "alishba");
arr2.unshift(2, 8, 9, ["a", "b", "c"]);
console.log(arr2);
// shift for array///////////////////////////
arr2.shift();
console.log(arr2);
console.log("*********************");
arr2.shift();
console.log(arr2);
console.log("*************************");
arr2.shift();
console.log(arr2);
console.log("slice for arrayy***************************");
let arre = [1, 2, 3, 4];
let arre1 = [9, 99, "ali"];
let arre2 = arre.concat(arre1);
console.log(arre2);
// console.log(arre1.slice(0));
console.log(arre.slice(0, 2));
console.log(arre.slice(1, 3));
console.log(arre);
console.log("**********************************");
console.log("splice for array**************");
let arraya = [2, 4, 99, 90, "ali", "amir"];
console.log(arraya.splice(1,3));
console.log(arraya);
console.log(arraya.splice(0,1,[45.7,'a',"zeeniyaa"]));
console.log(arraya);
console.log("********************************");
console.log("++++++example of delete+++++++");
let arr5 = [2, 88, 44, 99, 37487, 9273, "ali", "amir", "kashaf", 3, 56, 778];
console.log(arr5);
let arr7 = delete arr5[2];
console.log(arr7);
console.log(arr5);
// modern array method in which map,foreach,filter,reduce//////////////////
// foreach method,yeh orginal aray ko totally change kr deta hai it has three parameters(value,index and array is ky ilwa jis mea callback use ho wo higher order function hota hai jis mea aik sea zada braket use ho aik function ko dosre ky saat jorne ky liya//////////////
let com = [20, 21, 30, 31, 40, 41, 50, 51, 60];
com.forEach((val) => console.log(val * 2));
console.log(com);
console.log("*********************");
com.forEach((val) => console.log(val % 2 === 0));
console.log("****************************");
let name = ["ali", "amir", "kashaf", "alishba"];
name.forEach((val) => console.log(val.toUpperCase()));
console.log("**************************");
// map method////////////////////////////////
// map method orginal array ko change krne ki jega ius ki copy bannta hai aur ius mea changing krta hai///////////////////
com.map(val=>{
    console.log(val*2);
})
let ans=com.map(val=>{
    return val*2
})
console.log(ans);
console.log(com);
console.log("example 2");
let anss=name.map(val=>{
    return val.toUpperCase()
})
console.log(anss);
// 
