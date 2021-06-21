class Input {
    constructor(Object){
        Drawing.Canvas.addEventListener("mousemove", (event) => {
            Object.forEach((Object) => {if(Object.selected){
                Object.Down(getMousePosition(Drawing.Canvas,event));}}
            );
        });

        Drawing.Canvas.addEventListener("mousedown", () =>{
            Object.forEach((Object) => {if(Object.selected){
            Object.isMouseDown = true;}})
        });


        Drawing.Canvas.addEventListener("mouseup", () =>{
            Object.forEach((Object) => {if(Object.selected){
                Object.isMouseDown = false;}})
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