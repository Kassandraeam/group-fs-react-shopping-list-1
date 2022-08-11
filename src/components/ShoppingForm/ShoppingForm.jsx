

function ShoppingForm() {
    return (
        <>
            <h2>Add item</h2>
            <p>Item:</p><input placeholder='item' />
            <p>Quantity:</p><input placeholder='quantity' />
            <p>Unit:</p><input placeholder='unit'/>
            <button>Save</button>
        </>
    )
}

export default ShoppingForm