import React, {useContext} from "react";
//Contextを使用するためのツール
import styled from "styled-components";
import {UserContext} from "../../../providers/UserProvider"

export const UserIconWithName = (props) => {
  const { image, name, isAdmin } = props;
  const context = useContext(UserContext);
  //どのcontextを使用するかを指定する。
  console.log(context)
  return (
    <SContainer>
      {/* heightとwidthも渡せるようにすれば大きさも変えれる。 */}
      <SImage height={160} width={160} src={image} alt="プロフィール" />
      <SName>{name}</SName>
      {isAdmin && <SEdit>編集</SEdit>}
    </SContainer>
  );
};

const SContainer = styled.div`
  text-align: center;
`;

const SImage = styled.img`
  border-radius: 50%;
`;

const SName = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin: 0;
  color: #40514e;
`;

const SEdit = styled.span`
  text-decoration: underline;
  color: #aaa;
  cursor: pointer;
`;
