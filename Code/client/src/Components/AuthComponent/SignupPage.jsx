import React, { Component } from 'react';
import { Form, Segment, Radio } from 'semantic-ui-react'

const choice = [
    { key: 'sta', text: 'Staff', value: 'staff' },
    { key: 'stu', text: 'Student', value: 'student' },
]

class SignupPage extends Component {
    
/*constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.handleOption = this.handleOption.bind(this);
    }*/

    getInitialState() {
        return {
            value: 'Hello'
        };
    }

    handleSubmit(event) {
        event.preventDefault();
        const data = event.target;
        console.log(data);
        console.log(data.username.value);
        console.log(data.hashedPassword.valie);
        console.log(data.identity);

        fetch('/user', {
            method: 'POST',
            body: data,
        });
    }

    handleInput(event) {
        this.setState({
            value: event.target.value
        });
        //console.log(renderName);
        //console.log(renderPass);
    }

    handleOption(event) {
        this.setState({
            value: event.target.value
        });
        //console.log(renderId);
    }

    render() {
        let value = this.state.value;
        //let renderName = this.state.username;
        //let renderPass = this.state.hashedPassword;
        //let renderId = this.state.identity;
        return (
            <Segment raised>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Field>
                        <Form.Input fluid label='Username' name="username"
                            onChange={this.handleInput} value={value}
                            placeholder='Your Username' />
                            <p>{value}</p>
                    </Form.Field>
                    <Form.Field>
                        <Form.Input fluid label='Password' name="hashedPassword"
                            onChange={this.handleInput} value={value}
                            placeholder='Your Password' />
                            <p>{value}</p>
                    </Form.Field>
                    <Form.Group inline>
                        <label>Identity</label>
                        <Form.Field
                            control={Radio}
                            label='Staff'
                            value='staff'
                            checked={value === 'staff'}
                            onChange={this.handleOption}
                        />
                        <Form.Field
                            control={Radio}
                            label='Student'
                            value='student'
                            checked={value === 'student'}
                            onChange={this.handleOption}
                        />
                        <p>{value}</p>
                    </Form.Group>
                    <Form.Button>Submit</Form.Button>
                </Form>
            </Segment>
        )
    }
}

export default SignupPage;