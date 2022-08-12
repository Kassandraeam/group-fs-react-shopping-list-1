const express = require('express');
const app = express.Router();
const pool = require('../modules/pool');
//const router = express.Router();

// Setup a GET route to get all the guest from the database
app.get('/', (req, res) => {
    // When you fetch all things in these GET routes, strongly encourage ORDER BY
    // so that things always come back in a consistent order 
    const sqlText = `SELECT * FROM shoppinglist ORDER BY item;`;
    pool.query(sqlText)
        .then((result) => {
            console.log(`Got stuff back from the database`, result);
            res.send(result.rows);
        })
        .catch((error) => {
            console.log(`Error making database query ${sqlText}`, error);
            res.sendStatus(500); // Good server always responds
        })
})


app.post('/', (req, res) => {
    // const here
    const newShoppingItem = [req.body.item, req.body.quantity, req.body.unit]
    const queryText = `INSERT INTO shoppinglist (item, quantity, unit) VALUES ($1, $2, $3)`;

    pool.query(queryText, newShoppingItem)
        .then((result) => {
            res.sendStatus(201);
        }).catch((error) => {
            console.log(`Error making database query`, error);
            console.log(req.body);
            res.sendStatus(500);
        })
})

app.delete( '/:id', (req, res) => {
    const id = req.params.id;
    const queryText = 'DELETE FROM shoppinglist WHERE id = $1';

    pool.query(queryText, [id])
        .then( response => {
            res.sendStatus(204);
        }).catch( err => {
            console.log(log);
        })
})

module.exports = app;