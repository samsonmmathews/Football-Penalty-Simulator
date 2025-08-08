window.onload = function() 
{
    var football = document.getElementById("football");
    var goalkeeper = document.getElementById("goalkeeper");
    var leftBtn = document.getElementById("leftBtn");
    var rightBtn = document.getElementById("rightBtn");
    var resetBtn = document.getElementById("resetBtn");
    var message = document.getElementById("message");

    // Function calls on button click
    leftBtn.addEventListener("click", () => shoot("left"));
    rightBtn.addEventListener("click", () => shoot("right"));
    resetBtn.addEventListener("click", resetGame);

    function shoot(direction) {
        console.log("direction: " + direction);

        // Disabling the buttons temporarily
        leftBtn.disabled = true;
        rightBtn.disabled = true;
        resetBtn.disabled = true;

        // Clearing any old animations
        football.style.animation = "";
        goalkeeper.style.transition = "";
        message.style.display = "none";

        // Logic to apply random direction to goalkeeper dive direction
        var goalkeeperDive = Math.random() < 0.5 ? "left" : "right";

        // Goalkeeper movement animation
        if(goalkeeperDive === "left")
        {
            goalkeeper.style.animation = "diveLeft 1s forwards";
        }
        else
        {
            goalkeeper.style.animation = "diveRight 1s forwards";
        }

        // Football movement animation
        if(direction === "left")
        {
            football.style.animation = "ballLeft 1s forwards";
        }
        else
        {
            football.style.animation = "ballRight 1s forwards";
        }

        setTimeout(() => {
            if(direction === goalkeeperDive)
            {
                message.textContent = "SAVED!";
                message.style.color = "red";
            } 
            else 
            {
                message.textContent = "GOAL!!!";
                message.style.color = "yellow";
            }
            message.style.display = "block";
            message.style.animation = "zoomIn 0.5s ease";
            resetBtn.disabled = false;
        }, 1000);
    }

    function resetGame() {
        console.log("Reset button clicked");

        football.style.animation = "ballReset 0.5s forwards";
        goalkeeper.style.animation = "goalkeeperReset 0.5s forwards";

        message.textContent = "";
        message.style.display = "none";

        leftBtn.disabled = false;
        rightBtn.disabled = false;
    }
};