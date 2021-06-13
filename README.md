# web

# 技術手段

* 主要以更改innerhtml 改變內容 來達成看似換頁的方式

* 使用html的template元素 將儲存在前端的資料 以列表的方式呈現

* 完成讀取資料及Loading screen 使用fetch api , await 和 async ([學習筆記](https://github.com/z22756392z/wp109b/wiki/Async_js.md))


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

# 參考資料:

* [component](https://webdesign.tutsplus.com/articles/how-to-create-your-own-html-elements-with-web-components--cms-21524)

* [template](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/template)