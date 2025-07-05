import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="flex items-center justify-between px-6 py-4">
      <h1> Header</h1>

      <nav>
        <ul className="flex gap-x-5">
          <Link href={"/home"}>Home</Link>
          <Link href={"/about"}>About</Link>
          <Link href={"/posts"}>Posts</Link>
          <Link href={"/users"}>Users</Link>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
