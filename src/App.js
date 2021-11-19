// import { BrowserRouter } from "react-router-dom";
// import { PrimaryButton } from "./components/atom/button/PrimaryButton";
// import { SecondaryButton } from "./components/atom/button/SecondaryButton";
// import { SearchInput } from "./components/molecules/Searchinput";
// import { UserCard } from "./components/organism/user/UserCard";
// import { DefaultLayout } from "./components/template/DefaultLayout";
// import { HeaderOnly } from "./components/template/HeaderOnly";
import { UserProvider } from "./providers/UserProvider";
import { Router } from "./router/Router";
import "./styles.css";

// const user = {
//   name: "じゃけぇ",
//   image: "https://source.unsplash.com/NE0XGVKTmcA",
//   email: "12345@aaa.com",
//   tel: "000-999-0000",
//   company: {
//     name: "テスト株式会社"
//   },
//   website: "https://google.com"
// };

export default function App() {
  return (
    <UserProvider>
      <Router />
    </UserProvider>
    //UserProviderで囲った範囲ではcontextが参照できるようになる。
    // return (
    // <BrowserRouter>
    //   <DefaultLayout>
    //     <PrimaryButton>テスト</PrimaryButton>
    //     <SecondaryButton>検索する</SecondaryButton>
    //     <br />
    //     <SearchInput />
    //     <UserCard user={user} />
    //   </DefaultLayout>
    // </BrowserRouter>
    // );
  );
}
