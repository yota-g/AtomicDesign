import styled from "styled-components";
import { BaseButton } from "./BaseButton";

export const SecondaryButton = (props) => {
  const { children, onClick } = props;
  return <SButton onClick={onClick}>{children}</SButton>;
};
//よく使うデザインを持っていると使用しやすい。
// const SButton = styled.button`
const SButton = styled(BaseButton)`
  background-color: #11999e;
  /* color: #fff;
  padding: 6px 24px;
  border: none;
  border-radius: 9999px;
  outline: none;
  &:hover {
    cursor: pointer-events;
    opacity: 0.8; */
  /* } */
`;
//PrimaryButtonとSecondaryButtonでcssが共通の部分があればその部分を共通として作成することができる。
//既存のcssにさらに追加でコンポで上書きするときは、styledの後ろに囲ってそのコンポを入れる。
