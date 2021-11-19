import styled from "styled-components";
import { SearchInput } from "../molecules/Searchinput";
import { UserCard } from "../organism/user/UserCard";
import { SecondaryButton } from "../atom/button/SecondaryButton";
// import { useContext } from "react";
// import { UserContext } from "../../providers/UserProvider";
// import { useLocation } from "react-router-dom";
import { useRecoilState } from "recoil";
import { userState } from "../../store/userState";

const users = [...Array(10).keys()].map((val) => {
  return {
    id: val,
    name: `じゃけぇ${val}`,
    image: "https://source.unsplash.com/NE0XGVKTmcA",
    email: "12345@aaa.com",
    tel: "000-999-0000",
    company: {
      name: "テスト株式会社"
    },
    website: "https://google.com"
  };
});

export const Users = () => {
  // const { state } = useLocation();
  // console.log(state);
  //stateの確認を実施。
  // const isAdmin = state ? state.isAdmin : false;
  // const { userInfo, setUserInfo } = useContext(UserContext);
  const [userInfo, setUserInfo] = useRecoilState(userState);
  // 通常のstateと同じように使用することができる
  const onClickSwitch = () => setUserInfo({ isAdmin: !userInfo.isAdmin });
  // 親コンポが再レンダリングされると子も全て再レンダリングされる。実際にする必要はないので、使用する子コンポにmemoを使用する。
  return (
    <SContainer>
      <h2>ユーザー一覧</h2>
      <SearchInput />
      <br />
      <SecondaryButton onClick={onClickSwitch}>切り替え</SecondaryButton>
      <SUserArea>
        {users.map((user) => (
          // <UserCard key={user.id} user={user} isAdmin={isAdmin} />
          <UserCard key={user.id} user={user} />
        ))}
      </SUserArea>
    </SContainer>
  );
};

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`;

const SUserArea = styled.div`
  padding-top: 40px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
`;
