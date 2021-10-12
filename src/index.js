import React from "react";
import ReactDOM, { render } from "react-dom";

class Tile extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div className="tile"></div>
    }
}

class Grid extends React.Component {
    constructor(props){
        super(props)

        // this.state = {
        //     GridY: Array(7).fill(null) GridX: Array(7).fill(null),
        // }
        
    }

    render() {
        const grid = Array(7).fill(Array(7).fill(null)); // [[null, null, ...], [null, null, ...], ....]
        // [[<Tile x=0, y=0 />, <Tile x=0, y=1 />, ..., <Tile x=0, y=6 />], [<Tile x=1, y=0 />, ..., <Tile x=1, y=6 />], ....]

        // const grid = [];
        // for(let y=0; y<7; y++) {
        //     for(let x=0; x<7; x++) {
        //         grid.concat(<Tile />);
        //     }
        // }

        return grid.map((gridY, y) => {

            return <div className="grid-row">{
                gridY.map((gridX, x) => {
                    return <Tile x={x} y={y} />
                })
            }
            </div>

        })
    }
    
}

ReactDOM.render(<Grid />, document.getElementById("root"));