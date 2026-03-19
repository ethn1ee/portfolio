import Image from "next/image";
import Link from "next/link";

const Layout = ({ children }: LayoutProps<"/blog">) => {
  return (
    <>
      <nav className="w-full flex items-center gap-4 mb-16">
        <Link href="/">
          <Image src="/favicon.ico" alt="logo" width={24} height={24} />
        </Link>
        <span className="text-xl">blog</span>
      </nav>
      {children}
    </>
  );
};

export default Layout;
