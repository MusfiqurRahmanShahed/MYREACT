import React from 'react';

class Login extends React.Component {

    state = {
        username: '',
        password: '',
    };


    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.onLogin();
    }

    render() {
        const { username, password } = this.state;
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="username">
                    Username:
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={username}
                        onChange={this.handleChange}
                    />
                </label>
                <br/>
                <br/>
                <label htmlFor="password">
                    Password:
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={password}
                        onChange={this.handleChange}
                    />
                </label>
                <br/>
                <br/>
                <button type="submit">Login</button>
            </form>
        );
    }
}

export default Login;