class Pen{
    constructor(){
        this.isMouseDown = false;
        this.onMouseDown = (coord) =>{
            this.x = coord.x;
            this.y = coord.y;
            this.preX = this.x;
            this.preY = this.y;
            if(this.shape == "Line"){
                Drawing.dataURL = Drawing.Canvas.toDataURL();
            }
        };
        this.x = null;
        this.y = null;
        this.preX = null;
        this.preY = null;
        this.width = 5;
        this.height = 5;
        this.selected = true;
        this.shape = "Pen"
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
            if(this.shape == "Pen"){
                ctx.fillStyle='black';
                ctx.beginPath();
                ctx.lineWidth = this.width;
                ctx.moveTo(this.preX,this.preY);
                this.preX = this.x;
                this.preY = this.y;
                ctx.lineTo(this.x, this.y);//The starting point is dependent on previously drawn paths
                ctx.stroke();
            }
            else if(this.shape == "Line"){
                ctx.clearRect(0,0,600,400);
                var image = new Image
                image.src = Drawing.dataURL;
                ctx.drawImage(image,0,0);
                ctx.fillStyle='black';
                ctx.beginPath();
                ctx.lineWidth = this.width;
                ctx.moveTo(this.preX,this.preY);
                ctx.lineTo(this.x, this.y);
                ctx.stroke();
            }
            else if(this.shape == "Rectangle"){
                ctx.fillStyle='black';
                ctx.fillRect(this.x - this.width/2,this.y - this.height/2,this.width,this.height);
                ctx.fill();
            }
            else if(this.shape == "Circle"){
                ctx.fillStyle='black';
                ctx.beginPath();
                ctx.arc(this.x,this.y,this.width,0,2* Math.PI);
                ctx.fill();
            }
        }
       
    }
}