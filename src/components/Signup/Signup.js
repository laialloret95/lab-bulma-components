import React, { Component } from 'react';
import "bulma/css/bulma.css";
import Navbar from '../Navbar/Navbar';
import FormField from '../FormField/FormField';
import Button from '../Button/Button';

class Signup extends Component {
    render() {
        return(
        <div>
            <Navbar />
            <FormField label="Name" type="text" placeholder="Name" />
            <FormField label="Email" type="email" placeholder="Email" />
            <FormField label="Password" type="password" placeholder="Password" />
            <Button class="button is-small is-success" />
        </div>
        )
    }
}

export default Signup;
