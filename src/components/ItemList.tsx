import React, { Component } from 'react';
import Item from './Item';

class ItemListComponent extends Component {
    render() {
        const items = [
            {
                "id": 1,
                "name": "Beer",
                "price": 260
            },
            {
                "id": 2,
                "name": "Lager",
                "price": 280
            }
        ]
        return (
            <div>{items.map(item => <Item key={item.id} item={item} />)}</div>
        )
    }
}

export default ItemListComponent