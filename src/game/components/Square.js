import React from 'react';
import './Square.css'

const Square = ({index, board, handleClick}) => {
    return (
        <button className="square" key={`sq-${index}`} onClick={()=>{handleClick(index)}}>
            {board ? board[index] : null}
        </button>
    );
}

export default Square;