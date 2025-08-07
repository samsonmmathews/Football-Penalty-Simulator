window.onload = function() 
{
    var football = document.getElementById("football");
    var goalkeeper = document.getElementById("goalkeeper");
    var leftBtn = document.getElementById("leftBtn");
    var rightBtn = document.getElementById("rightBtn");
    var resetBtn = document.getElementById("resetBtn");
    var message = document.getElementById("message");

    leftBtn.addEventListener("click", () => shoot("left"));
    rightBtn.addEventListener("click", () => shoot("right"));
    resetBtn.addEventListener("click", resetGame);

    function shoot(direction) {
        console.log("direction: " + direction);

        
        // Disables the buttons temporarily
        leftBtn.disabled = true;
        rightBtn.disabled = true;
        resetBtn.disabled = true;

        football.style.animation = "";
        goalkeeper.style.transition = "transform 1s";
        message.style.display = "none";

        var goalkeeperDive = Math.random() < 0.5 ? "left" : "right";

        // Goalkeeper movement animation
        goalkeeper.style.transform = goalkeeperDive === "left" ? 
        "translate(-300px,-20px) rotate(-45deg)" : "translate(300px,-20px) rotate(45deg)";

        // Football movement animation
        football.style.animation = direction === "left" ? 
        "ballLeft 1s forwards" : "ballRight 1s forwards";

        setTimeout(() => {
            if(direction === goalkeeperDive)
            {
                message.textContent = "SAVED!";
                message.style.color = "red";
                resetBtn.disabled = false;
            } 
            else 
            {
                message.textContent = "GOAL!!!";
                message.style.color = "yellow";
                resetBtn.disabled = false;
            }
            message.style.display = "block";
        }, 1000);
    }

    function resetGame() {
        console.log("Reset button clicked");
        football.style.animation = "";
        goalkeeper.style.transform = "translate(0,0) rotate(0deg)";
        message.textContent = "";
        leftBtn.disabled = false;
        rightBtn.disabled = false;
    }
};