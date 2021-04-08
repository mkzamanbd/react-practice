import React, { Component } from 'react'
import Builder from '../../components/Builder/Builder'
import IceCream from '../../components/IceCream/IceCream'
import styles from './IceCreamBuilder.module.css'

export default class IceCreamBuilder extends Component {
  state = {
	  items:{
		vanilla: 40,
		chocolate: 50,
		strawberry: 55,
		orange: 70,
		lemon: 30,
	  },
	  scoops: ['vanilla'],
	  totalPrice: 0
  };

	addScoop = (scoop) => {
		const { scoops, items } = this.state;
        const workingScoops = [...scoops];
        workingScoops.push(scoop);
        this.setState((prevState) => {
            return {
                scoops: workingScoops,
                totalPrice: prevState.totalPrice + items[scoop],
            };
        });
	}

	removeScoop = (scoop) => {
        const { scoops, items } = this.state;
        const workingScoops = [...scoops];

        const scoopIndex = workingScoops.findIndex((sc) => sc === scoop);

        workingScoops.splice(scoopIndex, 1);
        this.setState((prevState) => {
            return {
                scoops: workingScoops,
                totalPrice: prevState.totalPrice - items[scoop],
            };
        });
    };

	render() {
		const { scoops, items, totalPrice } = this.state;
		return (
			<div className={['container', styles.container].join(' ')}>
				<IceCream
					items={items}
					scoops={scoops}
				/>
				<Builder
					scoops={scoops}
					price={totalPrice}
					items={items}
					add={this.addScoop}
					remove={this.removeScoop}
				/>
			</div>
		)
	}
}
