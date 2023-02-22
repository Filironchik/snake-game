import {partSnake, cell, playingField, coordinates, condition} from "./game/interfaces";
import app from "./App";
const imgApple: any = require('./imgApple.svg');

let field: playingField = {
    sizes: {
        x: 10,
        y: 10
    },

}

class Cell implements cell {
    // coordinates: coordinates;
    // condition: condition;
    // apple: boolean;



    // constructor(__coordinates: coordinates, __condition: condition, __apple: boolean) {
    //     this.coordinates = __coordinates;
    //     this.condition = __condition;
    //     this.apple = __apple;
    // }

    render(){
        if (this.apple = true){
            return(
                <div className="w-14 h-14 bg-slate-700">
                    <img src={imgApple} alt=""/>
                </div>
            )
        // } else {
        //     return (
        //         <div className="w-14 h-14 bg-slate-700"></div>
        //     )
        // }
    }
}

let cell = new Cell(field.sizes, "free", false);

function Field(playingField: playingField){
    let arr: Cell[][]
    for (let i=0; i < field.sizes.x; i++){
        for (let a=0; a<field.sizes.y; a++){
            arr.push[i]()
        }
    }


    return()
    {
        <div id="field" className={"grid grid-cols-" + field.sizes.x}>
        </div>
    }
    
}

function start(){
    document.getElementById("field").render(<Cell />)
}


let bodySnake: partSnake[] = [{
    coordinates: {x: 0, y: 0},
    head: true,
    position: 0
}]

{
    for (let i=0; i<i; i++){
        new Cell().render()
    }
    }