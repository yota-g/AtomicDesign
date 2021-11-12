import styled from "styled-components";

export const BaseButton = styled.button`
  color: #fff;
  padding: 6px 24px;
  border: none;
  border-radius: 9999px;
  outline: none;
  &:hover {
    cursor: pointer-events;
    opacity: 0.8;
  }
`;
//共通部分を他のコンポで使用できるようにできる。
