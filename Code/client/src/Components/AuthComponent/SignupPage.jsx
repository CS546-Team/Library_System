import React, { Component } from 'react';
import { Form, Segment, Select } from 'semantic-ui-react'

const choice = [
    { key: 'sta', text: 'Staff', value: 'staff' },
    { key: 'stu', text: 'Student', value: 'student' },
]

class SignupPage extends Component {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.handleOption = this.handleOption.bind(this);
        this.state = {
            username: "",
            hashedPassword: "",
            identity: "Male,defualt"
        };
    }

    handleSubmit(event) {
        event.preventDefault();
        const data = event.target;
        console.log(data);
        console.log(data.username);
        console.log(data.hashedPassword);
        console.log(data.identity);

        fetch('/user', {
            method: 'POST',
            body: data,
        });
    }

    handleInput(event) {
        let target = event.target.name;
        let data = event.target;
        this.setState({
            [target]: data.value
        });

        console.log(target);
        console.log(data.name);
        // console.log(data.hashedPassword);
        // console.log(data.identity);
    }

    handleOption(event) {

        console.log(event);

        this.setState({
            identity: event.target.value
        });

        console.log(this.state);

    }

    render() {
        return (
            <Segment raised>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Field>
                        <Form.Input fluid label='Username' name="username"
                            onChange={this.handleInput} value={this.state.username}
                            placeholder='Your Username' />
                    </Form.Field>
                    <Form.Field>
                        <Form.Input fluid label='Password' name="hashedPassword"
                            onChange={this.handleInput} value={this.state.hashedPassword}
                            placeholder='Your Password' />
                    </Form.Field>
                    <Form.Field>
                        <Form.Select fluid label='Identity' name="identity"
                            onChange={this.handleOption} value={this.state} options={choice}
                            placeholder='Your Identity' />
                    </Form.Field>
                    <Form.Field label='An HTML <select>' control='select'
                        onChange={this.handleOption} value={this.state.identity}>
                        <option value='male'>Male</option>
                        <option value='female'>Female</option>
                    </Form.Field>
                    <Form.Button>Submit</Form.Button>
                </Form>
            </Segment>
        )
    }
}

export default SignupPage;