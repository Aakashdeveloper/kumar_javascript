for(i=0;i<10;i++){
    console.log(i)
}
VM390:2 0
VM390:2 1
VM390:2 2
VM390:2 3
VM390:2 4
VM390:2 5
VM390:2 6
VM390:2 7
VM390:2 8
VM390:2 9

var a = [1,2,3,4,5]
undefined
for(i=0;i<a.length;i++){
    console.log(a[i])
}
VM398:2 1
VM398:2 2
VM398:2 3
VM398:2 4
VM398:2 5

var a = 10
"10 " == 10
"10" === 10

var a  = 5 
if(a>5){
    console.log("ojkkkkk")
}else{
    console.log("not ok")
}

var a  = 5 
if(a>5){
    console.log("ojkkkkk")
}else{
    console.log("not ok")
}
VM431:5 not ok
undefined
var a  = 5 
if(a==5){
    console.log("ojkkkkk")
}else{
    console.log("not ok")
}
VM434:3 ojkkkkk


var a = 32767
if(a%2==0){
    console.log("number is even")
} else if(a%3 == 0 && a%5==0){
    console.log("number is divisble by 3")
}
else{
    console.log("number is odd")
}

/* ternary javascript*/