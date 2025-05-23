﻿# web

# 來源:

* css使用[google font](https://fonts.google.com/) 中的 [Hammersmith One](https://fonts.google.com/specimen/Hammersmith+One#standard-styles)

* 修改自[The Net Ninja](https://www.youtube.com/channel/UCW5YeuERMmlnqo4oq8vwUpg)中的[React系列](https://www.youtube.com/watch?v=j942wKiXFu8&list=PL4cUxeGkcC9gZD-Tvwfod2gaISzfRiP9d)新增一些內容

* Bucket修改自[flood fill algorithm](https://www.algorithm-archive.org/contents/flood_fill/flood_fill.html)

* [template](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/template)

* [asynchronous](https://www.youtube.com/watch?v=ZcQyJ-gxke0&list=PL4cUxeGkcC9jx2TTZk3IGWKSbtugYdrlu&index=1)

* [make canvas focusable](https://stackoverflow.com/questions/12886286/addeventlistener-for-keydown-on-canvas)

* [track mouse Location on canvas](https://www.geeksforgeeks.org/how-to-get-the-coordinates-of-a-mouse-click-on-a-canvas-element/#:~:text=The%20position%20of%20x-coordinate%20of%20the%20mouse%20click,rectangle%20can%20be%20found%20using%20the%20%E2%80%98left%E2%80%99%20property.)

* [Element.getBoundingClientRect()](https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect)

* [Css flex](https://www.youtube.com/watch?v=fYq5PXgSsbE&t=112s)

* [Canvas slider](https://www.w3schools.com/howto/howto_js_rangeslider.asp)

* [Canvas draw function](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes)

* [Canvas dataURL() 儲存現在圖片](https://stackoverflow.com/questions/53960651/how-to-make-an-undo-function-in-canvas)

* [Canvas getImageData()](https://www.w3schools.com/tags/canvas_getimagedata.asp)


# 技術手段

* 主要以更改innerhtml 改變內容的方式

* 完成讀取資料及Loading screen 使用fetch api , await 和 async ([學習筆記](https://github.com/z22756392z/wp109b/wiki/Async_js.md))

  其中讀取的來自[自己的網站](https://z22756392z.github.io/web-data/data.json)

用canvas 製作

* 遊戲

* 畫布

做出畫筆和象鼻擦 使用 input 中的onchange event 跟改其大小大小

圖形選單

直線 使用canvas中的ctx.LineTo() ,canvas中的dataURL()函式 當mousedown儲存現在畫面在 再重複畫出直到使用者mouseup確認畫出
```
this.onMouseDown = (coord) =>{
            this.x = coord.x;
            this.y = coord.y;
            this.preX = this.x;
            this.preY = this.y;
            this.type = "soild";
            if(this.shape == "Line" || this.shape == "Rectangle" || this.shape == "Circle"){
                Drawing.dataURL = Drawing.Canvas.toDataURL();//儲存現在畫面
            }
        };
```

```
else if(this.shape == "Line"){
                ctx.clearRect(0,0,600,400);
                var image = new Image
                image.src = Drawing.dataURL;
                ctx.drawImage(image,0,0);//重複畫出
                ctx.fillStyle='black';
                ctx.beginPath();
                ctx.lineWidth = this.width;
                ctx.moveTo(this.preX,this.preY);
                ctx.lineTo(this.x, this.y);
                ctx.stroke();
            }
```

圓形 使用canvas中的ctx.arc()函式

正方形 使用canvas中的dataURL()函式 當mousedown儲存現在畫面在 再重複畫出 讓使用者可以隨意跟改圖形大小 直到mouseup確認畫下

選框工具 使用 canvas中的dataURL()函式 當mousedown儲存現在畫面在利用 shape 中的Reactangle畫出選取範圍 

mouseup再次儲存現在畫面及選則的區域x,y,width,height 

當mousedown在再次剛剛選取範圍內的框框(如果沒有在框框內則 取消選取)

則會依序重複畫出第一次儲存的圖片和第二次儲存的圖片(裁切成剛剛選取的範圍)

則使用者可達到拖移的效果 當mouseup時可確認畫下  


* 使用html的template元素 將儲存在前端的資料 以列表的方式呈現

程式碼如下
```
html:

<div id = "container"></div>

<template id="template">
<div class = "comment">
  <h3 id = "Title">Title: </h3><br />
  <p  id = "Body" >Body  :</p><br />
  <h3 id = "Author">Author: </h3>
<div/>
</template>

```

```
javascript:

commentDetail.show = () => {
    main.innerHTML = commentDetail.html;

    if ('content' in document.createElement('template')) {
    const container = document.getElementById("container");
    const template = document.getElementById("template");

    const clone = [];
    for(let i = 0 ; i < commentBoard.value.length ;i ++){
        clone[i] = template.content.cloneNode(true);
        
        var h3 = clone[i].querySelectorAll("h3");
        h3[0].textContent = "Title: " + commentBoard.value[i].Title;
        h3[1].textContent = "Author:    " + commentBoard.value[i].Author;
        var p = clone[i].querySelector("p");
        p.textContent = "" + commentBoard.value[i].Body;
        
        container.appendChild(clone[i]);
        
    }
}else{
    console.log("failed to use template element");
  }
}

```


