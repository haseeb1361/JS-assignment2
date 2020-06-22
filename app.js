////////
//chapter21-25
////////

alert("chapter21-25")
//////
alert("task1")
////
//task1
var first_name = prompt("enter first name");
var last_name = prompt("enter last name");
var full_name = (first_name + " " + last_name);
document.write("</br>")
document.write("chapter21-25")
document.write("</br>")
document.write("task1")
document.write("</br>")
document.write(full_name);
document.write("</br>")
////
alert("task2")
//////
//task2
document.write("task2")
document.write("</br>")
var name = "pakistani";
document.write("String: Pakistani ")
document.write("</br>")
document.write("Index of 'n' is  ")
document.write(name.indexOf("n"))
document.write("</br>")
alert("task3")
//////
//task3
document.write("task3")
document.write("</br>")
var name = "Hello World";
document.write("String: Hello World ")
document.write("</br>")
document.write("Last Index 'l' is:  ")
document.write(name.lastIndexOf("l"))

document.write("</br>")
alert("task4")
//////
//task4
document.write("task4")
document.write("</br>")
var name = "pakistani";
document.write("String: Pakistani ")
document.write("</br>")
document.write("Char at index '3' is: ")
document.write(name.charAt(3))
document.write("</br>")
document.write("</br>")
alert("task5")
////
//task5
document.write("task5")
document.write("</br>")
var text = "hyderabad";
document.write("City: hyderabad ")
document.write("</br>")
var indexno = text.indexOf('hyder')
var firsttext  = text.slice(0,indexno)
var replacingtext = ('islam')
var text2 = text.slice(indexno+5)
document.write("After Replacment: ")
document.write(firsttext+replacingtext+text2)
document.write("</br>")
document.write("</br>")
alert("task6")
////
//task6
////
document.write("task6")
document.write("</br>")
var message = 'Ali and Sami are best friends. They play cricket and football together'
document.write("After Replacment: ")
document.write("</br>")
var newText = message.replace(/and/g, "&");
document.write(newText)
document.write("</br>")
alert("task7")
////
//task7
document.write("task7")
document.write("</br>")
var str_t = +"472"
document.write("value: ")
document.write(str_t)
document.write("</br>")
document.write("Type: ")
document.write("String ")
document.write("</br>")
var no_t = "472"
document.write("value: ")
document.write(str_t)
document.write("</br>")
document.write("Type: ")
document.write("Number")
document.write("</br>")
alert("task8")
////
//task8
////
document.write("task8")
document.write("</br>")
var letter = prompt("enter letter ")
var complete_letter = letter.slice(0,letter.length)
document.write("User Input: ")
document.write(letter);
document.write("</br>")
document.write("Upper Case: ")
complete_letter = complete_letter.toUpperCase();
document.write(complete_letter);
document.write("</br>");
document.write("</br>")
alert("task9")
////
//task9
///
document.write("task9")
document.write("</br>")
var title = "javascript"
document.write(title)
document.write("</br>")
first_char = title.slice(0,1)
first_char = first_char.toUpperCase();
var other_char = title.slice(1);
other_char = other_char.toLowerCase();
var complete_letter = first_char + other_char;
document.write(complete_letter)
////////
//chapter26-30
////////
alert("chapter26-30")
//////
alert("task1")
////
//task1
document.write("task1")
document.write("chapter26-30")
document.write("task1")
var int_val = +prompt("Enter integer value")
document.write("Number: ")
document.write(int_val)
document.write("</br>")
document.write("Round Off value is: ")
var round = Math.round(int_val)
document.write(round)
document.write("</br>")
document.write("Ceil value is: ")
var round = Math.ceil(int_val)
document.write(round)
document.write("</br>")
document.write("Round value is: ")
var round = Math.floor(int_val)
document.write(round)
document.write("</br>")
//////
alert("task2")
////
//task2
document.write("task2")
document.write("</br>")
var int_val = +prompt("Enter integer value")
document.write("Number: ")
document.write(int_val)
document.write("</br>")
document.write("Round Off value is: ")
var round = Math.round(int_val)
document.write(round)
document.write("</br>")
document.write("Ceil value is: ")
var round = Math.ceil(int_val)
document.write(round)
document.write("</br>")
document.write("Round value is: ")
var round = Math.floor(int_val)
document.write(round)
document.write("</br>")
////
alert("task3")
////
//task3
document.write("task3")
document.write("</br>")
document.write("Random value of Dice is: ")
var randm = Math.random()*8
var round = Math.round(randm)
document.write(round)
document.write("</br>")
document.write("Random value of Dice is: ")
var randm = Math.random()*16
var round = Math.round(randm)
document.write(round)
document.write("</br>")
////
alert("task4")
////
//task4
document.write("task4")
document.write("</br>")
var heads = "Random Coin Value is:heads "
var Tails = "Random Coin Value is:tails "
var toss = Math.random()*2;
var floor = Math.floor(toss)
if(floor === 0){
    document.write("2"+"<br>"+"random coins value: Heads")
} else if(floor === 1){
    document.write("1"+"<br>"+"random coins value: Tails")
}
document.write("</br>")
////
alert("task5")
////
//task5
document.write("task5")
document.write("</br>")
document.write("Random number between 1 to 100 is:")
var toss = Math.random()*100;
document.write(toss)
document.write("</br>")
////
alert("task6")
//
//task6
document.write("task6")
document.write("</br>")
var Random = Math.random()*10
var round = Math.round(Random)
var storing_var = (round)
var no = prompt("enter your number")
if(no === storing_var){
    document.write("Congratulations")
}else if(no !== storing_var){
    document.write("Try Again")
}
////
//chapter31-34
////
alert("chapter31-34")
//////
alert("task1")
////
//task1
document.write("</br>")
document.write("task1")
document.write("</br>")
document.write("chapter31-34")
document.write("</br>")
var a = new Date();
document.write(a);
/////
alert("task2")
///
//task2
document.write("</br>")
document.write("task2")
document.write("</br>")
var a = new Date();
var b = a.toString()
var c = b.slice(3,7)
document.write("Current Month is: ")
document.write(c);
//
alert("task3")
///
//task3
document.write("</br>")
document.write("task3")
document.write("</br>")
var a = new Date();
var b = a.toString()
var c = b.slice(0,3)
document.write("Today is ")
document.write(c);
//
alert("task4")
///
//task4
document.write("</br>")
document.write("task4")
document.write("</br>")
var a = new Date();
var b = a.toString()
var c = b.slice(0,3)
var day1 = "Sat"
var day2 = "Sun"
if(c === day1 || c === day2 ){
  document.write("It's Fun Day")
}else if(c !== day1 || c !== day2 ){
    document.write("It's not a Fun Day")
  }
