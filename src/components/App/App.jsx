import React, { useState, useEffect } from 'react';
import axios from 'axios'

import Header from '../Header/Header.jsx'
import './App.css';
import ShoppingForm from '../ShoppingForm/ShoppingForm.jsx';
import ShoppingItem from '../ShoppingItem/ShoppingItem.jsx';
import ShoppingList from '../ShoppingList/ShoppingList.jsx';




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


    return (
        <div className="App">
            <Header />
            <ShoppingForm getShoppingList={getShoppingList}/>
            <main>
                <ShoppingList />
                <ShoppingItem shoppingList={shoppingList}/>
            </main>
        </div>
    );
}

export default App;

