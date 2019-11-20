import React, { Component } from 'react';
class Item extends Component {
    render() {
        var { item, key } = this.props;
        return (
             <tr>
                <td>
                    <a name="" id="" class="btn" href="#" role="button">X
                                    </a>
                </td>
                <td><img src={item.image} style={{ height: '100px', width: '100px' }} alt="" /></td>
                <td><p>{item.name}</p></td>
                <td><p>${item.price}</p></td>
                <td>{item.quantity}</td>
                <td>${this.total(item.quantity, item.price)}</td>
            </tr>
        );
    }
    total = (a, b) => {
        return a * b;
    }
}
export default Item;