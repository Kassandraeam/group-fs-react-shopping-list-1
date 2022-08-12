import { useState } from 'react';
import axios from 'axios'


function ShoppingForm({getShoppingList}) {

    const [item, setItem] = useState('');
    const [quantity, setQuantity] = useState(0);
    const [unit, setUnit] = useState('')

    const newShoppingItem = () => {
        axios({
            method: 'POST',
            url: '/list',
            data: {
                item: item,
                quantity: quantity,
                unit: unit
            }
        }).then( response => {
            console.log(response);
            getShoppingList();
        }).catch( err => {
            console.log(err);
        })
    }

    return (
        <>
            <h2>Add item</h2>
            <p>Item:</p><input placeholder='item' type="string" onChange={ (event) => setItem(event.target.value)} />
            <p>Quantity:</p><input placeholder='quantity' type="number" onChange={ (event) => setQuantity(event.target.value)} />
            <p>Unit:</p><input placeholder='unit' type="string" onChange={ (event) => setUnit(event.target.value)} />
            <button onClick={newShoppingItem}>Save</button>
        </>
    )
}

export default ShoppingForm;