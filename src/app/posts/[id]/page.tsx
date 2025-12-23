import { getDetailPost } from "@/lib/api";

interface PageProps {
    params: {
        id:number
    }
}

async function page({params}: PageProps) {
    const {id} = await params;
const post = await getDetailPost(id);
console.log(post);
  return (
    <div className="post-detail">
      <h1>{post.title}</h1>
      <div className="content">{post.body}</div>
    </div>
  )
}

export default page
