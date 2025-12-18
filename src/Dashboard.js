import React from 'react';
import UserList from './UserList';


class Dashboard extends React.Component {
    state = {
        users: [
            { id: 1, userName: "Musfiqur", role: "Admin" },
            { id: 2, userName: "Muaz", role: "User" },
            { id: 3, userName: "Nazmul", role: "User" },
            { id: 4, userName: "Rasel", role: "User" },
        ]
    };
    deleteUser = (id) => {
        const updatedUsers = this.state.users.filter(
            (user) => user.id !== id
        );

        this.setState({ users: updatedUsers });
    };
    addUser = () => {
        const newUser = {
            id: Date.now(),
            name: "New User",
            role: "User"
        };

        this.setState({
            users: [...this.state.users, newUser]
        });
    };
    render() {
        return (
            <div>
                <h1>Admin Dashboard</h1>
                <UserList users={this.state.users} onDelete={this.deleteUser} addUser={this.addUser}/>
            </div>
        );
    }
}

export default Dashboard;