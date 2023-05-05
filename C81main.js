canvas=document.getElementById("Canva");
ctx=canvas.getContext("2d");

color = "magenta";
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 2;
ctx.arc(200, 300, 30, 0, 2*Math.PI);
ctx.stroke();

canvas.addEventListener("mousedown", MD );
function MD(e){
    mouse_x =e.clientX -canvas.offsetLeft;
    mouse_y =e.clientY -canvas.offsetTop;
circle(mouse_x,mouse_y);
}

function circle(mouse_x, mouse_y){
    ctx.beginPath();
    ctx.strokeStyle =color;
    ctx.lineWidth= 2;
    ctx.arc(mouse_x, mouse_y, 30, 0, 2*Math.PI);
    ctx.stroke();
}
ctx.BE

