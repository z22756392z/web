class Select{
    constructor(){
        this.isMouseDown = false;
        this.selectedFinish = false;
        Drawing.selectBoxdataURL = [];
        this.selectedBox = {
            x: null,
            y: null,
            width: null,
            height: null,
            image: null,
        }
        
        this.onMouseDown = (coord) =>{
            this.x = coord.x;
            this.y = coord.y;
            this.preX = this.x;
            this.preY = this.y;
            if(!this.selectedFinish){
                Drawing.selectBoxdataURL[0] = Drawing.Canvas.toDataURL(); 
            }
        }
        this.onMouseUp = (coord) =>{
            this.x = coord.x;
            this.y = coord.y;
            if(!this.selectedFinish){
                this.selectedBox.width = this.x - this.preX,
                this.selectedBox.height = this.y - this.preY,
                this.selectedBox.x = this.preX;
                this.selectedBox.y = this.preY;
                this.selectedFinish = true;
                this.selectedBox.image = Drawing.Canvas.toDataURL();
            }else if (this.selectBoxIsdrag){
                this.selectBoxIsdrag = false;
                this.selectedFinish = false;
            }
        }
        this.x = null;
        this.y = null;
        this.selected = false;
    }

    init(){
        this.x = null;
        this.y = null;
        this.preX = null;
        this.preY = null;
        this.selectedBox = {
            x: null,
            y: null,
            width: null,
            height: null,
            image: null,
        }
        this.isMouseDown = false;
        this.selectedFinish = false;
    }

    Down(coord){
        this.x = coord.x;
        this.y = coord.y;
    }

    update(){
    }

    draw(ctx){
        if(this.isMouseDown && !this.selectedFinish){
            ctx.clearRect(0,0,600,400);
            var image = new Image
            image.src = Drawing.selectBoxdataURL[0];
            ctx.drawImage(image,0,0);
            ctx.fillStyle='bule';
            ctx.beginPath();
            ctx.lineWidth = 1;
            ctx.moveTo(this.preX,this.preY);
            ctx.lineTo(this.x, this.preY);
            ctx.lineTo(this.x, this.y);
            ctx.lineTo(this.preX, this.y);
            ctx.lineTo(this.preX,this.preY);
            ctx.stroke();
        }
        if(this.isMouseDown && this.selectBoxIsdrag){
            ctx.clearRect(0,0,600,400);
            var image = new Image
            image.src = Drawing.selectBoxdataURL[0];
            ctx.drawImage(image,0,0);
            image.src = this.selectedBox.image
            ctx.drawImage(
                        image,
                        this.selectedBox.x + 1,
                        this.selectedBox.y + 1,
                        this.selectedBox.width - 2,
                        this.selectedBox.height - 2,
                        this.x - this.selectedBox.width/2,
                        this.y - this.selectedBox.height/2,
                        this.selectedBox.width - 2 ,
                        this.selectedBox.height - 2
            );
        }
        else if( this.isMouseDown &&
            this.selectedFinish && 
            this.x >= this.selectedBox.x &&
            this.y >= this.selectedBox.y &&
            this.x <= this.selectedBox.x + this.selectedBox.width&&
            this.y <= this.selectedBox.y + this.selectedBox.height&&
            !this.selectBoxIsdrag)
        {
            this.selectBoxIsdrag = true;
        }
    }
}