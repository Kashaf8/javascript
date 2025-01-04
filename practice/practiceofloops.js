// //////////////////////////////
console.log("************************");
console.log(":example 1");
// threre three types of loops which are for loops,while loops and do while loops,for of loops and for in loops////////////
console.log("for loops");
for(let i=0;i<=10;i++){
console.log("kashaf karamat--",i);
}
console.log("example 2");
for(let i=1;i<=5;i++){
    console.log(i);
}
// for loops is used for table printing///////
console.log("table printed by for loops");
let table=9;
for(let i=1;i<=10;i++){
    console.log(table, "X ", i ,"=" ,table*i);
}
console.log("table 2");
let table1=92;
for(let i=1;i<=10;i++){
    console.log(table1,"X",i,"=",table1*i);
}

console.log("***********************");
console.log("while loops");
let i=1
while(i<=10){
console.log("ali");
i++
}
console.log("example 2");
let i2=1;
while(i2<=7){
    console.log("a;llishba",i2);
    i2++
}
console.log("******************");
console.log("do while loops");
let i3=1;
do{
    console.log("alishyy",i3);
    i3++
}while( i3<=10) 
    console.log("example2");
    let i4=1;
    do{
console.log("kashaf");
i4++
    }while(i4<=8)
    // break in loops//////////////
    for(let i=1;i<=10;i++){
        if(i==5){
            break
        }
       console.log(i);
    }
    // /////////////////
    console.log("*******************");
    console.log("example 2");
    for(let i=1;i<=10;i++){
        if(i==7){
            break
        }
        console.log(i);
    }
    console.log("example 3");
    for(let i=1;i<=20;i++){
        if(i==10){
            break
        }
        console.log("kashaf",i);
    }
    // ********************
     // break in loops//////////////
     for(let i=1;i<=10;i++){
        if(i==5){
            continue
        }
       console.log(i);
    }
    // /////////////////
    console.log("*******************");
    console.log("example 2");
    for(let i=1;i<=10;i++){
        if(i==7){
           continue
        }
        console.log(i);
    }
    console.log("example 3");
    for(let i=1;i<=20;i++){
        if(i==10){
            continue
        }
        console.log("kashaf",i);
    }
    // ********************
    // paterns/////////////////////
    console.log("patern 1");
    for(let i=1;i<=6;i++){
        let row=" ";
        for(let j=1;j<=6;j++){
          row=row + "*";
        }
        console.log(row);
    }
/////////////////////////
console.log("example 2");
for(let i=1;i<=4;i++){
   let row=" ";
    for(let j=1;j<=4;j++){
       row=row+"*"
    }
    console.log(row);
}
//////////////////////
console.log("example 3");
for(let i=1;i<=6;i++){
    let row=" ";
    for(let j=i;j<=6;j++){
        row=row+"*"
    }
    console.log(row);
}
//////////////////////
console.log("example 4");
for(let i=1;i<=6;i++){
     row=" ";
     for(let j=1;j<=i;j++){
        row=row+"*";
     }
     console.log(row);
    }
////////////////////////
console.log("string example 1");
let str="Pakistan Zindabad ";
let str1="Allama Iqabal"
console.log(str.length);
console.log(str.toLowerCase());
console.log(str.toUpperCase());
console.log(str.charAt(8));
console.log(str. concat(str1));

    


   