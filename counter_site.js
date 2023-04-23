// Main inital counter
let counter = 0;

// Getting counter number
const value = document.querySelector("#main_value");
// Getting all buttons
const buttons = document.querySelectorAll(".btn");


// For each button
buttons.forEach(function (button) {

    // add a event listener, and assigning it to btn
    button.addEventListener("click", function(btn) {
        // Assigning current class to style 
        const style = btn.currentTarget.classList;
        
        // If decrease button is pressed
        if (style.contains("decrease")){
            // If counter goes negative give a warning
            if (counter - 1 < 0){
                alert("You can't go negative!");
            // Else decrease the counter by 1 from current value
            } else {
                counter--;
            }
        
        // If reset button is pressed reset counter to 0
        } else if (style.contains("reset")) {
            counter = 0;
        
        // If none of above are pressed add 1 from the current value
        } else {
            counter++;
        }

        // Updating number in html
        value.textContent = counter;

        // If counter is above 0 then overwrite the red to green
        if (counter > 0) {
            value.style.color = "green";
        }
    })
});