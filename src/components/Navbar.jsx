import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <nav className="bg-slate-400 mb-4 flex justify-between p-3 px-20 font-bold text-black">
      <Link href="/">Home</Link>
      <ul>
        <li>
          <Link href="/about">about</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
