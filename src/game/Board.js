import React from 'react';
import './Board.css';
import Square from './components/Square';
import sessionAPI from '../api/sessionAPI';
import gameAPI from '../api/gameAPI';

class Board extends React.Component {
    constructor() {
        super();
        this.handleClick = this.handleClick.bind(this);
    }

    state = {
        "sessionId": null,
        "lastActiveTs": null,
        "gameBoard": {
            "gameStatus": null,
            "nextStriker": "X",
            "board": [null, null, null, null, null, null, null, null, null],
            "winner": null
        }
    }

    componentDidMount() {
        const sessionId = this.state.sessionId;
        if (sessionId !== null) {
            sessionAPI.getSession(sessionId).then(response => this.setState(response))
        } else {
            sessionAPI.createSession().then(response => this.setState(response))
        }
    }

    handleClick = (boxIndex) => {
        const payload = {
            sessionId: this.state.sessionId,
            striker: this.state.gameBoard.nextStriker,
            index: boxIndex
        };
        gameAPI.strike(payload).then(response => {
            console.log("RESPONSE");
            console.log(response.board);
            if (response.success) {
            } else {
                console.log("********* FAILED")
            }
            this.setState({
                lastActiveTs: new Date().getMilliseconds(),
                gameBoard: response
            })
        });
        console.log("STATE");
        console.log(this.state.gameBoard.board);
    }

    render() {
        return (
            <div>
                <div className="info">
                    <div className="session_id">Session: {this.state.sessionId}</div>
                    <div className="status" id={this.state.gameBoard.gameStatus}>
                        {this.state.gameBoard.gameStatus === "WIN" ? `Game won by: ${this.state.gameBoard.winner}`:this.state.gameBoard.gameStatus}
                    </div>
                </div>
                <div className="Board">
                    <div className="board-row">
                        <Square index={0} value={this.state.gameBoard.board[0]} handleClick={this.handleClick}></Square>
                        <Square index={1} value={this.state.gameBoard.board[1]} handleClick={this.handleClick}></Square>
                        <Square index={2} value={this.state.gameBoard.board[2]} handleClick={this.handleClick}></Square>
                    </div>
                    <div className="board-row">
                        <Square index={3} value={this.state.gameBoard.board[3]} handleClick={this.handleClick}></Square>
                        <Square index={4} value={this.state.gameBoard.board[4]} handleClick={this.handleClick}></Square>
                        <Square index={5} value={this.state.gameBoard.board[5]} handleClick={this.handleClick}></Square>
                    </div>
                    <div className="board-row">
                        <Square index={6} value={this.state.gameBoard.board[6]} handleClick={this.handleClick}></Square>
                        <Square index={7} value={this.state.gameBoard.board[7]} handleClick={this.handleClick}></Square>
                        <Square index={8} value={this.state.gameBoard.board[8]} handleClick={this.handleClick}></Square>
                    </div>
                </div>
            </div>
        );
    }
}

export default Board;