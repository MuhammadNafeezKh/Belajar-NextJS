import Link from "next/link";
import Image from "next/image"; 
import ThemeSwitcher from "./ThemeSwitcher";
const Header = () => {
  return (
  <header className="header">
          <nav>
            <div className="logo"><Link href="/"><Image src="vercel.svg" width={30} height={30 } alt="logo"/></Link></div>
            <div className="nav-links">
            <Link href="/">Home</Link>
            <Link href="/posts">Posts</Link>
            <Link href ="/about">About</Link>
            </div>
            <ThemeSwitcher/>
          </nav>
          
        </header>
  )
}

export default Header
