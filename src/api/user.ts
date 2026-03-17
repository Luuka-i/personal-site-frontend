import { http } from "@/utils/request";

// 获取用户信息
export function getUserInfo(params: { userId: number}) {
  return http.get("/user/userDetail", params);
}
