import React, { useContext, memo } from "react";
//Contextを使用するためのツール
import { useRecoilValue } from "recoil";
//値しか使用しない時は、 値を参照するだけものもある。
import styled from "styled-components";
import { userState } from "../../../store/userState";
// import { UserContext } from "../../../providers/UserProvider";

export const UserIconWithName = memo((props) => {
  const { image, name } = props;
  //importしていたisAdminを消して変数設定することができる。
  // const { userInfo } = useContext(UserContext);
  //どのcontextを使用するかを指定する。
  const userInfo = useRecoilValue(userState);
  const isAdmin = userInfo ? userInfo.isAdmin : false;
  // console.log("UserIcon");
  return (
    <SContainer>
      {/* heightとwidthも渡せるようにすれば大きさも変えれる。 */}
      <SImage height={160} width={160} src={image} alt="プロフィール" />
      <SName>{name}</SName>
      {isAdmin && <SEdit>編集</SEdit>}
    </SContainer>
  );
});

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
