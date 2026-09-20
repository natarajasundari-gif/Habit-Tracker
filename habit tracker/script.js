/* GET THE DATE */
var date=new Date();
console.log(date);
/* EXTRACT RHE CURRENT DATE INFO */
var currentMonth=date.getMonth();
var currentDay=date.getDay();
var currentDate=date.getDate();
var currentYear=date.getFullYear();
console.log(currentDate);
console.log(currentDay);
console.log(currentMonth);
console.log(currentYear);
/*IMPORTANT DATE INFO */
var months=["January","February","March","April","May","June","July","August","September","October","November","December"];
/* SET THE CORRECT MONTH */
var title = document.getElementById("title");
title.innerHTML="💛"+months[currentMonth]+"💛";
/* UPDATE THE CALENADAR INFO */
var habitTitle=document.getElementById("habitTitle");
habitTitle.onclick=function(){
    let habits=prompt("What's your habit?",habitTitle.innerHTML);
    if(habits==null||habits.length==0){
        habitTitle.innerHTML="Click to set your habit";
    }
    else{
        habitTitle.innerHTML=habits;
    }
}
/* SET THE TOTAL DAYS */
if((currentYear%4==0&&currentYear%100!=0)||currentYear%400==0){
    var daysInTheMonthList=[31,29,31,30,31,30,31,31,30,31,30,31];
}
else{
    var daysInTheMonthList=[31,28,31,30,31,30,31,31,30,31,30,31];
}
var daysInThisMonth=daysInTheMonthList[currentMonth];
var daysCompleted=0;
var totalDays=document.getElementById("totalDays");
/* SETUP THE CALENDAR DAYS */
var dayCount=0;
var rowCount=0;
var days=document.getElementsByClassName("days");

for (var i=0; i<days.length; i++){
    var day=days[rowCount].getElementsByClassName("day");

    for (var j=0; j<day.length; j++){
        if(dayCount<daysInThisMonth){
            day[j].innerHTML=dayCount+1;
            day[j].setAttribute("style","background-color: #fdfac8; border:2px solid black;");
            day[j].setAttribute("id","day"+(dayCount+1));

            dayCount++;
        }
        else{
            day[j].innerHTML="";
            day[j].setAttribute("style","background-color:white");
        }
    }

    rowCount++;
}

var completed=new Array(31);

for(var i=0;i<dayCount;i++){
    var tempString=""+(currentMonth+1)+"-"+(i+1)+"-"+currentYear;
    console.log("storing date:"+tempString);

    var tempDay=localStorage.getItem(tempString);
    console.log(tempDay);

    if(tempDay==null||tempDay=="false"){
        localStorage.setItem(tempString,"false");
    }
    else if(tempDay=="true"){
        daysCompleted++;
    }

    totalDays.innerHTML=daysCompleted+"/"+daysInThisMonth;
}

console.log("completed array: "+completed);
console.log("total days completed: ",daysCompleted);

/*CHECK STORAGE AD UPDATE COMPLETED ARRAY */
for(var i=0;i<currentDate;i++){
    var tempString=""+(currentMonth+1)+"-"+(i+1)+"-"+currentYear;
    console.log(tempString);

    var chosenDay=localStorage.getItem(tempString);
    console.log(i+1+": "+chosenDay);

    var chosenDayDiv=document.getElementById("day"+(i+1));

    if(chosenDay==="true"){
        chosenDayDiv.style.backgroundColor="#fdfac8";
    }
    else if(chosenDay==="false"){
        chosenDayDiv.style.backgroundColor="white";
    }
}

var dayDivs=document.querySelectorAll(".day");

for(var i=0;i<currentDate;i++){
    dayDivs[i].onclick=function(e){

        var num=e.target.innerText;

        if(num==""){
            return;
        }

        var selectDate=document.getElementById(e.target.id);
        var storageString=""+(currentMonth+1)+"-"+num+"-"+currentYear;

        if(localStorage.getItem(storageString)==="false"){
            selectDate.style.backgroundColor="#fdfac8";
            localStorage.setItem(storageString,"true");
            daysCompleted++;
        }
        else if(localStorage.getItem(storageString)==="true"){
            selectDate.style.backgroundColor="white";
            localStorage.setItem(storageString,"false");
            daysCompleted--;
        }

        totalDays.innerHTML=daysCompleted+"/"+daysInThisMonth;

        console.log(daysCompleted,currentDate);

        if(daysCompleted===currentDate){
            alert("great progress");
        }
    }
}

/*RESET BUTTON*/
var resetButton=document.querySelector(".reset");

resetButton.onclick=function(){
    for(var i=0;i<dayCount;i++){
        var tempString=""+(currentMonth+1)+"-"+(i+1)+"-"+currentYear;
        console.log(tempString);

        localStorage.setItem(tempString,"false");

        var curDay=document.getElementById("day"+(i+1));

        curDay.style.backgroundColor="white";
    }

    daysCompleted=0;
    totalDays.innerHTML=daysCompleted+"/"+daysInThisMonth;
};