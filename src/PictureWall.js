const pictureWall = {};

pictureWall.html = `
<div id = "picture-wall">
<img src="asset/image/IMG_01.HEIC" alt="Image">
<img src="asset/image/IMG_03.JPG" alt="Image">
<img src="asset/image/IMG_05.JPG" alt="Image">
<img src="asset/image/IMG_06.JPG" alt="Image">
<img src="asset/image/IMG_08.HEIC" alt="Image">
<img src="asset/image/IMG_09.HEIC" alt="Image">
<img src="asset/image/IMG_10.HEIC" alt="Image">
<img src="asset/image/IMG_0267.heic" alt="Image">
<div/>
`

pictureWall.show = () => {
    main.innerHTML = pictureWall.html;
}
