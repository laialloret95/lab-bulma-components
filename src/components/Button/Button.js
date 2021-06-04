import React, { Component } from 'react';
import "bulma/css/bulma.css";

class Button extends Component {
    render() {
        return (
            <button class={this.props.class} >Click me</button>
        )
    }
}

export default Button;

