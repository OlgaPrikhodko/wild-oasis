import { css, styled } from "styled-components";

type RowProps = {
  type?: "horisontal" | "vertical";
};

const Row = styled.div<RowProps>`
  display: flex;

  ${(props) =>
    props.type === "horisontal" &&
    css`
      justify-content: space-between;
      align-items: center;
    `}

  ${(props) =>
    props.type === "vertical" &&
    css`
      flex-direction: column;
      gap: 1.6rem;
    `}
`;

Row.defaultProps = { type: "vertical" };

export default Row;
