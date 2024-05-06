function volume_sphere(radiusVal) {
    //Write your code here

	 if (isNaN(radiusVal) || radiusVal <= 0) {
        return NaN; // Return NaN if the input is not a number or is negative
    }
	let volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
    return volume;
  
} 

let radius = document.document.getElementById("radius");
let radiusVal = parseFloat(radius.value)

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
