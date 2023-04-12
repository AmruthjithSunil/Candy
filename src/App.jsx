import { useState } from "react";
import CandyForm from "./components/CandyForm";
import CandyList from "./components/CandyList";
import CartButton from "./components/CartButton";
import Cart from "./components/Cart";
import styled from "styled-components";
import { createPortal } from "react-dom";

const Frame = styled.div`
  display: flex;
`;

const FormList = styled.div`
  width: 70%;
  margin: auto;
`;

export default function App() {
  const [candies, setCandies] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [isCartVisible, setIsCartVisible] = useState(false);

  function addCandy(candy) {
    setCandies((candies) => [candy, ...candies]);
  }

  function addCart(id, quantity) {
    setCartItems((cartItems) => {
      const index = cartItems.find((item) => item.id === id);
      if (index === undefined) {
        return [
          { ...candies.find((candy) => candy.id === id), quantity: quantity },
          ...cartItems,
        ];
      }
      return cartItems.map((cartItem) => {
        if (cartItem.id === id) {
          const temp = cartItem.quantity + quantity;
          return { ...cartItem, quantity: temp };
        }
        return cartItem;
      });
    });
  }

  function subtractCart(id) {
    setCartItems((cartItems) => {
      const cartItem = cartItems.find((item) => item.id === id);
      if (cartItem.quantity === 1) {
        return cartItems.filter((item) => item.id !== id);
      }
      return cartItems.map((item) => {
        if (item.id !== id) {
          return item;
        }
        return { ...item, quantity: cartItem.quantity - 1 };
      });
    });
  }

  function toggleCartVisibility() {
    setIsCartVisible((isCartVisible) => !isCartVisible);
  }

  return (
    <Frame>
      <FormList>
        <CandyForm addCandy={addCandy} />
        <CandyList candies={candies} addCart={addCart} />
      </FormList>
      <CartButton
        cartItems={cartItems}
        toggleCartVisibility={toggleCartVisibility}
      />
      {isCartVisible &&
        createPortal(
          <Cart
            cartItems={cartItems}
            toggleCartVisibility={toggleCartVisibility}
            addCart={addCart}
            subtractCart={subtractCart}
          />,
          document.getElementById("cart")
        )}
    </Frame>
  );
}
