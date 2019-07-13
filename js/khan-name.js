
document.getElementById('myform').onsubmit =
function akanName() {
var birth = document.getElementById('birth').value;
alert('Your date of birth is ' + birth);
var CC, YY, MM, DD;
var CC = dob.slice(0,2);
var YY = dob.slice(2,4);
var MM = dob.slice(5,7);
var DD = dob.slice(8,10);


var male= ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];

var female = ["Akosu", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

var dayOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednsday", "Thursday", "Friday", "Saturday"];

var dayCalculate = parseInt(((CC / 4) - 2 * CC - 1) + ((5 * YY / 4)) + ((26 * (MM + 1) / 10))) % 7;

var gender = document.getElementById('genders').value;
   if (document.getElementById('male').checked) {
        gender = document.getElementById('male').value;
       // var maleName = male[dayCalculate - 1]
       // var day = dayOfTheWeek[dayCalculate -1]
       // alert(" Since you were born on " + day + " Your name is "+maleName);
       }
       else if ( gender = document.getElementById('female').checked) {
        gender = document.getElementById('female').value;

        alert(" Since you were born on " + dayOfTheWeek + " Your name is "+ female);
           // var femaleName = female[dayCalculate -1]
           // var day = dayOfTheWeek[dayCalculate - 1]
           // alert(" Since you were born on " + day + " Your name is "+ femaleName);
       }
}
document.getElementById('result').innerHTML = akanName;
