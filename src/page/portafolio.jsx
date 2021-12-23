import styled from "styled-components";
import { Card } from "../component/card/Card";

export const Portafolio = () => {
  const ListCart = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    gap: 1rem;
    width: 100%;
  `;
  return (
    <ListCart>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </ListCart>
  );
};
