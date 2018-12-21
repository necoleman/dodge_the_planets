import { Game } from "./game.js"

var mainPane = document.getElementById("main_pane");
var fuelPane = document.getElementById("fuel_pane");
var modelPane = document.getElementById("model_pane");
var challengeDiv = document.getElementById("game_challenge");
var gameState = new Game(false, mainPane.height, mainPane.width, 15);

mainPane.addEventListener("mousedown", event => {
    gameState.onMouseDown(event);
});

mainPane.addEventListener("mouseup", event => {
    gameState.onMouseUp(event);
})

mainPane.addEventListener("mousemove", event => {
    gameState.onMouseMove(event);
});

window.main = function(){
    window.requestAnimationFrame(main);
    gameState.updateGame();
    gameState.drawGame(mainPane, fuelPane);
    gameState.drawModel(modelPane);
    gameState.updateChallenge(challengeDiv);
}

main();

// for(var j=0; j<10; j++){
//     // window.requestAnimationFrame(main);
//     gameState.updateGame();
//     gameState.drawGame(mainPane, fuelPane);
//     gameState.drawModel(modelPane);
//     gameState.updateChallenge(challengeDiv);
// }