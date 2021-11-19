import React, { createContext, useState } from "react";
// Contextを使うにはcreateContextをimportする必要がある。
export const UserContext = createContext({});
// 他の画面でContextの値を使用するときに使うのでexportする
export const UserProvider = (props) => {
  const { children } = props;
  const [userInfo, setUserInfo] = useState(null);
  //値が更新されたら全て使用している値が再レンダリングされてしまう。
  //そのページで表示されている要素全てが再レンダリングされてしまう。
  //更新箇所だけ更新したい。学んできたことの復習。
  // const contextName = userInfo;
  // ここにstateを設定することでどのコンポからでも更新することができる。
  return (
    // globalで参照できる値を入れる必要がある。それがchildrenで参照できるようになる。
    // <UserContext.Provider value={{ contextName }}>
    <UserContext.Provider value={{ userInfo, setUserInfo }}>
      {/* 配下からUsestateを使用することができる。 */}
      {children}
    </UserContext.Provider>
    // Providerとして、先ほど作成したContextの中でProviderがあるのでそれを返却するようになる。
    //childerenでどんなものでも受け取れるようにしている。
  );
};
