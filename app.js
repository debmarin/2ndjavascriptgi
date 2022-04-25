//very easy
function min(x, y){
    if (x > y){
        return y;
    }
    else if (y > x){
        return x;
    }
}
console.log(min(4,7))
//easy
let students = [
    ['Jack', 'Johnson', 24],
    ['Sara', 'Peters', 23], 
    ['Peter', 'Mayor', 24]
    ];
    
console.log(`Hello my name is ${students[1][0]} ${students[1][1]} and I am ${students[1][2]} years old.`)
//medium
let months = {
    '1': 'January',
    '2': 'February',
    '3': 'March',
    '4': 'April',
    '5': 'May',
    '6': 'June',
    '7': 'July',
    '8': 'August',
    '9': 'September',
    '10': 'October',
    '11': 'November',
    '12': 'December',
}
let choose = prompt("Enter a number to get it's corresponding month");
if (months[choose]) {
    alert(months[choose])
}
else {
alert("Invalid Number")
}
//hard
let tomHeight = 9
let tomMass = 8
let jerryHeight = 10
let jerryMass = 45
let tomBMI = tomMass/(tomHeight*tomHeight)
let jerryBMI = jerryMass/(jerryHeight*jerryHeight)
let a = Boolean(tomBMI>jerryBMI)
console.log(`Is Tom's BMI higher than Jerry's BMI? ${a}`)
