const Home = {};

Home.html = `
<div id = "content-list">
<h2>My list<h2>
<div class = "content-preview">
<a href = "javascript:pictureWall.show()">My dog</a>
</div>
<div class = "content-preview">
<a href = "javascript:commentDetail.show()">Discuss</a>
</div>
<div class = "content-preview">
<a href = "javascript:drawing.show()">Discuss</a>
</div>
`
const main = document.querySelector('main');

Home.show = () => {
    main.innerHTML = Home.html;
}

function init(){
    navbar.show();
    Home.show();
}