//
alert("task5")
///
//task5
document.write("</br>")
document.write("task5")
document.write("</br>")
var d = new Date();
var dayOfMonth = d.getDate();
if(dayOfMonth < 16){
  document.write("First fifteen days of the month")
}else if(dayOfMonth > 16){
  document.write("Last days of the month")
}
//
alert("task6")
///
//task6
document.write("</br>")
document.write("task6")
document.write("</br>")
var d = new Date();
var hours = d.getHours();
if(hours >= 12){
  document.write("It's PM")
}else if(hours <= 12){
  document.write("It's AM")
}
//
alert("task7")
///
//task7
document.write("</br>")
document.write("task7")
document.write("</br>")
var dob = new Date (prompt("enter your date of birth ","Jan 6,1998"))
var dobmili = dob.getTime();
var today = new Date();
var year = dob.getFullYear()
var todaymili = today.getTime();
var diff = todaymili - dobmili ;
var accurate = Math.floor(diff/(1000*60*60*24*30*12));
document.write("Your Age is: ")
document.write(accurate);
document.write("</br>")
document.write("Your Birth year is ")
document.write(year);
//
alert("task8")
///
//task8
document.write("</br>")
document.write("task8")
document.write("</br>")
var today = new Date();
var todaymili = today.getTime();
var min = (todaymili/1000*60*60)
document.write("Current Date is: ")
document.write(today)
document.write("</br>")
document.write("Elapsed Miliseconds since jan 1 ,1970: ")
document.write(todaymili);
document.write("</br>")
document.write("Elapsed Minutes since jan 1 ,1970: ")
document.write(min);
//
alert("task9")
///
//task9
document.write("</br>")
document.write("task9")
document.write("</br>")
document.write("K-Electric Bill")
document.write("</br>")
document.write("Customr Name: ")
document.write("ABC Customr")
document.write("</br>")
var a = new Date();
var b = a.toString()
var c = b.slice(3,7)
document.write("Current Month is: ")
document.write(c);
document.write("</br>")
document.write("Number Of units: ")
var unit = prompt("enter no of units")
document.write(unit)
document.write("</br>")
document.write("Number Of charges per units: ")
var charges = prompt("enter no charges per units")
document.write(charges)
document.write("</br>")
document.write("Net amount payable (within due date):  ")
var net = unit * charges;
document.write(net)
document.write("</br>")
document.write("Late payment surcharges: ")
var latecharges = +prompt("enter late payment charges: ")
document.write(latecharges)
document.write("</br>")
document.write("Gross amount payable (after due date): ")
var gross = net + latecharges;
document.write(gross)
//
alert("task10")
///
//task10
document.write("</br>")
document.write("task10")
document.write("</br>")
var a = new Date();
document.write("Current Date is: ")
document.write(a);
document.write("</br>")
var backdate = a.setFullYear(1920);
document.write("100 Years back,it was: ")
document.write(a)
///
alert("task11")
///
//task11
document.write("</br>")
document.write("task11")
document.write("</br>")
var a = new Date();
document.write("Current Date is: ")
document.write(a);
document.write("</br>")
var backdate = a.setHours(11);
document.write("1 Hour ago ,it was: ")
document.write(a)
//////
//chapter35-38
//////

