import "./cart-dropdown.styles.jsx";
import { useContext } from "react";

import { CartContext } from "../../context/cart.context.jsx";

import CartItem from "../cart-item/cart-item.component.jsx";

import Button from "../button/button.component.jsx";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>
      <Button>GO TO CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;
