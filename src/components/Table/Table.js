import React, { Component } from 'react';
import './style.css'

export class Table extends Component{
    render(){
        console.warn(this.props);
        let rows = [];
        for (let i = 0; i < this.props.rowCount; i++) {
            rows.push(<TableRow columnCount={this.props.columnCount}/>);
        }
        return <table>{rows}</table>;
    }
}
class TableRow extends Component{
    render(){
        let tr = [];
        console.log(this.props);
        for(let i = 0; i < this.props.columnCount; i++){
            tr.push(<TD/>);
        }
        return (<tr>{tr}</tr>);
    }
}

class TD extends Component{
    render(){
        return (<td></td>)
    }
}
export default Table;