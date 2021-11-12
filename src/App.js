import { PrimaryButton } from "./components/atom/button/PrimaryButton";
import { SecondaryButton } from "./components/atom/button/SecondaryButton";
import { SearchInput } from "./components/molecules/Searchinput";
import { UserCard } from "./components/organism/user/UserCard";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <PrimaryButton>テスト</PrimaryButton>
      <SecondaryButton>検索する</SecondaryButton>
      <br />
      <SearchInput />
      <UserCard />
    </div>
  );
}
