class Canvas{
    constructor(canvasWidth, canvasHeight){
        
        this.width = canvasWidth;
        this.height = canvasHeight;
        
        this.pen = new Pen(this)
        this.eraser = new Eraser(this);
        this.select = new Select(this);
        this.bucket = new Bucket(this);

        this.Object = [];
        this.Object = [this.pen, this.eraser,this.select,this.bucket];

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