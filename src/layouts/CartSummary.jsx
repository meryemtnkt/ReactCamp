import React from 'react'
import { NavLink } from 'react-router-dom'
import { Dropdown,label } from 'semantic-ui-react'
import { useSelector } from 'react-redux'
export default function CartSummary() {

    const { cartItems } = useSelector(state => state.cart)

    return (
        <div>
            <Dropdown item text='Sepetiniz'>
                <Dropdown.Menu>
                    {
                        cartItems.map((cartItem) => (

                            <Dropdown.Item>
                                {cartItem.product.productName}
                                <label>
                                    {cartItem.quantity}
                                </label>
                            </Dropdown.Item>
                        ))
                    }
                    {/* <Dropdown.Item>Acer Laptop</Dropdown.Item>
                    <Dropdown.Item>Asus Laptop</Dropdown.Item>
                    <Dropdown.Item>Dell Laptop</Dropdown.Item> */}
                    <Dropdown.Divider />
                    <Dropdown.Item as={NavLink} to="/cart">Sepete git</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    )
}
