import React, { Component } from "react";


class App extends Component {

    constructor() {
        super()
        this.state = {
            orders: []
        }
    }

    fetchOrders = () => {
        fetch('https://island-bramble.glitch.me/orders')
        .then(response => response.json())
        .then(orders => {
        this.setState({
            orders: orders
        })
        })
    }

    componentDidMount() {
        this.fetchOrders()
    }


    render() {

        const orders = this.state.orders
        const ordersList = orders.map((order, index) => {
            return <li key ={index}>
                <div>{order.name}</div>
                <div>{order.coffeeName}</div>
                <div>{order.total}</div>
                <div>{order.size}</div>
                </li>
        })


        return (
            <div>
            <h1>Coffee Orders</h1>
            <input type="text" placeholder="Name" name="name" onChange = {this.inputChange}/>
            <input type="text" placeholder="Coffee Order" name="coffeeName" onChange = {this.inputChange}/>
            <input type="float" placeholder="Price" name="total" onChange = {this.inputChange}/>
            <input type="text" placeholder="Size" name="size" onChange = {this.inputChange}/>
            <button>Place Order</button>

            <ul>{ordersList}</ul>
            
            </div>
        )
        }


}

export default App