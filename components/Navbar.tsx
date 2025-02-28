"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="bg-gray-900 text-white py-4 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6">
        <h1 className="text-2xl font-bold">
          <Link href="/">CarbonSense 🌱</Link>
        </h1>

        <ul className="flex space-x-6">
          <li>
            <Link
              href="/about"
              className={`hover:text-green-400 ${
                pathname === "/about" ? "text-green-400" : ""
              }`}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/calculate"
              className={`hover:text-green-400 ${
                pathname === "/calculate" ? "text-green-400" : ""
              }`}
            >
              Calculate
            </Link>
          </li>
          <li>
            <Link
              href="/moreinfo"
              className={`hover:text-green-400 ${
                pathname === "/moreinfo" ? "text-green-400" : ""
              }`}
            >
              More Info
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
