import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class ItemConverse extends Component {
    render() {
        const { converse } = this.props;
        return (
            <div class="col-sm-3">
                <div className="card">
                    <div className="price">${converse.price}</div>
                    <Link to={"/view/" + converse._id}><img src={converse.img} alt="" /></Link>
                    <div className="body" >
                        <p className="name">{converse.name}</p>
                        <p className="code">#{converse.code}</p>
                    </div>
                </div>
            </div>
        );
    }
}
export default ItemConverse;