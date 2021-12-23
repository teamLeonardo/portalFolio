import { useEffect, useState } from "react";
import styled, { css } from "styled-components";
const sizeGenerate = (size) => {
  if (size === "big") {
    return css`
      width: 220px;
      height: 110px;
      border-radius: 60px;
      div.inner {
        width: 80px;
        height: 80px;
        font-size: 3rem;
      }
    `;
  }
  if (size === "small") {
    return css`
      width: 60px;
      height: 30px;
      border-radius: 30px;
      div.inner {
        width: 21px;
        height: 21px;
      }
    `;
  }
  return css`
    width: 80px;
    height: 40px;
    border-radius: 30px;
    div.inner {
      width: 28.5px;
      height: 28.5px;
    }
    .inner:active {
      width: 31px;
    }
  `;
};
const ToggleStyled = styled.div`
  ${(props) => sizeGenerate(props.size)}
  position: relative;
  border: 1px solid var(--theme-color-05);
  div.inner {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    background: var(--theme-color-05);
    color: var(--theme-color-04);
    cursor: pointer;
    border-radius: 50%;
    transform: translate(18%, 18%);
    transition: all 0.5s;
  }
  .inner.active {
    transform: translate(158%, 18%);
  }

  /* box-shadow: inset 2px 2px 6px 2px #00000078, inset -2px -2px 6px 4px #fff; */
`;

export const Toggle = ({ size, icons = {}, initState, onToggle }) => {
  // size ??= "asdasd" ;
  const [state, setState] = useState();

  useEffect(() => {
    setState(initState);
  }, [initState]);
  // const theme = document.body.querySelector(".container-main")?.dataset.bg;

  const { ico1, ico2 } = icons;

  const handleChange = () => {
    onToggle && onToggle(!state);
    setState(!state);
  };
  return (
    <ToggleStyled {...{ size }} onClick={() => handleChange()}>
      <div className={`inner ${state === true && "active"}`}>
        {state ? ico1 : ico2}
      </div>
    </ToggleStyled>
  );
};
