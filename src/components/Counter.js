import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }
    addCount() {
        this.setState((prevState) => ({
            count: prevState.count + 1
        }), () => { console.log(this.state.count) })
    }
    minCount() {
        this.setState({
            count: this.state.count - 1
        }, () => { console.log('Callback value', this.state.count) })
    }
    incre() {
        this.addCount();
        this.addCount();
        this.addCount();
        this.addCount();
        this.addCount();
    }
    render() {
        return (
            <div>
                <div>{this.state.count}</div>
                <button onClick={() => this.addCount()}>Add</button>
                <button onClick={() => this.minCount()}>Decrease</button>
                <button onClick={() => this.incre()}>Five</button>
            </div>
        )
    }
}

export default Counter