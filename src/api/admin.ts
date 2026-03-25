import { http } from "@/hooks/request";
import { BlogPageResp, BlogPageReq } from '@/types/admin';


// admin分页列表
export function adminPage(blogPageReq: BlogPageReq): Promise<BlogPageResp[]>  {
  return http.post("/blog/adminPage", blogPageReq);
}
