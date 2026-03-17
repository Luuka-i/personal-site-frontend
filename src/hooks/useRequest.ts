// src/hooks/useRequest.ts
import { useState } from "react";

export function useRequest<T>(fn: (...args: any[]) => Promise<T>) {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState("");

  const run = async (...args: any[]) => {
    setLoading(true);
    setError("");

    try {
      const res = await fn(...args);
      setData(res);
      return res;
    } catch (err: any) {
      setError(err.message);
      alert(err.message); // 全局错误提示
    } finally {
      setLoading(false);
    }
  };

  return { loading, data, error, run };
}