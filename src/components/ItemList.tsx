import React from 'react';
import ItemComponent from './Item';
import Item from '../models/Item';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag'


const QUERY = gql`
{
    items {
        id
        name
        price
    }
}
`

function Content() {
    const { loading, error, data } = useQuery(QUERY);

    if (loading) return <div>Loading..</div>
    if (error) return <div>Error...</div>
    if (!data) return <div>No Data..</div>

    const items: Item[] = data.items;
    return (<div>{items.map((item: Item) => <ItemComponent key={item.id} item={item} />)}</div>)
}

const ItemListComponent = () => <Content />


export default ItemListComponent