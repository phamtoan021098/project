import React, { Component } from 'react';
class Total extends Component {
    render() {
        var { cart } = this.props;
        return (
            <div className="total">
                <h5 style={{ textAlign: 'left' }}>CART TOTALS</h5>
                <div className="subtotals" style={{ display: 'flex' }}>
                    <div className="col-sm-6">Subtotals :</div>
                    <div className="col-sm-6">${this.total(cart)}.00</div>
                </div>
                <div className="delivery" style={{ display: 'flex' }}>
                    <div className="col-sm-6">Delivery :</div>
                    <div className="col-sm-6">$0.00</div>
                </div>
                <div className="discount" style={{ display: 'flex' }}>
                    <div className="col-sm-6">Discount :</div>
                    <div className="col-sm 6">$0.00</div>
                </div>
                <hr />
                <div className="totals" style={{ display: 'flex' }}>
                    <div className="col-sm-6">TOTAL:</div>
                    <div className="col-sm 6">${this.total(cart)}.00</div>
                </div>
                <div className="checked" style={{ display: 'flex' }}>
                    <div className="col-sm-6" />
                    <div className="col-sm 6"><a name id className="btn" href="#" role="button">Procceed To Checkout</a></div>
                </div>
            </div>
        );
    }
    total = (cost) => {
        var total = 0;
        for (var i = 0; i < cost.length; i++) {
            total += cost[i].price * cost[i].quantity;
        }
        return total;
    }
}
export default Total;