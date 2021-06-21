# web

# 來源:

* css使用[google font](https://fonts.google.com/) 中的 [Hammersmith One](https://fonts.google.com/specimen/Hammersmith+One#standard-styles)

* [遊戲來源](https://github.com/z22756392z/website-source)

* [template](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/template)

* [asynchronous](https://www.youtube.com/watch?v=ZcQyJ-gxke0&list=PL4cUxeGkcC9jx2TTZk3IGWKSbtugYdrlu&index=1)

* [make canvas focusable](https://stackoverflow.com/questions/12886286/addeventlistener-for-keydown-on-canvas)

* [track mouse Location on canvas](https://www.geeksforgeeks.org/how-to-get-the-coordinates-of-a-mouse-click-on-a-canvas-element/#:~:text=The%20position%20of%20x-coordinate%20of%20the%20mouse%20click,rectangle%20can%20be%20found%20using%20the%20%E2%80%98left%E2%80%99%20property.)

* [Element.getBoundingClientRect()](https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect)

* [Canvas slider](https://www.w3schools.com/howto/howto_js_rangeslider.asp)

* [Canvas draw function](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes)

* [Canvas dataURL() 儲存現在圖片](https://stackoverflow.com/questions/53960651/how-to-make-an-undo-function-in-canvas)

* 修改自[The Net Ninja](https://www.youtube.com/channel/UCW5YeuERMmlnqo4oq8vwUpg)中的[React系列](https://www.youtube.com/watch?v=j942wKiXFu8&list=PL4cUxeGkcC9gZD-Tvwfod2gaISzfRiP9d)

# 技術手段

* 主要以更改innerhtml 改變內容的方式

* 完成讀取資料及Loading screen 使用fetch api , await 和 async ([學習筆記](https://github.com/z22756392z/wp109b/wiki/Async_js.md))

  其中讀取的來自[自己的網站](https://z22756392z.github.io/web-data/data.json)

用canvas 製作

* 遊戲

* 畫布

做出畫筆和象鼻擦 使用 onchange event 跟改大小

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


