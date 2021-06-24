class Bucket{
    constructor(canvas){
        this.canvas = canvas;
        this.selected = false;
        this.isMouseDown = false;

        this.imgData = null;
        this.isAimate = false;
        this.x = null;
        this.y = null;
        this.color ={
            r: 0,
            g: 0,
            b: 0,
            a: 255
        }
    }

    onMouseDown(coord){
        this.x = coord.x;
        this.y = coord.y;

        this.imgData = Drawing.Canvas.getContext("2d").getImageData(0, 0, this.canvas.width, this.canvas.height);

        var loc = [];

        loc[0] = parseInt(this.x);
        loc[1] = parseInt(this.y);
        var old_val = {
            r: null,
            g: null,
            b: null,
            a: null,
        }
        old_val.r = this.imgData.data[(loc[0] + loc[1] * this.canvas.width) * 4];
        old_val.g = this.imgData.data[(loc[0] + loc[1] * this.canvas.width) * 4 + 1];
        old_val.b = this.imgData.data[(loc[0] + loc[1] * this.canvas.width) * 4 + 2];
        old_val.a = this.imgData.data[(loc[0] + loc[1] * this.canvas.width) * 4 + 3];
       
        var canvas_size = [];
        canvas_size[0] = this.canvas.width;
        canvas_size[1] = this.canvas.height;
        
        if(this.isAimate)
            Ainmate_stack_fill(this.imgData, loc, old_val, this.color,canvas_size);
        else{
            alert("please wait! this would take quite a while")
            stack_fill(this.imgData, loc, old_val, this.color,canvas_size);
        }
            
    }

    onMouseUp(){

    }

    Down(coord){
    }

    update(){
        if(Drawing.canvas.objectColorR != null){
            this.color.r = Drawing.canvas.objectColorR;
            this.color.g = Drawing.canvas.objectColorG;
            this.color.b = Drawing.canvas.objectColorB;
            this.color.a = Drawing.canvas.objectColorA;
        }
        if(Drawing.canvas.objectIsAnimation != null){
            this.isAimate = Drawing.canvas.objectIsAnimation;
        }
    }

    draw(ctx){
        if(this.isMouseDown){
            ctx.putImageData(this.imgData, 0, 0);
            this.isMouseDown = false;
        }
    }
}