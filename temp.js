const kelvinInput = document.getElementById('kelvinInput').value;
const result = document.getElementById('result')

function convertToCelsius() {
    
    const kelvinInput = document.getElementById('kelvinInput').value;
    const celsius = kelvinInput - 273.15;
    if(kelvinInput===""){
     document.getElementById('display1').innerText= "incorrect value, please enter valid value"  
    }else{
        document.getElementById('display1').innerText = `Temperature in Celsius: ${celsius.toFixed(2)}°C`;   
    }

}
    /*function convertToCelsius(){
let celsius =kelvin_value - 273
document.getElementById('display1').innerHTML =  `THE TEMPERATURE IN CELSIUS IS ${celsius}`
}
*/
function convertToKelvin(){
    const celsiusInput = document.getElementById('celsiusInput').value
    const kelvin = Math.floor(Number(celsiusInput)) + 273
    if(celsiusInput===""){
        document.getElementById('display2').innerText="invalid input, please enter valid value"  
    }else{
        document.getElementById('display2').innerText=kelvin
    }
    }
function convertFromFahrenheitToCelsius(){
    const fahrenheitInput = document.getElementById('fahrenheitInput').value
    const Celsius1 =(fahrenheitInput-32)*5/9
    document.getElementById('display3').innerText= `temperature in celsius ${Celsius1}`
}
