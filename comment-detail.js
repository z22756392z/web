
const commentDetail = {};

commentDetail.html = `

<div id = "container"></div>

<template id="template">
<div class = "comment">
  <h3 id = "Title">Title: </h3><br />
  <p  id = "Body" >Body  :</p><br />
  <h3 id = "Author">Author: </h3>
<div/>
</template>
`;

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
        

        //clone[i] = template.content.firstElementChild.cloneNode(true);  //prevent document fragment
        container.appendChild(clone[i]);
        
    }
}else{
    console.log("failed to use template element");
}
    
}


function clickHandler(event) {
  alert("Clicked a div");
}

