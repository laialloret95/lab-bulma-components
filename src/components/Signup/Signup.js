import React, { Component } from 'react';
import "bulma/css/bulma.css";
import './Signup.css';
import Navbar from '../Navbar/Navbar';
import FormField from '../FormField/FormField';
import Button from '../Button/Button';
import Message from '../Message/Message';

class Signup extends Component {
    render() {
        return(
        <div className = "container">
            <Navbar />
            <FormField label="Name" type="text" placeholder="Name" />
            <FormField label="Email" type="email" placeholder="Email" />
            <FormField label="Password" type="password" placeholder="Password" />
            <Button class="button is-small is-success" />
            <Message type="message is-success" header="Hello World" message="Lorem ipsum dolor sit amet, consectetur adipiscing elit."/>
        </div>
        )
    }
}

export default Signup;
