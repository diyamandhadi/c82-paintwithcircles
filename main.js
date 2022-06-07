var mouseEvent = "Empty";

canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

color = "Red";
width_of_line = 2;

canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e) {
    color = document.getElementById("color").value;
    width_of_line = document.getElementById("width_of_line").value;
    radius = document.getElementById("radius").value;
    mouseEvent = "mouseDown";
}
canvas.addEventListener("mousemnmove", my_mousemove);
function my_mousemove(e) {
    var current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
    var current_position_of_mouse_y = e.clientY - canvas.offsetTop;
    if(mouseEvent == "mousedown") {
        console.log("Current Position of X and Y Coordinates = ")
        console.log("X = "+current_position_of_mouse_x+" ,Y = "+current_position_of_mouse_y);
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;
        ctx.arc(current_position_of_mouse_x, current_position_of_mouse_y,radiud, 0, 2* Math.PI);
        ctx.stroke();
    }
}
canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e) {
    mouseEvent = "mouseup";
}
canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e) {
    mouseEvent = "mouseleave";
}
function Clear_area() {
    ctx.ClearRect(0,0,canvas.width,canvas.height);
}