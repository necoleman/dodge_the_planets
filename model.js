/**Neural net model */

export class NeuralNet {
    /**Follow Keras pattern of initialize, then add rows to build architecture */
    constructor(numInputs, rowSize, activation){
        // random initialization of first row
        this.rows = [new DenseLayer(numInputs, rowSize, activation)];
    }

    addDenseLayer(numNeurons, activation){
        var newLayer = new DenseLayer(this.rows[this.rows.length-1].row.length, numNeurons, activation);
        
        this.rows.push(newLayer);
    }

    predict(inputArray){
        // prediction
        var prediction = inputArray;
        for(var j=0; j < this.rows.length; j++){
            prediction = this.rows[j].predict(prediction);
        }
        return prediction;
    }

    backpropagate(predictedValue, actualValue){
        // backpropagation
        var nextLayerDerivative = -(predictedValue - actualValue);
        for(var i = this.rows.length - 1; i >= 0; i--){
            console.log("y i k e s")
        }
    }

    drawSelf(canvasPane){
        for(var j=0; j<this.rows.length; j++){
            this.rows[j].drawSelf(canvasPane, (j+0.5)/this.rows.length)
        }
    }
}

class DenseLayer {
    constructor (numInputs, numNeurons, activation) {
        //random initialization of row given number
        this.row = []
        for(var i=0; i < numNeurons; i++){
            this.row.push(new Neuron(numInputs))
        }
        if(activation == "LOGISTIC"){this.activation = function(x){return 1/(1 + Math.exp(x));}}
        else{this.activation = function(x){return x;}}
    }

    predict(inputArray){
        var prediction = this.row.map(neuron => this.activation(neuron.predict(inputArray)));
        // console.log(prediction);
        return prediction;
    }

    drawSelf(canvasPane, heightRatio){
        var height = heightRatio*canvasPane.height;
        for(var j=0; j<this.row.length; j++){
            this.row[j].drawSelf(canvasPane, (j+0.5)/this.row.length, height);
        }
    }
}

class Neuron {
    constructor (numInputs) {
        // random initialization
        this.weights = Array.from({length: numInputs}, () => Math.random() - 0.5);
        this.bias = 1;
        this.learningRate = 0.1;
        this.mostRecentPrediction = 0;
    }

    predict(inputArray){
        var returnValue = this.bias;
        for(var j = 0; j < this.weights.length; j++){
            returnValue += this.weights[j]*inputArray[j];
        }
        this.mostRecentPrediction = returnValue;
        return returnValue;
    }

    drawSelf(canvasPane, widthRatio, height){
        var width = widthRatio*canvasPane.width;
        var canvasContext = canvasPane.getContext("2d")
        canvasContext.fillStyle = "#C3C3C3";
        canvasContext.beginPath();
        canvasContext.arc(width, height, 3, 0, 2*Math.PI);
        canvasContext.fill();
        canvasContext.stroke();
        canvasContext.font = "10px Arial"
        canvasContext.fillText(this.weights.toString(), width, height)
        return;
    }

    backpropagate(dNextRow){
        this.learningRate
    }
}
