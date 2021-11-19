//Recoilの場合はコンポ使用しないのでjsファイルでOK
import { atom } from "recoil";

//ファイル名とkeyは同じにしておいた方がいい。
//他のrecoilと被ったらあかん。
export const userState = atom({
  key: "userState",
  default: { isAdmin: false }
});
//これだけでglobalなstateが定義できてしまう。
