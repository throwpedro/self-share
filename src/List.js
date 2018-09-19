import React, { Component } from 'react';

class List extends Component {
    render() {
        let items = this.props.items || [];
        let rows = items.map(
            item => {
                return (
                    <tr>
                        <td>{item.title}</td>
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