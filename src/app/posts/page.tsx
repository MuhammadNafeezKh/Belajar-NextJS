import Image from "next/image";
import Link from "next/link";
import { getAllPost } from "@/lib/api";
import  PostsList  from "@/Components/PostsList";

export default async function Page() {
  const posts = await getAllPost();
  return (
    <>
      <div className="main-heading">
        <h2> Daftar Tulisan</h2>
        <p className="subtitle">Berita terkini tentang NextJS</p>
      </div>

<PostsList posts={posts}/>
    </>
  );
}
