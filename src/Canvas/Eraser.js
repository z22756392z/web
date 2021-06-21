class Eraser{
    constructor(){
        this.isMouseDown = false;
        this.x = null;
        this.y = null;
        this.width = 10;
        this.height = 10;
        this.selected = false;
    }

    Down(coord){
        this.x = coord.x;
        this.y = coord.y;
    }

    update(){
        this.width = Drawing.canvas.objectWidth;
        this.height = Drawing.canvas.objectHeight;
    }

    draw(ctx){
        if(this.isMouseDown){
            ctx.fillStyle='white';
            ctx.fillRect(this.x,this.y,this.width,this.height);
            ctx.fill();
        }
       
    }
}