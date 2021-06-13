const commentBoard = {};

commentBoard.html = `
<div id = "comment-create">
<h2>Comment</h2>
<form>
    <label>Title: </label>
    <input
    type = "text"
    id = "Title-text"
    required
    value = ""
    />
    <label>Body: </label>
    <textarea
    id = "Body-text"
    required
    value = ""
    ></textarea>
    <label>Author: </label>
    <input
    type = "text"
    id = "Author-text"
    required
    value = ""
    />
</form>
<button onclick = "handleButton()">  Add  </button>
<template id="template">
  <div>Click me</div>
</template>
</div>
`

commentBoard.show = () => {
    main.innerHTML = commentBoard.html;
}

handleButton = () => {
    if(document.getElementById("Title-text").value  == "" || 
       document.getElementById("Body-text").value   == ""  ||
       document.getElementById("Author-text").value == "" )  return message("Please fill the form");
    
    let index = commentBoard.value.length;
    commentData[index] = {
        Title : "",
        Body : "",
        Author : "",
        Id: index
    }
    commentData[index].Title = document.getElementById("Title-text").value;
    commentData[index].Body = document.getElementById("Body-text").value;
    commentData[index].Author = document.getElementById("Author-text").value;

    Home.show();
}
