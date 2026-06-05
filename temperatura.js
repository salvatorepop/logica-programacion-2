
let temp = prompt("Ingresa la temperatura en Celcius: ");

if (!isNaN(temp)) {
    
    let celcius = parseFloat(temp)
    let fahrenheit = (celcius * 9 /5)+ 32;
    let kelvin  = celcius + 273.15; 
    console.log(`Temperatura en Fahrenheit: ${fahrenheit} °F`);
    console.log(`Temperatura en Kelvin: ${kelvin} °K`);
} else {
    alert("El dato ingresado no es un número válido");
}



