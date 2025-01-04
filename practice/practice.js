//// Var ///
var name="kashaf";
console.log(name);
console.log(typeof(name));
var name1=234;
console.log(name1);
//// update ///
name="hina"
console.log(name);
////// re-decaler ////
var name="amir";
console.log(name);
{
    var name=765;
    console.log(name);
}
/// let ///
let h1="Kashaf-Arshad";
console.log(h1);
let h=987;
console.log(h);
///// update ///
h=6543;
console.log(h);
//// re-decaler let has not property of re-decalry*8q k is mea same id lihkne sea error a jata hai,jesa k upper id h thi aur dobara id h lihkne sea error a jata hai. ///
let h3="kinza";
console.log(h3);
///// const ///
const num2="ayesha";
console.log(num2);
// update and re declare,const also has not property of re declare and update////////
// product //
let product={
    name:"pen",
    price:987,
    rateing:"⭐⭐⭐⭐⭐",
    rating_people:2000,
    deal_or_the_day:true,   
} 
console.log(typeof(product.price));
console.log(typeof(product.name));
console.log(typeof(product.rateing));
console.log(typeof(product.rating_people));
console.log(typeof(product.deal_or_the_day));
// agr product ki price ya khuch bhi change krna ho/////////
console.log(product.price);
console.log(product.price=1000);
console.log(product.price);
// commemt section/////
// signal line comment///
// fkdhgvjnc biuvdfjn bxfgvhbdjn cxxdhiac m
// multi_line comment/////////
/*
sekjfkdbnzjdfj
dklewjhfiushdvjnjsd
ldkfvhniwehfjfm
c,mklifhn
*/
// we have five tpes of operators which are arithemtic,assignment,logical,comparssion,trernaryoperators/////
// arithemtic operators,binary operators/////
console.log("*****************");
let num3=67;
let num4=89;
let add=num3+num4
console.log("ans of add-->",add);
let sub=num3-num4
console.log("ans of sub-->",sub);
let multiply=num3*num4
console.log("ans of multiply-->",multiply);
let division=num3/num4
console.log("ans of division-->",division);
let num5=66;
let mod=66%2;
console.log("ans of mod---->",mod)
let num6=77;
let mod1=77%2;
console.log("ans of mod1---->",mod1);
let num7=71;
let num8=3;
let mod2=71%3;
console.log("ans of mod2--->",mod2);
// arithemtic operators,uniary operators///
// exponents///
let num9=6;
let num10=4;
let power=6**4;
console.log("Ans of power--->",power);
// increment///
// post increments///
let num11=6;
num11++;
console.log("ans of post increment-->",num11);
// pre increments//
let num12=9;
++num12;
console.log("ans of pre increment-->",num12);
// decrements///
// post decrements///
let num13=6;
num13--;
console.log("ans of post decrement-->",num13);
// pre decrements//
let num14=9;
--num14;
console.log("ans of pre decrement-->",num14);
// assignment opertors/////
let f=8;
f+=2;
console.log("ans of assign add--->",f);
f-=2;
console.log("ans of assign sub--->",f);
f*=2;
console.log("ans of assign multiply--->",f);
f/=4;
console.log("ans of assign division--->",f);
f%=4;
console.log("ans of modulos--->",f);
// khool ky lihkne ka method///
console.log("khool ky lihkne ka method");
console.log("*****************");
let f1=9;
f1=f1+7;
console.log("ans of assign add--->",f1);
f1=f1-7;
console.log("ans of assign sub--->",f1);
f1=f1*7;
console.log("ans of assign multiply--->",f1);
f1=f1/7;
console.log("ans of assign division--->",f1);
f1=f1%7;
console.log("ans of assign modulos--->",f1);
// comparssion operators////
// equal to==//
let f2=34;
let f3="34";
 let f4=(f2==f3);
