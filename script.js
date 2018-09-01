/*******************************
 * TIP CODE
 *******************************/

let person1, height, mass, date, BMI, BMIHist, dateHist;

height = 0; //heigth in meters
mass = 0;  //mass in kilograms
BMIHist = [];
dateHist = [];

console.log(new Date());
document.getElementById("datePicker").defaultValue = "2018-01-09"

function calcBMI(mass, height) {
  BMI = mass / (height * height);
  return BMI
};

document.querySelector('.button').addEventListener('click', function(){
  height = document.querySelector('.height').value; //height in meters
  mass = document.querySelector('.weight').value;  //mass in kilograms 
  date = document.querySelector('.date').value; //date
  person1 = document.querySelector('.name').value; //name

  calcBMI(mass, height);
  BMIHist.push(BMI);
  dateHist.push(date);

console.log(calcBMI(mass, height));
console.log(date);
document.querySelector('#result').textContent = `El BMI de ${person1} es ${BMI}`;

// CHART
  new Chart(document.getElementById("line-chart"), {
    type: 'line',
    data: {
      labels: [dateHist[0],dateHist[1],dateHist[2],dateHist[3],dateHist[4]],
      datasets: [{ 
          data: [BMIHist[0],BMIHist[1],BMIHist[2],BMIHist[3],BMIHist[4]],
          label: person1,
          borderColor: "#3e95cd",
          fill: false
        }]
    },
    options: {
      title: {
        display: true,
        text: 'Historic BMI'
      }
    }
  });
});





