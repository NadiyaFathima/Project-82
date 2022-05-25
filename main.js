canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

var mouseEvent="empty";

color="red";
width_of_line=1;
radius="20";

canvas.addEventListener("mousedown",mouse_down);
function mouse_down(e){
    
    color=document.getElementById("color").value;
    width_of_line=document.getElementById("width_of_line").value;
    radius=document.getElementById("radius").value;

    mouseEvent="mousedown";
}

canvas.addEventListener("mouseup",mouse_up);
function mouse_up(e){

    mouseEvent="mouseup";
}

canvas.addEventListener("mouseleave",mouse_leave);
function mouse_leave(e){

    mouseEvent="mouseleave";
}

canvas.addEventListener("mousemove",mouse_move);
function mouse_move(e){

    current_position_of_x=e.clientX-canvas.offsetLeft;
    current_position_of_y=e.clientY-canvas.offsetTop;

    if(mouseEvent=="mousedown"){
       
        console.log("Current position of x and y coordinates is ");
        console.log("x = " + current_position_of_x + "y = " + current_position_of_y);

        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width_of_line;
        ctx.arc(current_position_of_x,current_position_of_y,radius,0,2*Math.PI);
        ctx.stroke();
    }

}

function clearArea(){
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
}
