import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <nav className="flex justify-between items-center h-14">
      <div className="text-center md:text-start w-full">
        <Link href="/">Logo</Link>
      </div>
      <ul className="md:flex gap-6 hidden">
        <li>
          <Link href="/">About</Link>
        </li>
        <li>
          <Link href="/">Work</Link>
        </li>
        <li>
          <Link href="/">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
