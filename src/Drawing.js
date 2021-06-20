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
	Drawing.selectObject = "Pen";
	Drawing.settingPanelShow();
}
Drawing.onBucketSelect = () =>{
	Drawing.selectObject = "Bucket";
	Drawing.settingPanel.innerHTML = ``;
}
Drawing.onEraserSelect = () =>{
	Drawing.selectObject = "Eraser";
	Drawing.settingPanelShow();
}


Drawing.settingPanelHtml = `
<div class = "panel-list">
<a href = javascript:Drawing.sizeSettingShow()>Size</a></div>
<div class = "panel-list">
<a href = javascript:Drawing.colorSettingShow()>Color Picker</a></div>
`
Drawing.settingPanelShow = () =>{
	Drawing.settingPanel.innerHTML = Drawing.settingPanelHtml;
}


Drawing.sizeSettingHtml = `
<p>Size slider:</p>
<input type="range" min="1" max="100" value="50">
`
Drawing.sizeSettingShow = () =>{
	Drawing.detailSettingPanel.innerHTML = Drawing.sizeSettingHtml;
	var p =Drawing.detailSettingPanel.querySelector("p");
	p.textContent = Drawing.selectObject + " " + p.textContent;
}


Drawing.colorSettingHtml = `
<p>Default range slider:</p>
<input type="range" min="1" max="100" value="50">
`


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



