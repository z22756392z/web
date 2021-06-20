class Input {
    constructor(pen){
        Drawing.Canvas.addEventListener("mousemove", (event) => {
            pen.penDown(getMousePosition(Drawing.Canvas,event));
        })

        Drawing.Canvas.addEventListener("mousedown", () =>{
            pen.isMouseDown = true;
        })


        Drawing.Canvas.addEventListener("mouseup", () =>{
            pen.isMouseDown = false;
        })

        
    }
}

function getMousePosition(Canvas, event) {
    let rect = Canvas.getBoundingClientRect();
    let coord = {
        x: null,
        y: null
    }
    coord.x = event.clientX - rect.left;
    coord.y = event.clientY - rect.top;
    return coord;
}