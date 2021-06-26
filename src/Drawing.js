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
<div class = "panel-list">
<a href = javascript:Drawing.onSelectSelect()>Select</a></div>
`

Drawing.selectObject = "Pen";

Drawing.onPenSelected = () =>{
	Drawing.selectObject = "Pen"
	Drawing.canvas.pen.selected = true;
	Drawing.canvas.select.selected = false;
	Drawing.canvas.eraser.selected = false;
	Drawing.canvas.bucket.selected = false;
	Drawing.canvas.bucket.isAimate = false;
	Drawing.SettingPanel_list1.style.display = "block";
	Drawing.SettingPanel_list2.style.display = "block";
	Drawing.SettingPanel_list3.style.display = "block";
	Drawing.SettingPanel_list4.style.display = "none";
	Drawing.SettingPanel_list5.style.display = "block";
	Drawing.detailSettingPanel.innerHTML = ``;
}
Drawing.onBucketSelect = () =>{
	Drawing.selectObject = "Bucket";
	Drawing.canvas.pen.selected = false;
	Drawing.canvas.select.selected = false;
	Drawing.canvas.eraser.selected = false;
	Drawing.canvas.bucket.selected = true;
	Drawing.canvas.bucket.isAimate = false;
	Drawing.SettingPanel_list1.style.display = "none";
	Drawing.SettingPanel_list2.style.display = "block";
	Drawing.SettingPanel_list3.style.display = "none";
	Drawing.SettingPanel_list4.style.display = "block";
	Drawing.SettingPanel_list5.style.display = "none";
	Drawing.detailSettingPanel.innerHTML = ``;
}
Drawing.onEraserSelect = () =>{
	Drawing.selectObject = "Eraser"
	Drawing.canvas.pen.selected = false;
	Drawing.canvas.select.selected = false;
	Drawing.canvas.bucket.selected = false;
	Drawing.canvas.eraser.selected = true;
	Drawing.canvas.bucket.isAimate = false;
	Drawing.SettingPanel_list1.style.display = "block";
	Drawing.SettingPanel_list2.style.display = "none";
	Drawing.SettingPanel_list3.style.display = "none";
	Drawing.SettingPanel_list4.style.display = "none";
	Drawing.SettingPanel_list5.style.display = "none";
	Drawing.detailSettingPanel.innerHTML = ``;
}
Drawing.onSelectSelect = () =>{
	Drawing.selectObject = "Select"
	Drawing.canvas.pen.selected = false;
	Drawing.canvas.eraser.selected = false;
	Drawing.canvas.bucket.selected = false;
	Drawing.canvas.select.selected = true;
	Drawing.canvas.bucket.isAimate = false;
	Drawing.canvas.select.init();
	Drawing.SettingPanel_list1.style.display = "none";
	Drawing.SettingPanel_list2.style.display = "none";
	Drawing.SettingPanel_list3.style.display = "none";
	Drawing.SettingPanel_list4.style.display = "none";
	Drawing.SettingPanel_list5.style.display = "none";
	Drawing.detailSettingPanel.innerHTML = ``;
}



Drawing.settingPanelHtml = `
<div class = "panel-list" id = "panel-list1">
<a href = javascript:Drawing.sizeSettingShow()>Size</a></div>
<div class = "panel-list" id = "panel-list2">
<a href = javascript:Drawing.colorSettingShow()>Color Picker</a></div>
<div class = "panel-list" id = "panel-list3">
<a href = javascript:Drawing.shapeSettingShow()>Shape</a></div>
<div class = "panel-list" id = "panel-list4">
<a href = javascript:Drawing.aminationSettingShow()>Animation</a></div>
<div class ="canvas" id = "panel-list5">
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
<div class = "sizeSetting">
<p>Size slider:</p>
<input type="range" min="1" max="30" value="5" id = "sizeInput"></div>
`
Drawing.sizeSettingShow = () =>{
	Drawing.detailSettingPanel.innerHTML = Drawing.sizeSettingHtml;
	var p = Drawing.detailSettingPanel.querySelector("p");
	p.textContent = Drawing.selectObject + " " + p.textContent;
	
	Drawing.sizeInput = document.getElementById("sizeInput");
	
	if( Drawing.canvas.objectWidth!= null){
		Drawing.sizeInput.value = Drawing.canvas.objectWidth;
		Drawing.canvas.objectHeight =Drawing.canvas.objectHeight;
	}
	
	Drawing.sizeInput.onchange = Drawing.sizeInputHandler;
	
}
Drawing.sizeInputHandler = () => {
	Drawing.canvas.objectWidth = Drawing.sizeInput.value;
    Drawing.canvas.objectHeight = Drawing.sizeInput.value;
	Drawing.DisplayerCtx.clearRect(0, 0, 50, 50);
	Drawing.DisplayerCtx.fillRect(0,35-Drawing.canvas.objectWidth/2 ,Drawing.canvas.objectWidth,Drawing.canvas.objectHeight);
	Drawing.DisplayerCtx.fill();
}


Drawing.colorSettingHtml = `
<p>Red slider:</p>
<input type="range" min="0" max="255" value="0" id = "r-slider">
<p>Green slider:</p>
<input type="range" min="0" max="255" value="0" id = "g-slider">
<p>Bule slider:</p>
<input type="range" min="0" max="255" value="0" id = "b-slider">
<p>Alpha slider:</p>
<input type="range" min="0" max="255" value="255" id = "a-slider">
`;
Drawing.colorSettingShow = () =>{
	Drawing.detailSettingPanel.innerHTML = Drawing.colorSettingHtml;
	Drawing.rSlider = document.getElementById("r-slider");
	Drawing.gSlider = document.getElementById("g-slider");
	Drawing.bSlider = document.getElementById("b-slider");
	Drawing.aSlider = document.getElementById("a-slider");

	if(Drawing.canvas.objectColorR != null){
		Drawing.rSlider.value = Drawing.canvas.objectColorR
		Drawing.gSlider.value = Drawing.canvas.objectColorG
		Drawing.bSlider.value = Drawing.canvas.objectColorB
		Drawing.aSlider.value = Drawing.canvas.objectColorA
	}
	
	
	Drawing.rSlider.onchange = Drawing.colorInputOnChange;
	Drawing.gSlider.onchange = Drawing.colorInputOnChange;
	Drawing.bSlider.onchange = Drawing.colorInputOnChange;
	Drawing.aSlider.onchange = Drawing.colorInputOnChange;
}
Drawing.colorInputOnChange = () =>{
	Drawing.canvas.objectColorR = Drawing.rSlider.value;
	Drawing.canvas.objectColorG = Drawing.gSlider.value;
	Drawing.canvas.objectColorB = Drawing.bSlider.value;
	Drawing.canvas.objectColorA = Drawing.aSlider.value;
	Drawing.DisplayerCtx.clearRect(0, 0, 50, 50);
	if(Drawing.canvas.objectWidth == null) {Drawing.canvas.objectWidth = 5; Drawing.canvas.objectHeight = 5;}
	Drawing.DisplayerCtx.fillStyle = "rgba(" + Drawing.canvas.objectColorR +","+Drawing.canvas.objectColorG+ ","+Drawing.canvas.objectColorB + ","+Drawing.canvas.objectColorA +")";
	Drawing.DisplayerCtx.fillRect(0,35-Drawing.canvas.objectWidth/2 ,Drawing.canvas.objectWidth,Drawing.canvas.objectHeight);
	Drawing.DisplayerCtx.fill();
}

Drawing.shapeSettingHtml = `
<div class = "Panel">
<div class = "panel-list">
<a href = javascript:Drawing.onDefaultSelected()>Pen</a></div>
<div class = "panel-list">
<a href = javascript:Drawing.onLineSelected()>Line</a></div>
<div class = "panel-list">
<a href = javascript:Drawing.onRectangleSelected()>Rectangle</a></div>
<div class = "panel-list">
<a href = javascript:Drawing.onCircleSelected()>Circle</a></div>
</div>

