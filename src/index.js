import React from "react";
import ReactDOM from "react-dom";
import "./index.css";


function arraysEqual(arrayOne, arrayTwo) {
  
  if (arrayOne.length !== arrayTwo.length) {
    return false;
  }

  for (var i = 0; i < arrayOne.length; i++) {
    if (arrayOne[i] != arrayTwo[i]) {
      return false;
    }
  }

  return true;
}

class Tile extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    
    let isFood = arraysEqual(this.props.food, [this.props.X, this.props.Y])
      ? "food"
      : "";
    let isSnake = arraysEqual(this.props.snake, [this.props.X, this.props.Y])
      ? "snake"
      : "";
    let className = `tile ${isSnake} ${isFood}`;

    return (
      <div className={className}>
        ({this.props.X}, {this.props.Y}){isSnake ? "==>" : ""}
      </div>
    );
  }
}

class Grid extends React.Component {
  render() {
    
    const grid = Array(this.props.size[0]).fill(
      Array(this.props.size[1]).fill(null)
    );

    const gridWithTiles = [];
  
    for (let y = 0; y < this.props.size[1]; y++) {
  
      const row = [];
      for (let x = 0; x < this.props.size[0]; x++) {
      
        row.unshift(
          <Tile X={x} Y={y} snake={this.props.snake} food={this.props.food} />
        );
      }
      gridWithTiles.unshift(<div className="grid-row">{row}</div>);
    }

    const forResult = <div className="grid">{gridWithTiles}</div>;

    const toRender = (
      <div className="grid">
        {grid.map((gridY, yIndex) => {
          return (
            <div className="grid-row">
              {gridY.map((gridX, xIndex) => {
               
                return (
                  <Tile
                    X={xIndex}
                    Y={yIndex}
                    snake={this.props.snake}
                    food={this.props.food}
                  />
                );
              })}
            </div>
          );
        })}
      </div>
    );

    return toRender;
  }
}

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gridSize: [7, 7],
      snake: [],
      food: [],
    };
  }

  
  getMiddleGrid(gridSize) {
    let xSize = gridSize[0];
    let ySize = gridSize[1];

    
    let xMiddle = parseInt(xSize / 2);
    let yMiddle = parseInt(ySize / 2);

    return [xMiddle, yMiddle];
  }

  
  componentDidMount() {
    let middleCoordinates = this.getMiddleGrid(this.state.gridSize);
    this.setState({ snake: middleCoordinates, food: [5, 3] });
  }

  render() {
    return (
      <>
        <Grid
          size={this.state.gridSize}
          snake={this.state.snake}
          food={this.state.food}
        />
      </>
    );
  }
}

ReactDOM.render(<Game />, document.getElementById("root"));