console.log("ans of equal to--->",f4);
let f5="98";
let f6="87";
let f7=(f5==f6);
console.log("ans of equal to--->",f7);
// equal to && type ===///
console.log("*****************");
let f8="87";
let f9=87;
let f10=(f8===f9);
console.log("ans of equal to && type  --->",f10);
let f11="87";
let f12="87";
let f13=(f11===f12)
console.log("ans of equal to && type  --->",f13);
// not equal to !=///
console.log("***********");
let f14="65";
let f15=65;
let f16=(f14!=f15);
console.log("ans of not equal to-->",f16);
let f17="65";
let f18=76;
let f19=(f17!=f18);
console.log("ans of not equal to-->",f19);
// not equal to && type !==///
console.log("***************");
let f20=76;
let f21="76";
let f22=(f20!==f21);
console.log("ans of not equal to && type --->",f22);
let f23="76";
let f24="76";
let f25=(f23!==f24);
console.log("ans of not equal to && type ---",f25);
// grater then > and greater equal to >=///
console.log("******************");
let f26=54;
let f27=56;
let f28=(f26>f27);
console.log("ans of greater then-->",f28);
let f29=54;
let f30=50;
let f31=(f29>f30);
console.log("ans of greater then-->",f31);
// and greater equal to >=///
console.log("******************");
let f32=54;
let f33=56;
let f34=(f32>=f33);
console.log("ans of greater then-->",f34);
let f35=50;
let f36=50;
let f37=(f35>=f36);
console.log("ans of greater then-->",f37);
// less than < and less equal to <=///
console.log("***********************");
let k=34;
let k1=30;
let k2=(k<k1);
console.log("ans of less than --->",k2);
let k3=34;
let k4=39;
let k5=(k3<k4); 
console.log("ans of less than --->",k5);
// less than equal tp<=
let k6=98;
let k7=87;
let k8=(k6<=k7);
console.log("ans of less than equal to --->",k8);
let k9=90;
let k10=98;
let k11=(k9<=k10);
console.log("ans of less than equal to --->",k11);
console.log("*********************************");
// logical operators//////
// and,or and not operators///
// and operators/////
console.log("and operator");
console.log(3<2 && 4<3);
console.log(3<2 && 4>3);
console.log(4>3 && 2>3);
console.log(4>3 && 5>4);
// **************************
console.log("aur operator");
console.log(3>2 || 2>1);
console.log(3>2 || 2>3);
console.log(2>3 ||3>1);
console.log(2>3 || 1>2);
// *************************
// not operators///
console.log("*****************");
console.log("not operator");
let g1=8<7;
console.log(!g1);
console.log("not with or operator");
console.log(2>1 || !(3<4));
console.log("not with and operator");
console.log(2>1 && !(1<2));
// Bitwise operators////
// and,or,xor,not operators
console.log("*****************************");
// and operator
let g2=14;
let g3=12;
console.log(14&12);//12-----and
console.log(14|12);//14-----or
console.log(14^12);//2----xor
console.log(!(14&12));//false----not
console.log(14<<2);//56---zero fill right shift
console.log(14>>2);///3---zero fill left shift
console.log(14>>3);//1---zero fill left shift
console.log(14<<3);//112--zero fill right shift
// Conditional Statements////
// if statements/////
// if statement mea agr condution true hai  to yeh kam hona chayieye bss is mea yeh nii hai k agr yeh condition nii hai to yeh ho bss aik rule hai yeh hai condition hai to yeh ho jaya.////
console.log("**********************");
console.log("// example 1");
let color;
let mode="dark";
if(mode==="dark"){
 color="black"
 console.log("your mode is--",color);
}
console.log("example2");
let season;
let sun="appear";
if(sun==="appear"){
season="summer"
console.log("your summer is--",season);
}
console.log("example 3");
let grade;
let marks=90;
if(marks===90){
grade="A"
console.log("YOUR GRADE IS--",grade);
}
// if -else statements/////
////is mea condition true hai to yeh hona chayieye lahkin agr yeh condition true ni hai to else mea jo lihka ho ga wo print ho ga/////
console.log("if-else statments");
let color1;
let mode1="light";
if(mode1==="dark"){
color1="black"
console.log("your color is---",color1);
}
else{
    color1="white"
console.log("your color is ---",color1);
}
// example 2//
console.log("example 2");
let vote;
let age=30;
if (age<=18) {
    vote="you are able for vote."
    console.log("you are able for vote.");
} else {
    console.log("you are not able for vote.");
}
console.log("example 3");
let number=prompt("enter your number")
if (number%2==0) {
    console.log("even number");
} 
else {
    console.log("odd number");
}
/********************** */
console.log("*********************");
let password=prompt("enter your password")
if (password===12345) {
    console.log("login");
} else {
    console.log("wrong password");
}
// }**********************
console.log("else-if Statement");
let marks2=prompt("enter your number")
if(marks2>=60 && marks2<70){
console.log("garde=b");
}
else if(marks2>=50&& marks2<60){
console.log("garde=c");
}
else if(marks2>=40 && marks2<50 ){
console.log("garde=e");
}
else{
    console.log("garde=f");
}
// example2
console.log("example 2");
let fruit=prompt("enter you fruit---");
if(fruit==="apple"){
console.log("red");
}
else if(fruit==="mango"){
console.log("yellow");
}
else if(fruit==="grapes"){
    console.log("light green")
}
else{
    console.log("your fruit is wrong");
}
// nested if'''''
console.log("nested if----");
let number3=prompt("enter your number3");
if (number3>0) {
    console.log("number is positive----->",number3,"the power of its 2 is-->",number3**2);
    if (number3%3==0 ) {
        console.log("we get number3--",number3);
    } else {
        console.log("we fail");
    }
    if (number3%2==0) {
        console.log("number is even");
    }
    else{
        console.log("number is odd");
    }
    
}
else{
    console.log("number is negative---");
    if (number3%3==0) {
        console.log("the number is divisble by 3");
    } else {
      console.log("the number is not divisble by 3");  
    }
}
// example 2///
console.log("example 2");
let email=prompt("enter yourrrr mail--")
if (email==="kashaf4@gmail.com") {
    console.log("your email is correct");
    let password2=prompt("enter your password---")
    if (password==="k786") {
        console.log("your password is correct");
    } else {
        console.log("your password is incorrect");
    }

    let confirmpassword=prompt("enter your confirm password-----")
    if (confirmpassword==="k786") {
        console.log("your confirm password is correct");
    } else {
        console.log("your confirm password is incorrect");
    }
} else {
    console.log("your email is incorrect---");
    let password2=prompt("enter your password2--")
    if (password2==="a420") {
        console.log("your password is correct");
    } else {
        console.log("your password is incorrect");
    }
}




 














