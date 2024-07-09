const kelvin_value = document.getElementById('kelvin_value').value
const result = document.getElementById('result1')
const celsius_value = document.getElementById('celsius_value').value

function convertToCelsius(){
let celsius =kelvin_value - 273
document.getElementById('display1').innerHTML =  `THE TEMPERATURE IN CELSIUS IS ${celsius}`
}
function convertToKelvin(){
    let kelvin = celsius_value + 273
    document.getElementById('display2').innerHTML=`THE TEMPERATURE IN KELVIN  IS ${kelvin}`
    if(celsius_value===""){
          display2.innerHTML ="incorect value , please enter valid in put"
    }else{
        document.getElementById('display2').innerHTML=`THE TEMPERATURE IN KELVIN  IS ${kelvin}` 
    }
    }
