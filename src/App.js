import { PrimaryButton } from "./components/atom/button/PrimaryButton";
import { SecondaryButton } from "./components/atom/button/SecondaryButton";
import { SearchInput } from "./components/molecules/Searchinput";
import { UserCard } from "./components/organism/user/UserCard";
import { HeaderOnly } from "./components/template/HeaderOnly";
import "./styles.css";

const user = {
  name: "じゃけぇ",
  image: "https://source.unsplash.com/NE0XGVKTmcA",
  email: "12345@aaa.com",
  tel: "000-999-0000",
  company: {
    name: "テスト株式会社"
  },
  website: "https://google.com"
};

export default function App() {
  return (
    <HeaderOnly>
      <PrimaryButton>テスト</PrimaryButton>
      <SecondaryButton>検索する</SecondaryButton>
      <br />
      <SearchInput />
      <UserCard user={user} />
    </HeaderOnly>
  );
}
