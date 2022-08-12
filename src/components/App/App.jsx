
import React, { useState } from 'react';

import Header from '../Header/Header.jsx'
import './App.css';
import ShoppingForm from '../ShoppingForm/ShoppingForm.jsx';




function App() {

    let [shoppingList, setShoppingList] = useState([]);

    useEffect(() => {
        getShoppingList()
    }, [])

    const getShoppingList = () => {
        axios({
            method: 'GET',
            url: '/list'

        }).then(response => {
            setShoppingList(response.data)
        }).catch(err => {
            alert('error getting list')
            console.log(err);
        })

    }

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
        <div className="App">
            <Header />
            <ShoppingForm />
            <main>
                <p>Under Construction...</p>
            </main>
        </div>
    );
}

export default App;

