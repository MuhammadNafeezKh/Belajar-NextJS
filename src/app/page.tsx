import Image from "next/image";
import Link from "next/link";
import { getLastPost } from "@/lib/api";
import  PostsList  from "@/Components/PostsList";

export default async function Home() {
  const posts = await getLastPost();
  return (
    <>
      <div className="main-heading">
        <h1> selamat datang di NextJS News Tokita!</h1>
        <p className="subtitle">Berita terkini tentang NextJS(wkwkk lorem ipsum)</p>
      </div>

<PostsList posts={posts}/>
    </>
  );
}
