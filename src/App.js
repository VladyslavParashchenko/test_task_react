import React, {Component} from 'react';
import './App.css';
import {AddButton, DeleteButton} from './components/Button/Buttons'
import Table from './components/Table/Table'

class App extends Component {
    constructor(props) {
        super(props);
        this.addColumn = this.addColumn.bind(this);
        this.addRow = this.addRow.bind(this);
        this.removeColumn = this.removeColumn.bind(this);
        this.removeRow = this.removeRow.bind(this);
        this.mouseLeave = this.mouseLeave.bind(this);
        this.mouseOver = this.mouseOver.bind(this);
        this.state = {columnCount: 4, rowCount: 4, delBtnShowClass: ""};
        this.table = React.createRef();
    }

    render() {
        return (
            <div className="container">
                <div className="table-container" onMouseLeave={this.mouseLeave} onMouseOver={this.mouseOver}>
                    <DeleteButton className={`top-btn ${this.checkIsShowButtonForDeleteColumn(this.state.delBtnShowClass)}`} symbol="-" handleClick={this.removeRow} leftPosition={this.state.leftPosition}/>
                    <DeleteButton className={`left-btn ${this.checkIsShowButtonForDeleteRow(this.state.delBtnShowClass)}`}  symbol="-" handleClick={this.removeRow} topPosition={this.state.topPosition}/>
                    <AddButton className="bottom-btn" symbol="+" handleClick={this.addColumn} />
                    <AddButton className="right-btn" symbol="+" handleClick={this.addRow} />
                    <Table rowCount={this.state.columnCount} columnCount={this.state.rowCount} ref={this.table}/>
                </div>
            </div>
        );
    }

    addRow() {
        this.setState({rowCount: this.state.rowCount+1});
    }

    removeRow(e) {
        console.log(this.lastElement.parentNode);
        this.lastElement.parentNode.remove();
        this.setState({rowCount: this.state.rowCount-1, delBtnShowClass: ""});
    }

    addColumn() {
        this.setState({columnCount: this.state.columnCount+1});
    }

    removeColumn() {
        this.setState({columnCount: this.state.columnCount-1, delBtnShowClass: ""});
    }

    mouseOver(e) {
        this.setState({delBtnShowClass: "show-btn"});
        clearInterval(this.interval);
        switch (e.target.tagName) {
            case "TD":
                this.lastElement = e.target;
                this.setState({topPosition: e.target.offsetTop, leftPosition: e.target.offsetLeft});
                break;
        }
    }

    mouseLeave(e){
        this.interval = setTimeout(()=>{
            this.setState({delBtnShowClass: ""});
        },1000);
    }

    checkIsShowButtonForDeleteRow(tagForShowing){
        if (this.state.rowCount > 1) return tagForShowing;
    }
    checkIsShowButtonForDeleteColumn(tagForShowing){
        if (this.state.columnCount > 1) return tagForShowing;
    }
}

export default App;
