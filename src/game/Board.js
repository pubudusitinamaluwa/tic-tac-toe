import React from 'react';
import './Board.css';
import Square from './components/Square';

class Board extends React.Component {
    state = {
        "sessionId": null,
        "success": null,
        "gameStatus": null,
        "nextPlayer": "X",
        "board": [null, null, null, null, null, null, null, null, null],
        "winner": null
    }

    handleClick = (index) => {
        console.log(">>>>> " + index)
        // this.setState({});
    }

    render() {

        return (
            <div className="Board">
                <div className="board-row">
                    <Square index={0} board={this.state.board[0]} handleClick={this.handleClick}></Square>
                    <Square index={1} board={this.state.board[1]} handleClick={this.handleClick}></Square>
                    <Square index={2} board={this.state.board[2]} handleClick={this.handleClick}></Square>
                </div>
                <div className="board-row">
                    <Square index={3} board={this.state.board[3]} handleClick={this.handleClick}></Square>
                    <Square index={4} board={this.state.board[4]} handleClick={this.handleClick}></Square>
                    <Square index={5} board={this.state.board[5]} handleClick={this.handleClick}></Square>
                </div>
                <div className="board-row">
                    <Square index={6} board={this.state.board[6]} handleClick={this.handleClick}></Square>
                    <Square index={7} board={this.state.board[7]} handleClick={this.handleClick}></Square>
                    <Square index={8} board={this.state.board[8]} handleClick={this.handleClick}></Square>
                </div>
            </div>
        );
    }
}

export default Board;