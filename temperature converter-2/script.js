function convertTemperature() {
    var temperature = document.getElementById("inputTemp").value;
    var unit = document.getElementById("unitSelect").value;
    var result = document.getElementById("result");
    var errorMessage = document.getElementById("errorMessage");
  
    if (!temperature) {
      errorMessage.textContent = "Please enter a temperature value.";
      result.textContent = "";
      return;
    } else {
      errorMessage.textContent = "";
    }
  
    temperature = parseFloat(temperature);
  
    if (unit === "celsius") {
      if (temperature < 12) {
        result.innerHTML = "Fahrenheit: " + ((temperature * 9/5) + 32).toFixed(2) + "°F<br>" +
                          "Kelvin: " + (temperature + 273.15).toFixed(2) + "K";
        result.classList.add('cold');
        result.classList.remove('hot');
      } else if (temperature > 30) {
        result.innerHTML = "Fahrenheit: " + ((temperature * 9/5) + 32).toFixed(2) + "°F<br>" +
                          "Kelvin: " + (temperature + 273.15).toFixed(2) + "K";
        result.classList.add('hot');
        result.classList.remove('cold');
      } else {
        result.innerHTML = "Fahrenheit: " + ((temperature * 9/5) + 32).toFixed(2) + "°F<br>" +
                          "Kelvin: " + (temperature + 273.15).toFixed(2) + "K";
        result.classList.remove('hot', 'cold');
      }
    }
  }