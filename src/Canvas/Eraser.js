class Eraser{
    constructor(canvas){
        this.canvas = canvas;

        this.isMouseDown = false;
        this.onMouseDown = (coord) =>{
            this.x = coord.x;
            this.y = coord.y;
        }
        this.onMouseUp = (coord) =>{};
        
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
        if(Drawing.canvas.objectWidth != null){
            this.width = Drawing.canvas.objectWidth;
            this.height = Drawing.canvas.objectHeight;
        }
    }

    draw(ctx){
        if(this.isMouseDown){
            ctx.fillStyle='white';
            ctx.fillRect(this.x - this.width / 2,this.y - this.height/2,this.width,this.height);
            ctx.fill();
        }
       
    }
}