import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
        super(props)

        this.state = {
            message: 'Hello'
        }
        this.handleEvent = this.handleEvent.bind(this);
    }
    handleEvent() {
        this.setState({
            message: 'Goodbye'
        })
        console.log(this)
    }
    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                {/* <button onClick={this.handleEvent.bind(this)}>EventClick</button> */}
                <button onClick={this.handleEvent}>EventClick</button>
            </div>
        )
    }
}

export default EventBind