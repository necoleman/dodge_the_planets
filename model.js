class Model {
    /** Model class: able to predict and able to draw a representation on a canvas */
}

class NeuralNet extends Model {
    /**Follow Keras pattern of initialize, then add rows to build architecture */
    constructor(numInputs, rowSize){
        super();
        // random initialization of first row
        this.rows = [new DenseLayer(numInputs, rowSize)]
    }

    addDenseLayer(numNeurons){
        this.rows.push(new DenseLayer(this.rows[-1].length, numNeurons));
    }

    predict(){
        // prediction
    }

    backpropagate(){
        // backpropagation
    }

    drawSelf(canvasContext){
        // draw representation on a canvasContext
    }
}

class Neuron {
    constructor (numInputs) {
        // random initialization
    }
}

class DenseLayer {
    constructor (numInputs, numNeurons) {
        //random initialization of row given number
        this.row = []
        for(var i=0; i < numNeurons; i++){
            this.row.push(new Neuron(numInputs))
        }
    }
}