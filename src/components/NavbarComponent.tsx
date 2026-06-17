"use client";

import Image from "next/image";
import Link from "next/link";

export default function NavBarComponent() {
  return (
    <header className="border-b bg-white">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="https://staunchmen.com/wp-content/uploads/2025/01/Staunch-Men-Clothing-co-Logo-Online-Men-Fashion-Shop-In-Lekki-Boutique-in-Lekki-Lekki-Best-Clothing-Shop-Mens-Clothing-Shoes-In-Lekki-Clothing-.png"
            alt="STAUNCH"
            width={45}
            height={45}
          />

          <span className="text-3xl font-bold tracking-wide">
            STAUNCH
          </span>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/products">Products</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <button className="rounded-lg border px-5 py-2">
            Login
          </button>

          <button className="rounded-lg bg-blue-500 px-5 py-2 text-white">
            Sign Up
          </button>
        </div>
      </div>
    </header>
  );
}