import styled from "styled-components";

const Frame = styled.button`
  display: flex;
  margin: auto;
  background: rgb(92, 92, 203);
  padding: 0 3px;
  border-radius: 5px;
`;

const Counter = styled.div`
  background: black;
  color: white;
  padding: 8px 5px 0 5px;
  height: 28px;
  margin: auto;
  border-radius: 10px;
`;

const Title = styled.p`
  color: white;
  padding: 0 5px;
`;

export default function CartButton({ cartItems, toggleCartVisibility }) {
  return (
    <Frame onClick={toggleCartVisibility}>
      <Title>Your Cart</Title>
      <Counter>
        {cartItems.reduce((acc, cartItem) => acc + cartItem.quantity, 0)}
      </Counter>
    </Frame>
  );
}
