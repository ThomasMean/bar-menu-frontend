import React, { Component } from 'react';
import Item from '../models/Item'

interface ItemProps {
    item: Item;
}

class ItemComponent extends Component<ItemProps> {
    render() {
        return (
            <div>
                <p>{this.props.item.name} - {this.props.item.price}</p>
            </div>
        )
    }
}

export default ItemComponent