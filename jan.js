
//Write a JavaScript program to display the current day and time in the following format.


//Get The Current Date and Time
var today=new Date();

//Get the day of the week as a number (0-6,where 0 is Sunday and 6 is Saturday)
var day=today.getDay();

//Array of day names
var daylist=["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];

//Display the current day
console.log("Today is : "+daylist[day]+".");

//Get the current hour,minute, and second
var hour=today.getHours();
var minute=today.getMinutes();
var second=today.getSeconds();

//Determine if its AM or PM
var prepand=(hour>=12)?" PM ":" AM ";

//Convert the hour to 12-hour format
hour=(hour>=12)?hour-12:hour;

//If hour is 0, set it to 12
hour=(hour===0)?12:hour;

//Display the current time
console.log("Current Time : "+hour+prepand+minute+" : "+second);


