import React, { Component } from 'react';
import './style.css'

export class DeleteButton extends Component {
    render() {
        return (<button style={{left: this.props.leftPosition, top: this.props.topPosition}}  onClick={this.props.handleClick} className={`st-btn del-btn ${this.props.className}`}>{this.props.symbol}</button>);
    }
}

export class AddButton extends Component {

    render() {
        return (<button onClick={this.props.handleClick} className={`st-btn add-btn ${this.props.className}`}>{this.props.symbol}</button>);
    }
}