<div  class = "Panel">
<div class = "panel-list"  style = "display : none">
<a href = javascript:Drawing.onSoildSelected()>Soild</a></div>
<div class = "panel-list" style = "display : none">
<a href = javascript:Drawing.onHollowSelected()>Hollow</a></div>
</div>
`
Drawing.shapeSettingShow = () => {
	Drawing.detailSettingPanel.innerHTML = Drawing.shapeSettingHtml;
}
Drawing.onDefaultSelected = () =>{
	Drawing.canvas.pen.shape = "Pen";
	var div = Drawing.detailSettingPanel.querySelectorAll("div");
	div[6].style.display = "none";
	div[7].style.display = "none" 
}
Drawing.onLineSelected = () =>{
	Drawing.canvas.pen.shape = "Line";
	var div = Drawing.detailSettingPanel.querySelectorAll("div");
	div[6].style.display = "none";
	div[7].style.display = "none" 
}
Drawing.onRectangleSelected = () =>{
	Drawing.canvas.pen.shape = "Rectangle";
	var div = Drawing.detailSettingPanel.querySelectorAll("div");
	div[6].style.display = "inline";
	div[7].style.display = "inline" 
}
Drawing.onCircleSelected = () =>{
	Drawing.canvas.pen.shape = "Circle";
	var div = Drawing.detailSettingPanel.querySelectorAll("div");
	div[6].style.display = "inline";
	div[7].style.display = "inline" 
}
Drawing.onHollowSelected = () =>{
	Drawing.canvas.objectType = "hollow"
} 
Drawing.onSoildSelected = () =>{
	Drawing.canvas.objectType = "soild"
}

Drawing.AnimationSettingHtml = `
<div class = "Panel">
<div class = "panel-list">
<a href = javascript:Drawing.onAnimationOffSelected()>Off</a></div>
<div class = "panel-list">
<a href = javascript:Drawing.onAnimationOnSelected()>On</a></div>
</div>
`
Drawing.aminationSettingShow = () =>{
	Drawing.detailSettingPanel.innerHTML = Drawing.AnimationSettingHtml;
}
Drawing.onAnimationOnSelected = () =>{
	Drawing.canvas.objectIsAnimation = true;
}
Drawing.onAnimationOffSelected = () =>{
	Drawing.canvas.objectIsAnimation = false;
}



Drawing.lastTime = 0;

Drawing.show = () => {
    main.innerHTML = Drawing.html;

	Drawing.Panel = document.getElementById("Panel");
	Drawing.Panel.innerHTML = Drawing.panelHtml;

	Drawing.settingPanel = document.getElementById("setting-panel");
	Drawing.settingPanelShow();
	Drawing.detailSettingPanel = document.getElementById("detail-setting-panel");
	Drawing.detailSettingPanel.innerHTML = ``;
	Drawing.SettingPanel_list1 = document.getElementById("panel-list1");
	Drawing.SettingPanel_list2 = document.getElementById("panel-list2");
	Drawing.SettingPanel_list3 = document.getElementById("panel-list3");
	Drawing.SettingPanel_list4 = document.getElementById("panel-list4");
	Drawing.SettingPanel_list5 = document.getElementById("panel-list5");
	

    Drawing.Canvas = document.getElementById("Canvas");
    Drawing.ctx = Drawing.Canvas.getContext("2d");

    CANVAS_WIDTH = 600;
    CANVAS_HEIGHT = 400;

    Drawing.canvas = new Canvas(CANVAS_WIDTH,CANVAS_HEIGHT);
	Drawing.onPenSelected();
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



