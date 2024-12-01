let marksMass = 95;
let marksHeight = 1.88;
let johnMass = 85;
let johnHeight = 1.76;

marksBMI = marksMass / (marksHeight * marksHeight);
johnsBMI = johnMass / (johnHeight * johnHeight);

let markHigherBMI = marksBMI > johnsBMI;

// console.log(markHigherBMI);
if(marksBMI > johnsBMI){
    // console.log("Mark's BMI is higher than John's!");
    console.log(`Mark's BMI (${marksBMI.toFixed(2)}) is higher than John's BMI (${johnsBMI.toFixed(2)})`);
}
else{
    // console.log("John's BMI is higher than Mark's!");
    console.log(`John's BMI (${johnsBMI.toFixed(2)}) is higher than Mark's BMI (${marksBMI.toFixed(2)})`);
}