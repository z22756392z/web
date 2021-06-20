class Canvas{
    constructor(canvasWidth, canvasHeight){
        
        this.canvasWidth = canvasHeight;
        this.gameHeight = canvasHeight;
        
        this.pen = new Pen()
        new Input(this.pen);

        this.gameObject = [];

        this.gameObject = [this.pen];
    }

    update(deltaTime) {
        if(!deltaTime) return;
        this.gameObject.forEach((Object) => {Object.update()}) 
    }

    draw(ctx) {
        this.gameObject.forEach((Object) =>{Object.draw(ctx)});
    }
}