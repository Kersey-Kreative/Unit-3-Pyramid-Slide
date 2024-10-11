function generatePyramid() {
    const height = document.getElementById('height').value;
    const character = document.getElementById('char').value;
    const pyramidDiv = document.getElementById('pyramid');
    pyramidDiv.textContent = ''; 

    for (let i = 1; i <= height; i++) {
        const spaces = ' '.repeat(height - i); 
        const chars = character.repeat(i); 
        pyramidDiv.textContent += spaces + chars + '\n'; 
    }
}

// Function to update the displayed slider value
function updateSliderValue() {
    const sliderValue = document.getElementById('height').value;
    document.getElementById('sliderValue').textContent = sliderValue;
}

// Adding event listeners for interactions
document.getElementById('generate').addEventListener('click', generatePyramid);
document.getElementById('height').addEventListener('input', function() {
    generatePyramid();
    updateSliderValue();
});
document.getElementById('char').addEventListener('change', generatePyramid);