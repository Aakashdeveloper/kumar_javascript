var a = [1,2,3,4,5,6]
var a= ["a","b","c"]
var c = [1,2,"vf",3,4,"eds","ds",true,true]

var a =[1,2,3,"sdf","DS",5,true,"d"]
undefined
a[0]
1
a[4]
"DS"
a[0]
1
a[5]
5
a.length
8

var a =[1,2,3,"sdf","DS",5,true,"d"]
undefined
a.push(10)
9
a
(9) [1, 2, 3, "sdf", "DS", 5, true, "d", 10]
a.push("kumar")
10
a
(10) [1, 2, 3, "sdf", "DS", 5, true, "d", 10, "kumar"]
a.pop(5)
"kumar"
a
(9) [1, 2, 3, "sdf", "DS", 5, true, "d", 10]
a.pop()
10
a.pop(8)
"d"
a
(7) [1, 2, 3, "sdf", "DS", 5, true]
a.pop(8)
true
a
(6) [1, 2, 3, "sdf", "DS", 5]

var a = [1,2,3,4,5]
undefined
a.unshift("kumar")
6
a
(6) ["kumar", 1, 2, 3, 4, 5]
a.unshift("apple")
7
a
(7) ["apple", "kumar", 1, 2, 3, 4, 5]
a.shift()
"apple"
a
(6) ["kumar", 1, 2, 3, 4, 5]

var a = [1,2,3,4,5]
undefined
a.slice(2,4)
(2) [3, 4]
a.splice(2,0,"audi","bmw","mrc")
[]
a
(8) [1, 2, "audi", "bmw", "mrc", 3, 4, 5]
a.splice(2,1,"apple","mango")
["audi"]
a
(9) [1, 2, "apple", "mango", "bmw", "mrc", 3, 4, 5]

var a = [1,2,3,4,5]
undefined
a.indexOf(3)
2
a.indexOf(5)
4
a.indexOf(8)
-1
a.indexOf("kumar")
-1

var a = [1,2,3,4]
var b = ["A","b","c","d"]
var c = ["x",1,"y",2]


var a = [1,2,3,4]
var b = ["A","b","c","d"]
var c = ["x",1,"y",2]
undefined
a+b
"1,2,3,4A,b,c,d"
a.concat(b)
(8) [1, 2, 3, 4, "A", "b", "c", "d"]
a.concat(b,c)
(12) [1, 2, 3, 4, "A", "b", "c", "d", "x", 1, "y", 2]
c.concat(a,b)
(12) ["x", 1, "y", 2, 1, 2, 3, 4, "A", "b", "c", "d"]

var a = 1
undefined
var b = ""+a
undefined
b
"1"
parseInt(b)
1

