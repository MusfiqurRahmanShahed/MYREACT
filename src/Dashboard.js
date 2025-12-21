import React from 'react';
import UserForm from './UserForm';
import UserList from './UserList';


class Dashboard extends React.Component {
    state = {
        users: [
            { id: 1, userName: "Musfiqur", role: "Admin" },
            { id: 2, userName: "Muaz", role: "User" },
            { id: 3, userName: "Nazmul", role: "User" },
            { id: 4, userName: "Rasel", role: "User" },
        ],
        editingUser: null
    };
    deleteUser = (id) => {
        const updatedUsers = this.state.users.filter(
            (user) => user.id !== id
        );

        this.setState({ users: updatedUsers });
    };
    addUser = (user) => {
        // const newUser = {
        //     id: Date.now(),
        //     name: "New User",
        //     role: "User"
        // };

        this.setState({
            users: [...this.state.users, user]
        });
    };

    startEdit = (user) => {
    this.setState({ editingUser: user });
  };

    updateUser = (updatedUser) => {
        const users = this.state.users.map(user =>
            user.id === updatedUser.id ? updatedUser : user
        );

        this.setState({
            users,
            editingUser: null
        });
    };

    render() {
        return (
            <div>
                <h1>Admin Dashboard</h1>
                <UserForm 
                onAddUser={this.addUser} 
                onUpdateUser={this.updateUser} 
                editingUser={this.state.editingUser}
                />
                <UserList 
                users={this.state.users} 
                onDelete={this.deleteUser} 
                onEdit={this.startEdit}
                />
            </div>
        );
    }
}

export default Dashboard;