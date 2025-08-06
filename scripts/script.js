window.onload = function() {
    var football = document.getElementById("football");
    var goalkeeper = document.getElementById("goalkeeper");
    var leftBtn = document.getElementById("leftBtn");
    var rightBtn = document.getElementById("rightBtn");
    var message = document.getElementById("message");

    leftBtn.addEventListener("click", () => shoot("left"));
    rightBtn.addEventListener("click", () => shoot("right"));

    function shoot(direction) {
        console.log("direction: " + direction);

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
    }
}