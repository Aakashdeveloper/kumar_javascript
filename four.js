//Es5
function isEven(a){
    var x = 10;
    if(a%2==0){
        console.log("number is even")
    }else{
        console.log("number is odd")
    }
}

isEven(3)


function add(a,b){
    return a+b
}

add(1,4)

var add = function(){
    return a+b
}

//Es6

var add = (a,b) => {return a+b}

var ages = [32, 33, 16, 40];



function myFunction() {
    document.getElementById("demo").innerHTML = ages.filter((age)=>{return age>18});
}