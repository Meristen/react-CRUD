import styled from "styled-components";

export const Button = styled.button`
  width: 200px;
  min-height: 40px;
  border: none;
  background-color: ${(props) =>
    props.$primary ? "blue" : props.$red ? "red" : "grey"};
  color: white;
  cursor: pointer;
`;