alert("chapter35-38")
//////
alert("task1")
////
//task1
document.write("</br>")
document.write("chapter35-38")
document.write("</br>")
document.write("</br>")
document.write("task1")
document.write("</br>")
function greeting(dat) {
    document.write(dat)
}
var dat = new Date();
greeting(dat)
/////
alert("task2")
////
//task2
document.write("</br>")
document.write("task2")
document.write("</br>")
function name(full_name) {
    document.write(full_name)
}
var first_name = prompt("Enter First NAME ")
var last_name = prompt("Enter last NAME ")
var full_name = first_name + " " + last_name;
name(full_name);
////
alert("task3")
////
//task3
document.write("</br>")
document.write("task3")
document.write("</br>")
function add(a,b) {
    document.write(a+b)
}
var a = +prompt("Enter First no ")
var b = +prompt("Enter last no ")
//var sum = a + b;
add(a,b);

///
alert("task4")
////
//task4
document.write("</br>")
document.write("task4")
document.write("</br>")
function cal(){
var val1 = prompt("enter first value")
var sign = prompt("enter your operator")
var val2 = prompt("enter second value")
document.write("opertion of  ")
document.write(val1 + sign + val2)
document.write("<br>");
if(sign === '+'){
    document.write("result is ")
    document.write(val1 + val2)
}else if(sign === '-'){
    document.write("result is ")
    document.write(val1 - val2)
}else if(sign === '*'){
    document.write("result is  ")
    document.write(val1 * val2)
}else if(sign === '/'){
    document.write("result is ")
    document.write(val1 / val2)
}
}
cal();

///
alert("task5")
////
//task5
document.write("</br>")
document.write("task5")
document.write("</br>"); 
function calcCircumference(radius){
            document.write(2*3.14*r)
}      
        var r = +prompt("Enter radius for calcCircumference ")
        document.write("The circumference is ")
        calcCircumference(2*3.14*r) 

document.write("<br>");

function calcArea(area){
            document.write(3.14*(Math.pow(r,2)))
}      
        var r = +prompt("Enter radius for calcArea ")
        document.write("calArea is ")
        calcArea(3.14*(Math.pow(r,2)))  

///
alert("task6")
////
//task6
document.write("</br>")
document.write("task6")
document.write("</br>")
document.write("<br>"); 

var word = prompt("Enter a word ")
var check = " ";
for (var i = word.length - 1 ; i >= 0 ; i--){
    check += word[i]
}

if(word === check){
    document.write(word + "is a palindrome word")
}else if(word !== check){
    document.write(word + " is not a palindrome word ")
}

///
alert("task7")
////
//task7
document.write("</br>")
document.write("task7") 
function rectangle(width , height){
    document.write(width * height)
}
document.write("<br>")
var width = +prompt("Enter width of an rectangle ")
document.write("width of an rectangle is ")
document.write(width)
document.write("<br>")
var height = +prompt("Enter heigth of an rectangle ")
document.write("height of an rectangle is ")
document.write(height)
document.write("<br>")
document.write("Area of rectangle is ")
rectangle(width,height)

function rectangle(width,height){
    document.write(2 * 2)
}
document.write("width of an rectangle is 2 ")
document.write("<br>")
document.write("height of an rectangle is 2 ")
document.write("<br>")
document.write("Area of rectangle is ")
rectangle(2,2)
///
alert("task8")
////
//task8
///
document.write("</br>")
document.write("task8")
function square(a) {
    document.write(Math.pow(a,2))
}
var a = +prompt("value")
document.write("After Squaring a value answer is ")
square(a)
