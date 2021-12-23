import styled from "styled-components";

export const Card = () => {
  const CartStyled = styled.div`
    width: 200px;
    height: 100px;
    border: 1px solid red;
    border-radius: 6px;
  `;
  return <CartStyled>cart</CartStyled>;
};
