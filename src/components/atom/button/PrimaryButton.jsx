import styled from "styled-components";
import { BaseButton } from "./BaseButton";

export const PrimaryButton = (props) => {
  const { children } = props;
  return (
    // <button>{children}</button>
    <SButton>{children}</SButton>
  );
};
// このコンポの役割が何かを考えてコンポを作成することが大切。
//画面の主要となるボタンをデザイン
//親要素から言葉を受け取ってそれぞれ入れた言葉を使用できるようにする。

// const SButton = styled.button`
const SButton = styled(BaseButton)`
  background-color: #40514e;
  /* color: #fff;
  padding: 6px 24px;
  border: none;
  border-radius: 9999px;
  outline: none;
  &:hover {
    cursor: pointer-events;
    opacity: 0.8;
  } */
`;
