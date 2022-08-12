import axios from 'axios';
import { useState } from 'react';
import './ShoppingItem.css';

function ShoppingItem({shoppingList, getShoppingList}) {
    //we will need the list as a prop in this.
//We need a .map to return this info. waiting on useState variables to set this up.
    const handleDelete = (shoppingId) => {
        const id = shoppingId;
        axios({
            method: 'DELETE',
            url: `/list/${id}`
        }).then( response => {
            getShoppingList();
        }).catch( err => {
            console.log(err);
        })
    }

    return(
        <>
        <table>
            <thead>
                <tr>
                    <th>Item</th>
                    <th> Quantity</th>
                    <th> Unit</th>
                </tr>
            </thead>
            
            <tbody>
                
                {shoppingList.map(shoppingItem => (
                    <tr  className='items' key={shoppingItem.id}>
                        <td>{shoppingItem.item}</td>
                        <td>{shoppingItem.quantity}</td>
                        <td>{shoppingItem.unit}</td>
                        <td><button>Buy</button></td>
                        <td><button onClick={ () => handleDelete(`${shoppingItem.id}`)}>Delete</button></td>
                    </tr>
                ))}
                
            </tbody>
            
        </table>
        </>
    )
}

export default ShoppingItem;