document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const heightInput = document.querySelector('#height');
    const weightInput = document.querySelector('#weight');
    const results = document.getElementById('results');
    const message = document.getElementById('message');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        calculateBMI();
    });

    heightInput.addEventListener('input', calculateBMI);
    weightInput.addEventListener('input', calculateBMI);

    function calculateBMI() {
        const height = parseInt(heightInput.value);
        const weight = parseInt(weightInput.value);

        if (isNaN(height) || height <= 0) {
            results.innerHTML = "Please provide a valid height";
            message.innerHTML = "";
        } else if (isNaN(weight) || weight <= 0) {
            results.innerHTML = "Please provide a valid weight";
            message.innerHTML = "";
        } else {
            const bmi = (weight / (height * height) * 10000).toFixed(2);
            results.innerHTML = `<span>${bmi}</span>`;
            if (bmi < 18.6) {
                message.innerHTML = "You are underweight";
            } else if (bmi >= 18.6 && bmi < 24.9) {
                message.innerHTML = "You are normal";
            } else {
                message.innerHTML = "You are overweight";
            }
        }
    }
});
