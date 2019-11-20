import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Items extends Component {

    render() {
        var { item, index } = this.props;
        return (
            <div className="col-sm-3" >
                <div className="card">
                    <div className="price">${item.price}</div>
                    <Link to={"/view/"+item._id}><img src={`/${item.img}`} alt="" /></Link>
                    <div className="body" >
                        <p className="name">{item.name}</p>
                        <p className="code">#{item.code}</p>
                    </div>
                </div>
            </div >
        );
    }

}
export default Items;