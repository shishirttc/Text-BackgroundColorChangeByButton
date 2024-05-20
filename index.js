document.getElementById("changeTextColor").addEventListener("click", function() {
    // Change text color to a random color
    var randomColor = getRandomColor();
    document.body.style.color = randomColor;
});

document.getElementById("changeBackgroundColor").addEventListener("click", function() {
    // Change background color to a random color
    var randomColor = getRandomColor();
    document.body.style.backgroundColor = randomColor;
});

document.getElementById("reset").addEventListener("click", function() {
    // Reset text color and background color to default
    document.body.style.color = "black";
    document.body.style.backgroundColor = "white";
});

// Function to generate a random color
function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}