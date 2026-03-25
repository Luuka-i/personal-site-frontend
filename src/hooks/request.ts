const BASE_URL = "http://localhost:18001/web";

type RequestOptions = {
  method?: "GET" | "POST" | "PUT" | "DELETE";
  data?: any;
  headers?: HeadersInit;
};

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

// 【全局统一后端返回格式】
export interface ApiResponse<T = any> {
  code: number;
  msg: string;
  data: T; // 这里用泛型，支持所有接口
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

  // body
  if (data && method !== "GET") {
    config.body = JSON.stringify(data);
  }

  try {
    const res = await fetch(BASE_URL + url, config);
    const result = await res.json() as ApiResponse;

    // 全局判断 code
    if (result.code !== 200) {
      throw new Error(result.msg || '请求失败');
    }

    return result.data;
  } catch (err) {
    console.error("请求异常：", err);
    throw err;
  }
}