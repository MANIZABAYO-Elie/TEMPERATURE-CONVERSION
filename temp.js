const kelvinInput = document.getElementById('kelvinInput').value;
const result = document.getElementById('result')

function convertToCelsius() {
    
    const kelvinInput = document.getElementById('kelvinInput').value;
    const celsius = kelvinInput - 273.15;
    if(kelvinInput===""){
     document.getElementById('display1').innerText= "incorrect value, please enter valid value"  
    }else{
        document.getElementById('result').innerText = `Temperature in Celsius: ${celsius.toFixed(2)}°C`;   
    }

}
    /*function convertToCelsius(){
let celsius =kelvin_value - 273
document.getElementById('display1').innerHTML =  `THE TEMPERATURE IN CELSIUS IS ${celsius}`
}
*/
function convertToKelvin(){
    const celsiusInput = document.getElementById('celsiusInput').value
    let kelvin = (celsiusInput)+(273);
    document.getElementById('display2').innerText=kelvin
}
