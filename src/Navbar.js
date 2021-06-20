navbar.html = `
<h1>The 110910542 website</h1>
        <div id = "links">
            <a href = "javascript:Home.show()">Home</a>
            <a href = "javascript:commentBoard.show()">Comment</a>
            <a href = "javascript:Drawing.show()">Draw</a>
        </div>

`;

navbar.show = () => {
    navbar.innerHTML = navbar.html;
}
