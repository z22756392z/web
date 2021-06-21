const Drawing = {};
//tabindex -1 means that the element is not reachable via sequential keyboard navigation, but could be focused with JavaScript or visually by clicking with the mouse

Drawing.html = `

<div id="Panel"></div>
<canvas 
	tabindex='-1'
	style = 
	"
	padding: 0;
	margin: auto;
	display: block;
	top: 20;
	bottom: 0;
	left: 0;
	right: 0;
	"
	id = "Canvas" 
	width="600" height="400"></canvas>
<div id = "setting-panel"></div>
<div id = "detail-setting-panel"></div>
`
Drawing.panelHtml = `
<div class = "panel-list">
<a href = javascript:Drawing.onPenSelected()>Pen</a></div>
<div class = "panel-list">
<a href = javascript:Drawing.onBucketSelect()>Bucket</a></div>
<div class = "panel-list">
<a href = javascript:Drawing.onEraserSelect()>Eraser</a></div>
`

Drawing.selectObject = "Pen";

Drawing.onPenSelected = () =>{
	Drawing.selectObject = "Pen"
	Drawing.canvas.pen.selected = true;
	Drawing.canvas.eraser.selected = false;
	Drawing.settingPanelShow();
	Drawing.detailSettingPanel.innerHTML = ``;
}
Drawing.onBucketSelect = () =>{
	Drawing.selectObject = "Bucket";
	Drawing.settingPanel.innerHTML = ``;
	Drawing.detailSettingPanel.innerHTML = ``;
}

Drawing.onEraserSelect = () =>{
	Drawing.selectObject = "Eraser"
	Drawing.canvas.pen.selected = false;
	Drawing.canvas.eraser.selected = true;
	Drawing.settingPanelShow();
	Drawing.detailSettingPanel.innerHTML = ``;
}



Drawing.settingPanelHtml = `
<div class = "panel-list">
<a href = javascript:Drawing.sizeSettingShow()>Size</a></div>
<div class = "panel-list">
<a href = javascript:Drawing.colorSettingShow()>Color Picker</a></div>
<div class = "panel-list">
<a href = javascript:Drawing.shapeSettingShow()>Shape</a></div>
<div class ="canvas">
<canvas width = "50" height = "50"></canvas></div>

`
Drawing.settingPanelShow = () =>{
	Drawing.settingPanel.innerHTML = Drawing.settingPanelHtml;
	
	Drawing.DisplayCanvas = Drawing.settingPanel.querySelector("canvas");
	Drawing.DisplayerCtx = Drawing.DisplayCanvas.getContext("2d");
	//display original size
	Drawing.DisplayerCtx.fillRect(0,35-5/2,5,5);
	Drawing.DisplayerCtx.fill();
}


Drawing.sizeSettingHtml = `
<p>Size slider:</p>
<input type="range" min="1" max="30" value="5" id = "sizeInput">
`
Drawing.sizeSettingShow = () =>{
	Drawing.detailSettingPanel.innerHTML = Drawing.sizeSettingHtml;
	var p = Drawing.detailSettingPanel.querySelector("p");
	p.textContent = Drawing.selectObject + " " + p.textContent;
	
	Drawing.sizeInput = document.getElementById("sizeInput");
	Drawing.sizeInput.value = 5;
	Drawing.canvas.objectWidth = 5;
	Drawing.canvas.objectHeight = 5;
	Drawing.sizeInput.onchange = Drawing.sizeInputHandler;
	
}
Drawing.sizeInputHandler = () => {
	Drawing.canvas.objectWidth = Drawing.sizeInput.value;
    Drawing.canvas.objectHeight = Drawing.sizeInput.value;
	Drawing.DisplayerCtx.clearRect(0, 0, 50, 50);
	Drawing.DisplayerCtx.fillRect(0,35-Drawing.canvas.objectWidth/2 ,Drawing.canvas.objectWidth,Drawing.canvas.objectHeight);
	Drawing.DisplayerCtx.fill();
}

Drawing.shapeSettingHtml = `
<div class = "panel-list">
<a href = javascript:Drawing.onDefaultSelected()>Pen</a></div>
<div class = "panel-list">
<a href = javascript:Drawing.onLineSelected()>Line</a></div>
<div class = "panel-list">
<a href = javascript:Drawing.onRectangleSelected()>Rectangle</a></div>
<div class = "panel-list">
<a href = javascript:Drawing.onCircleSelected()>Circle</a></div>
`
Drawing.shapeSettingShow = () => {
	Drawing.detailSettingPanel.innerHTML = Drawing.shapeSettingHtml;
}
Drawing.onDefaultSelected = () =>{
	Drawing.canvas.pen.shape = "Pen";
}
Drawing.onLineSelected = () =>{
	Drawing.canvas.pen.shape = "Line";
}
Drawing.onRectangleSelected = () =>{
	Drawing.canvas.pen.shape = "Rectangle";
}
Drawing.onCircleSelected = () =>{
	Drawing.canvas.pen.shape = "Circle";
}

Drawing.colorSettingHtml = `
<p>Default range slider:</p>
<input type="range" min="1" max="30" value="5">
`;


Drawing.lastTime = 0;

Drawing.show = () => {
    main.innerHTML = Drawing.html;

	Drawing.Panel = document.getElementById("Panel");
	Drawing.Panel.innerHTML = Drawing.panelHtml;



    Drawing.Canvas = document.getElementById("Canvas");
    Drawing.ctx = Drawing.Canvas.getContext("2d");


	Drawing.settingPanel = document.getElementById("setting-panel");

	Drawing.detailSettingPanel = document.getElementById("detail-setting-panel");

    CANVAS_WIDTH = 600;
    CANVAS_HEIGHT = 400;

    Drawing.canvas = new Canvas(CANVAS_WIDTH,CANVAS_HEIGHT);

    Drawing.Loop();
}

Drawing.Loop = (timeStamp) =>{
    let deltaTime = timeStamp - Drawing.lastTime;
  
    Drawing.lastTime = timeStamp;
  
    //Drawing.ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  
    Drawing.canvas.update(deltaTime);
  
    Drawing.canvas.draw(Drawing.ctx);
  
    requestAnimationFrame(Drawing.Loop);
}



