import React, { Component } from 'react';
import "bulma/css/bulma.css";
import './Message.css';


class Message extends Component {
    render() {
        return (
            <article className={this.props.type} >
            <div className="message-header">
                <p>{this.props.header}</p>
                <button className="delete" aria-label="delete"></button>
            </div>
            <div className="message-body">
                {this.props.message}
            </div>
            </article>
        )
    }
}

export default Message;



