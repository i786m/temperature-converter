const celsius = document.querySelector('#c');
const fahrenheit = document.querySelector('#f');
const kelvin = document.querySelector('#k');

function convertC() {
    let c = parseFloat(celsius.value);
    let f = (c * 1.8) + 32;
    let k = c + 273.15;
    fahrenheit.value = f.toFixed(2);
    kelvin.value = k.toFixed(2);
  }

function convertF(){
    let f = parseFloat(fahrenheit.value);
    let c = (f - 32) * (5 / 9);
    let k = (f + 459.67) * (5 / 9);
    celsius.value = c.toFixed(2);
    kelvin.value = k.toFixed(2);
  }

function convertK() {
    let k = parseFloat(kelvin.value);
    let c = k - 273.15;
    let f = 1.8 * (k - 273) + 32;
    
    fahrenheit.value = f.toFixed(2);
    celsius.value = c.toFixed(2);
  }

function convertAll(){
    celsius.addEventListener('input', convertC);
    fahrenheit.addEventListener('input', convertF);
    kelvin.addEventListener('input', convertK);
}
convertAll()