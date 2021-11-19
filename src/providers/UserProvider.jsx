import React, { createContext } from "react";
// Contextを使うにはcreateContextをimportする必要がある。
export const UserContext = createContext({});
// 他の画面でContextの値を使用するときに使うのでexportする
export const UserProvider = (props) => {
  const { children } = props;
  const contextName = "じゃけぇ";
  return (
    // globalで参照できる値を入れる必要がある。それがchildrenで参照できるようになる。
    <UserContext.Provider value={{ contextName }}>
      {children}
    </UserContext.Provider>
    // Providerとして、先ほど作成したContextの中でProviderがあるのでそれを返却するようになる。
    //childerenでどんなものでも受け取れるようにしている。
  );
};
