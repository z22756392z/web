class Pen{
    constructor(){
        this.isMouseDown = false;
        this.x = null;
        this.y = null;
        this.width = 10;
        this.height = 10;
    }

    penDown(coord){
        this.x = coord.x;
        this.y = coord.y;
    }

    update(){
      
    }

    draw(ctx){
        if(this.isMouseDown){
            ctx.fillRect(this.x,this.y,this.width,this.height);
            ctx.fill();
        }
       
    }
}