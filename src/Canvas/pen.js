class Pen{
    constructor(){
        this.isMouseDown = false;
        this.onMouseDown = (coord) =>{
            this.x = coord.x;
            this.y = coord.y;
            this.preX = this.x;
            this.preY = this.y;
            this.type = "soild";
            if(this.shape == "Line" || this.shape == "Rectangle" || this.shape == "Circle"){
                Drawing.dataURL = Drawing.Canvas.toDataURL();
            }
        };
        this.onMouseUp = (coord) =>{};
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
        if(Drawing.canvas.objectType != null){
            this.type = Drawing.canvas.objectType;
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
                ctx.clearRect(0,0,600,400);
                var image = new Image
                image.src = Drawing.dataURL;
                ctx.drawImage(image,0,0);
                ctx.fillStyle='black';
                ctx.beginPath();
                ctx.lineWidth = this.width;
                ctx.moveTo(this.preX,this.preY);
                ctx.lineTo(this.x, this.preY);
                ctx.lineTo(this.x, this.y);
                ctx.lineTo(this.preX, this.y);
                ctx.lineTo(this.preX,this.preY);
                if(this.type == "soild")    ctx.fill();
                else    ctx.stroke();
                
            }
            else if(this.shape == "Circle"){
                ctx.clearRect(0,0,600,400);
                var image = new Image
                image.src = Drawing.dataURL;
                ctx.drawImage(image,0,0);
                ctx.fillStyle='black';
                ctx.beginPath();
                ctx.arc(this.x,this.y,this.width,0,2* Math.PI);
                if(this.type == "soild")    ctx.fill();
                else    ctx.stroke();
            }
        }
       
    }
}