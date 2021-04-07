import React from 'react'
import classes from './Builder.module'

const Builder = () => {
    return (
        <div className={classes.builder}>
            <h3>Build your own Ice Cream Sundae</h3>
            <div className="react" id="items">
                <ul>
                    <li className="item">
                        <span>Orange</span>
                        <div className="right">
                            <button type="button" className="plus rounded">+</button>
                            <button type="button" className="minus rounded">-</button>
                        </div>
                    </li>
                </ul>
            </div>

            <div className="total react" id="total">
                <div>Total Price</div>
                <div>3000.00 Tk</div>
            </div>
            <button type="button" onclick="next()" className="order rounded">Add to Cart</button>
        </div>
    )
}

export default Builder
