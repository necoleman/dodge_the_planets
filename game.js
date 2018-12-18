export class Game {
    
    constructor(mouseControl){
        this.spaceObjectList = [
            new Ship(400, 400, 2*Math.PI/3),
            new Planet(25, 505, 19, 10),
            new Planet(215, 88, 17, 15)
        ]
        this.mouseControl = true;
    }

    drawGame(canvasContext, fuelContext){
        for(var j = 0; j < this.spaceObjectList.length; j++){
            this.spaceObjectList[j].drawSelf(canvasContext, fuelContext);
        }
        return;
    }

    updateGame(){
        // update the game state (move ship, accelerate ship, check collisions, bounce, etc)
    }

    updateModel(){
        // check model prediction and backpropagate
    }

    drawModel(canvasContext){
        // draw model
    }

    switchControl(){
        // change control from mouse to model or from model to mouse
        this.mouseControl = !this.mouseControl;
    }
}

class SpaceObject {
    constructor(xCoord, yCoord, mass){
        this.x = xCoord;
        this.y = yCoord;
        this.mass = mass;
    }
}

class Planet extends SpaceObject {
    constructor(xCoord, yCoord, radius, mass){
        super(xCoord, yCoord, mass);
        this.radius = radius;
    }
    
    drawSelf(canvasContext, fuelContext){
        canvasContext.fillStyle = "#C3C3C3";
        canvasContext.beginPath();
        canvasContext.arc(this.x, this.y, this.radius, 0, 2*Math.PI);
        canvasContext.fill();
        canvasContext.stroke();
        return;
    }
}

class Ship extends SpaceObject {
    constructor(xCoord, yCoord, angle, fuelLeft){
        super(xCoord, yCoord, 0);
        this.angle = angle;
        this.fuelLeft = fuelLeft;
    }

    drawSelf(canvasContext, fuelContext){
        canvasContext.fillStyle = "#FFFFFF";
        canvasContext.beginPath();
        canvasContext.moveTo(this.x, this.y);
        canvasContext.lineTo(this.x + 10*Math.cos(this.angle), this.y + 10*Math.cos(this.angle))
        canvasContext.stroke();

        // TODO fuelContext rect with remaining fuel
        return;
    }
}