const express = require('express');
const app = express.Router();
const pool = require('../modules/pool');

app.post('/', (req, res) => {
    // const here
    const newShoppingItem = [req.body.item, req.body.quantity, req.body.unit]
    const queryText = `INSERT INTO shoppingList VALUES ($1, $2, $3)`;

    pool.query(queryText, newShoppingItem)
        .then((result) => {
            res.sendStatus(201);
        }).catch((error) => {
            console.log(`Error making database query`, error);
            res.sendStatus(500);
        })
})

module.exports = app;