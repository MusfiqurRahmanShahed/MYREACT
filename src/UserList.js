import React from 'react';
import './App.css';

class UserList extends React.Component {
    //const { users, onDelete } = this.props;


    render() {
        return (
            <div className="user-list">
                <h3>Users List</h3>

                <button onClick={this.props.addUser}>Add User</button>

                <table className="user-table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>User Name</th>
                            <th>Role</th>
                            <th>Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {this.props.users.map(user => (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.userName}</td>
                                <td>{user.role}</td>
                                <td>
                                    <button onClick={() => this.props.onDelete(user.id)}>
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div >
        );
    }
}

export default UserList;