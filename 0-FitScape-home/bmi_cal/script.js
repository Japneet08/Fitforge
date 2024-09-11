let weightSlider = document.getElementById("myWeight");
let weightOutput = document.getElementById("inputWeight");

let heightSlider = document.getElementById("myHeight");
let heightOutput = document.getElementById("inputHeight");

weightOutput.innerHTML = weightSlider.value;
heightOutput.innerHTML = heightSlider.value;

weightSlider.oninput = function () {
  weightOutput.innerHTML = this.value;
}
heightSlider.oninput = function () {
  heightOutput.innerHTML = this.value;
}

function showValWeight(newVal) {
  weightSlider.value = newVal;
};

function showValHeight(newVal) {
  heightSlider.value = newVal;
};

weightSlider.addEventListener("input", updateValueWeight);
heightSlider.addEventListener("input", updateValueHeight);
function updateValueWeight(e) {
  weightOutput.value = e.srcElement.value;
}
function updateValueHeight(e) {
  heightOutput.value = e.srcElement.value;
}

function calculateBmi() {
  let weight = document.bmiForm.realweight.value;
  let height = (document.bmiForm.realheight.value) / 100;
  let realbmi = (weight) / Math.pow(height, 2);
  let realbmiOutput = document.getElementById("yourbmi");
  let messageOutput = document.getElementById("evaluationMessage");
  let roundedBmi = realbmi.toFixed(1);
  
  realbmiOutput.innerHTML = " " + roundedBmi;
  messageOutput.innerHTML = "";

  // Set the message based on BMI
  if (roundedBmi < 18.5) {
    messageOutput.innerHTML = "<br>Keep eating well!";
  } else if (roundedBmi >= 18.5 && roundedBmi <= 24.9) {
    messageOutput.innerHTML = "<br>You're doing great!";
  } else if (roundedBmi >= 25 && roundedBmi <= 29.9) {
    messageOutput.innerHTML = "<br>Time to get moving!";
  } else if (roundedBmi >= 30 && roundedBmi <= 34.9) {
    messageOutput.innerHTML = "<br>Let's hit the gym!";
  } else if (roundedBmi >= 35) {
    messageOutput.innerHTML = "<br>Stay strong and healthy!";
  }
}
