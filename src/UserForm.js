import { Component } from "react";

class UserForm extends Component {
    state = {
        id: null,
        userName: "",
        role: ""
    };

    componentDidUpdate(prevProps) {
        if (
            this.props.editingUser &&
            prevProps.editingUser !== this.props.editingUser
        ) {
            this.setState({
                id: this.props.editingUser.id,
                name: this.props.editingUser.name,
                role: this.props.editingUser.role
            });
        }
    }

    handleChange = (e) => {
        console.log(e.target.name, e.target.value);
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();

        if (this.state.id) {
            // update user
            //   const updatedUser = {
            //     id: this.state.id,
            //     userName: this.state.userName,
            //     role: this.state.role
            //   };
            this.props.onUpdateUser(this.state);
        } else {
            // add user
            const newUser = {
                id: Date.now(),
                userName: this.state.userName,
                role: this.state.role
            };

            this.props.onAddUser(newUser);
        }



        // reset form
        this.setState({ id: null, name: "", role: "" });
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h3>{this.state.id ? "Edit User" : "Add User" }</h3>

                <input
                    type="text"
                    name="userName"
                    placeholder="Name"
                    value={this.state.userName}
                    onChange={this.handleChange}
                />

                <select
                    name="role"
                    value={this.state.role}
                    onChange={this.handleChange}
                >
                    <option value="">Select Role</option>
                    <option value="Admin">Admin</option>
                    <option value="User">User</option>
                </select>

                <button type="submit">{this.state.id ? "Update" : "Add"}</button>
            </form>
        );
    }
}

export default UserForm;
