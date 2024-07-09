const kelvin_value = document.getElementById('kelvin_value').value
const result = document.getElementById('result')

function convertToCelsius(){
let celsius =kelvin_value - 273
document.getElementById('display').innerHTML =  `THE TEMPERATURE IN CELSIUS IS ${celsius}`
}