import { useState } from 'react';

const [item, setItem] = useState('');
const [quantity, setQuantity] = useState(0);
const [unit, setUnit] = useState('')


function ShoppingForm({newShoppingItem}) {
    return (
        <>
            <h2>Add item</h2>
            <p>Item:</p><input placeholder='item' onChange={ (event) => setItem(event.target.value)} />
            <p>Quantity:</p><input placeholder='quantity' onChange={ (event) => setQuantity(event.target.value)} />
            <p>Unit:</p><input placeholder='unit' onChange={ (event) => setUnit(event.target.value)} />
            <button onClick={newShoppingItem}>Save</button>
        </>
    )
}

export default ShoppingForm;