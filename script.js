function volume_sphere() {
    //Write your code here

	let radius = document.getElementById("radius").value;
    
    // Validate input
    if (isNaN(radius) || radius <= 0) {
        document.getElementById("volume").value = 'NaN';
        return false; // Prevent form submission
    }
    
    // Calculate volume
    let volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
    
    // Display the calculated volume rounded to four decimal places
    document.getElementById("volume").value = volume.toFixed(4);
    
    return false; // Prevent form submission
  
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
