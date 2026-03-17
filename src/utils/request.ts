const BASE_URL = "http://localhost:18001/believe";

type RequestOptions = {
  method?: "GET" | "POST" | "PUT" | "DELETE";
  data?: any;
  headers?: HeadersInit;
};

export async function request<T>(
  url: string,
  options: RequestOptions = {}
): Promise<T> {
  const { method = "GET", data, headers = {} } = options;

  const config: RequestInit = {
    method,
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
  };

  // // ====================
  // // ✅ 统一自动加 Token
  // // ====================
  // const token = localStorage.getItem("token");
  // if (token) {
  //   (config.headers as any).Authorization = `Bearer ${token}`;
  // }

  // body
  if (data && method !== "GET") {
    config.body = JSON.stringify(data);
  }

  try {
    const res = await fetch(BASE_URL + url, config);

//     // ====================
//     // ✅ 统一处理 401 登录过期
//     // ====================
//     if (res.status === 401) {
//       localStorage.removeItem("token");
//       alert("登录已过期，请重新登录");
//       window.location.href = "/login";
//       throw new Error("登录已过期");
//     }

    const result = await res.json();

    if (!res.ok) {
      throw new Error(result.message || "请求失败");
    }

    return result;
  } catch (err) {
    console.error("请求异常：", err);
    throw err;
  }
}

// 快捷调用
export const http = {
  get: <T>(url: string, params?: any) => {
    let query = "";
    if (params) {
      query = "?" + new URLSearchParams(params).toString();
    }
    return request<T>(url + query, { method: "GET" });
  },
  post: <T>(url: string, data: any) => request<T>(url, { method: "POST", data }),
  put: <T>(url: string, data: any) => request<T>(url, { method: "PUT", data }),
  delete: <T>(url: string) => request<T>(url, { method: "DELETE" }),
};