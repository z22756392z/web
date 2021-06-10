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


const symbol = " "
commentBoard.value = [];

commentBoard.value[0] = {
    Title: "Hello",
    Body: `You can leave a comment here click on the right-top \" Comment \".\nWatch out! It would be gone once the page is refreshed!`,
    Author: "Brian"
};

commentBoard.show = () => {
    main.innerHTML = commentBoard.html;
}

handleButton = () => {
    if(document.getElementById("Title-text").value  == "" || 
       document.getElementById("Body-text").value   == ""  ||
       document.getElementById("Author-text").value == "" )  return message("Please fill the form");
    
    commentBoard.value[commentBoard.value.length] = {
        Title : "",
        Body : "",
        Author : ""
    }
    commentBoard.value[commentBoard.value.length -1].Title = document.getElementById("Title-text").value;
    commentBoard.value[commentBoard.value.length -1].Body = document.getElementById("Body-text").value;
    commentBoard.value[commentBoard.value.length -1].Author = document.getElementById("Author-text").value;

    Home.show();
}
