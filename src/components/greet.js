import React, { Component } from 'react';

class Greet extends Component {
    render() {
        const { name } = this.props
        return (
            <h1>Hello {name}</h1>
        )
    }
}

export default Greet;