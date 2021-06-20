const GameScreen = {};

GameScreen.html = `
<canvas 
    tabindex='-1'
	style = 
	"
	padding: 0;
	margin: auto;
	display: block;
	width: 800px;
	height: 600px;
	position: absolute;
	top: 25;
	bottom: 0;
	left: 0;
	right: 0;
	"
	id = "gameScreen" 
	width="800" height="600"></canvas>

    <img id = "img_ball" src = "src/game/assets/images/ball.png" style = "display: none"></img>
	<img id = "img_heart" src = "src/game/assets/images/heart.png" style = "display: none" </img>
    <img id = "img_shield" src = "src/game/assets/images/shield[1].png" style = "display: none"></img>
    <img id = "img_knight" src = "src/game/assets/images/knight.png" style = "display: none"></img>
    <p>use capital W,A,S,D to move and use J to defense yourself</p>
`
GameScreen.lastTime = 0;

GameScreen.show = () => {
    main.innerHTML = GameScreen.html

    GameScreen.canvas = document.getElementById("gameScreen");
    GameScreen.ctx = GameScreen.canvas.getContext("2d");

    GameScreen.GAME_WIDTH = 800;

    GameScreen.GAME_HEIGHT = 600;

    GameScreen.game = new Game(GameScreen.GAME_WIDTH, GameScreen.GAME_HEIGHT);

    GameScreen.gameLoop();
}

GameScreen.gameLoop = (timeStamp) => {
    let deltaTime = timeStamp - GameScreen.lastTime;
  
    GameScreen.lastTime = timeStamp;
  
    GameScreen.ctx.clearRect(0, 0, GameScreen.GAME_WIDTH, GameScreen.GAME_HEIGHT);
  
    GameScreen.game.update(deltaTime);
  
    GameScreen.game.draw(GameScreen.ctx);
  
    requestAnimationFrame(GameScreen.gameLoop);
}
  
  