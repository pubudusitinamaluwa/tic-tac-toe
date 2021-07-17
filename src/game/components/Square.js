import React from 'react';
import './Square.css'

class Square extends React.Component {
    render() {
        return (
            <button className="square" key={`sq-${this.props.index}`} value={this.props.index} onClick={event => {console.log(this.props);this.props.handleClick(event.target.value)}}>
                {this.props.value ? this.props.value : null}
            </button>
        );
    }
}

export default Square;