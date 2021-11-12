import styled from "styled-components";

export const Card = (props) => {
  const { children } = props;
  return <SCard>{children}</SCard>;
};
//渡されたものを囲むもの。
const SCard = styled.div`
  background-color: #fff;
  box-shadow: #ddd 0px 0px 4px 2px;
  border-radius: 8px;
  padding: 16px;
`;
//card自体には大きさの概念を持たせない。というのは、大きさを持たせると他の要素を入れたときに大きさが邪魔になるから。
