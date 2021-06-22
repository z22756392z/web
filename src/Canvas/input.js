class Input {
    constructor(Object){
        Drawing.Canvas.addEventListener("mousemove", (event) => {
            Object.forEach((Object) => {if(Object.selected){
                Object.Down(getMousePosition(Drawing.Canvas,event));}}
            );
        });

        Drawing.Canvas.addEventListener("mousedown", (event) =>{
            Object.forEach((Object) => {if(Object.selected){
            Object.isMouseDown = true; Object.onMouseDown(getMousePosition(Drawing.Canvas,event));}})
        });


        Drawing.Canvas.addEventListener("mouseup", (event) =>{
            Object.forEach((Object) => {if(Object.selected){
                Object.isMouseDown = false; Object.onMouseUp(getMousePosition(Drawing.Canvas,event));}})
            });
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