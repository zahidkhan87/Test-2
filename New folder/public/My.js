// to find a number in array

var matchFound = false;
var arr = [1,2,3,4,5,6,7,8,9,0,1,2,3,6,7,0,1,2,4,5,6,7,8,9,0,1,2,3,4,5,6,];
for (i = 0; i < arr.length; i++){
for (j = 0; j < arr.length; j++)
if (arr[i] === 2 && arr[j] === 5){
matchFound = true;
}
}
console.log(matchFound);

// to find number of a number in array

var matchFound = 0;
var arr = [1,2,3,4,5,6,7,8,9,0,1,2,3,6,7,0,1,2,4,5,6,7,8,9,0,1,2,3,4,5,6,];
for (i = 0; i < arr.length; i++){
if (arr[i] === 2 ){
matchFound++;
}
}
console.log(matchFound);

// find number with indexOf

var matchFound = false;
var arr = [1,2,3,4,5,6,7,8,9,0,1,2,3,6,7,0,1,2,4,5,6,7,8,9,0,1,2,3,4,5,6,];
var num = arr.indexOf(2);
if (num !== -1) {
matchFound = true;
}
console.log(matchFound);

// to find multiple number

var toFind = [2,4,5,30,50];
var array = [1,2,3,4,5,6,7,8,9,0,1,2,3,6,7,0,1,2,4,5,6,7,8,9,0,1,2,3,4,5,6,];
 for (var i = 0; i < toFind.length; i++) {
for (j = 0; j < array.length; j++)
 if (indexOf.toFind[i] === indexOf.arr[j]) {
    toFind--;    
}
 }
console.log(toFind);

// to get day

var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var now = new Date();
var theDay = now.getDay();
var nameOfToday = dayNames[theDay];
console.log(nameOfToday);

// to get month

var d = new Date();
var currentMonth = d.getMonth();
console.log(currentMonth);

// to get year

var d = new Date();
var currYr = d.getFullYear();
console.log(currYr);

// to get hours, minutes, seconds, m.seconds, time

var d = new Date();
var currentHrs = d.getHours();
var currMins = d.getMinutes();
var currSecs = d.getSeconds();
var currMills = d.getMilliseconds();
var millsSince = d.getTime();
console.log("Current time is" + " " + currentHrs + ":" + currMins + ":" + currSecs);


// for estimated date

var myBirthDat = new Date("July 15, 1987");
var dayGone = myBirthDat.getTime();
var msToday = new Date();
var msDiff = dayGone - msToday;
var dDiff = msDiff / (1000 * 60 * 60 * 24);
dDiff = Math.floor(dDiff);
console.log(dDiff);

// for days left

var today = new Date();
var msToday = today.getTime();
var doomsday = new Date("December 30, 2016");
var msDoomsday = doomsday.getTime();
var msDiff = msDoomsday - msToday;
var dDiff = msDiff / (1000 * 60 * 60 * 24);
dDiff = Math.floor(dDiff);
console.log(dDiff);

//or

var msDiff = new Date("November 30, 2016").getTime() - new Date().getTime();
var daysTillDoom = Math.floor(msDiff / (1000 * 60 * 60 * 24));
console.log(daysTillDoom);

// table

function table() {
    var a = prompt('Enter Any Num');
    for (var i = 1; i <= 20; i++) {
        document.write(a + " x " + i + ' = ' + (a * i) + '<br>');
    }
}

// Fibonacci Series

var number = Number(prompt("Enter Fibonacci series limit"));
var firstDigit = 0;
var secondDigit = 1;
var nextDigit;
for(var i = 0; i < number; i++) {
    if(i == 0) {
        document.write(firstDigit + "<br>");
        continue;
    }
    if (i == 1) {
        document.write(secondDigit + "<br>");
        continue;
    }
    next = firstDigit + secondDigit;
    firstDigit = secondDigit;
    secondDigit = nextDigit;
    document.write(nextDigit + "<br>");
}

// Diamond pattern
function pattern( num ) 
{
    num = parseInt(num,5);

    var i, space;

    document.write("")
    document.write(" <pre>");

    for(i = 1; i <= num; i++ )
    {
        
        for ( space = 1; space <= num-i; space++ )
        {
            document.write(" ");
        }
        
        for ( space = 1; space <= i; space++ )
        {
            document.write("*");
        }
        document.write("\n");
    }
   
    for(i = num-1; i >= 1; i-- )
    {
       
        for ( space = 1; space <= num-i; space++ )
        {
            document.write(" ");
        }
        
        for ( space = 1; space <= i; space++ )
        {
            document.write(" *");
        }
        document.write("\n");
    }
}

pattern(30);

// find multiple numbers
var matchFound = "False"
var numToFind = [2,5,6];
var numbers = [1,2,3,4,5,6,1,2,3,4,5,6,1,2,3,4,5,6,1,2,3,4,5,6,1,2,3,4,5,6];
for (var i = 0; i < numToFind.length; i++) {
    
        }
    
console.log(matchFound);
