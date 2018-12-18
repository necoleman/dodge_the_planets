import { Game } from "./game.js"

var mainPane = document.getElementById("main_pane").getContext("2d");
var gameState = new Game();
gameState.drawGame(mainPane);