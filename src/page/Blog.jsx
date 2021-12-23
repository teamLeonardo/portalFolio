import styled from "styled-components";

const ContBlogg = () => {
  const ContenidoStyled = styled.div`
    width: 100%;
    height: 300px;
    border: 1px solid var(--theme-color-04);
    border-radius: 6px;
    margin-top: 1rem;
  `;
  return <ContenidoStyled>contenido </ContenidoStyled>;
};

export const Blog = () => {
  const ListaDeContenido = new Array(10).fill(ContBlogg);
  return (
    <>
      {ListaDeContenido.map((Cont, idx) => {
        return <Cont key={idx} />;
      })}
    </>
  );
};
