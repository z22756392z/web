const Home = {};

Home.html = `
<div id = "content-list">
<h2>My list<h2>
<div class = "content-preview">
<a href = "javascript:pictureWall.show()">My dog</a>
</div>
<div class = "content-preview">
<a href = "javascript:drawing.show()">Drawing</a>
</div>
<div class = "content-preview">
<a href = "javascript:commentDetail.show()">Discuss</a>
</div>
`

Home.show = () => {
    main.innerHTML = Home.html;
}



