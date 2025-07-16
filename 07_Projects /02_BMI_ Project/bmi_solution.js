const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (isNaN(height) || height <= 0) {
    results.innerHTML = 'Please provide a valid height';
    return;
  }

  if (isNaN(weight) || weight <= 0) {
    results.innerHTML = 'Please provide a valid weight';
    return;
  }

  // convert height from cm to meters
  const heightInMeters = height / 100;
  const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(2);

  let category = '';
  if (bmi < 18.6) {
    category = 'Underweight';
  } else if (bmi > 24.9) {
    category = 'Overweight';
  } else {
    category = 'Normal Range';
  }

  results.innerHTML = `<span>Your BMI is ${bmi} (${category})</span>`;
  console.log(category);
});
