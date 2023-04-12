import styled from "styled-components";

const Frame = styled.div`
  text-align: center;
`;

export default function CandyList({ candies, addCart }) {
  function add(quantity) {
    return function (e) {
      addCart(e.target.parentNode.id, quantity);
    };
  }

  return (
    <Frame>
      {candies.map((candy) => (
        <div id={candy.id} key={candy.id}>
          {candy.name} {candy.description} {candy.price}Rs{" "}
          <button onClick={add(1)}>buy 1</button>
          <button onClick={add(2)}>buy 2</button>
          <button onClick={add(3)}>buy 3</button>
        </div>
      ))}
    </Frame>
  );
}
