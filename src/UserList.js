import React from 'react';
import './App.css';

class UserList extends React.Component {

    render() {
        const {onEdit } = this.props;
        return (
            <div className="user-list">
                <h3>Users List</h3>


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
                                    <button onClick={() => onEdit(user)}>
                                        Edit
                                    </button>
                                    &nbsp;
                                    &nbsp;
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