import styled from "styled-components";

const Frame = styled.form`
  margin: auto;
  padding: auto;
  text-align: center;
`;

export default function CandyForm({ addCandy }) {
  function submitHandler(e) {
    e.preventDefault();
    const candy = {
      id: candyname.value,
      name: candyname.value,
      description: description.value,
      price: price.value,
    };
    addCandy(candy);
  }

  return (
    <Frame onSubmit={submitHandler}>
      <label htmlFor="candyname">Candy name:</label>
      <input type="text" id="candyname" name="candyname" />
      <label htmlFor="description">Description:</label>
      <input type="text" id="description" name="description" />
      <label htmlFor="price">Price:</label>
      <input type="number" id="price" name="price" />
      <input type="submit" value="Add" />
    </Frame>
  );
}
