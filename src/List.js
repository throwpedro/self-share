import React, { Component } from 'react';

class List extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const users = this.props.users || [];
        let rows = users.map(
            user => {
                return (
                    <tr>
                        <td>{user.title}</td>
                    </tr>
                );
            }
        );
        
        return (
            <table>
                {rows}
            </table>
        )
    }
}
export default List;