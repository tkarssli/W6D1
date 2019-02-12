const MovingObject = require("./moving_object.js");

document.addEventListener("DOMContentLoaded", function (event) {
    var c = document.getElementById("game-canvas");
    var ctx = c.getContext('2d');
    // ctx.beginPath();
    // ctx.arc(50, 75, 50, 0, 2 * Math.PI);
    // ctx.stroke();
    // mo = new MovingObject({
    //     'pos': [50, 50],
    //     'vel': 20,
    //     'radius': 10,
    //     'color': '#333'
    // })

    // mo.draw(ctx)

    ctx.beginPath();
    ctx.fillColor = "#000000";
    ctx.arc(100, 75, 50, 0, 2 * Math.PI);
    ctx.fill();
    ctx.endPath();


    // const canvas = document.getElementById('game-canvas');
    // const ctx = canvas.getContext('2d');
});