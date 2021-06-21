class Canvas{
    constructor(canvasWidth, canvasHeight){
        
        this.canvasWidth = canvasWidth;
        this.gameHeight = canvasHeight;
        
        this.pen = new Pen()
        this.eraser = new Eraser();
        

        this.Object = [];
        this.Object = [this.pen, this.eraser];

        new Input(this.Object);
    }

    update(deltaTime) {
        if(!deltaTime) return;
        this.Object.forEach((Object) => {if(Object.selected){
            Object.update();
        }})
    }

    draw(ctx) {
        this.Object.forEach((Object) =>{if(Object.selected){
            Object.draw(ctx);
        }})
    }
}