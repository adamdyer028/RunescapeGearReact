import React, { Component, useState } from 'react';
import UserService from '../services/UserService';

class UserDisplayComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []
        }
    }
    componentDidMount() {
        UserService.getUsers().then((response) => {
            this.setState({users: response.data})
        })
    }
    render() {
        return (
            <div>
                <h2>Users List</h2>
                <div>
                    <table>
                        <thead>
                            <tr>
                                <th> User Username</th>
                                <th> User Password</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.users.map(
                                    user =>
                                    <tr key={user.id}>
                                        <td> {user.username} </td>
                                        <td> {user.password} </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default UserDisplayComponent;