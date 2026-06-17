import { FooterDivider } from "flowbite-react";
import Image from "next/image";

export function FooterComponent() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 mt-16">

  {/* CENTER CONTAINER (smaller = better balance) */}
  <div className="max-w-6xl mx-auto px-6 py-12">

    {/* GRID */}
    <div className="grid grid-cols-1 md:grid-cols-4 gap-10 items-start text-center md:text-left">

      {/* LOGO */}
      <div className="flex justify-center md:justify-start">
        <Image
          src="https://staunchmen.com/wp-content/uploads/2025/01/Staunch-Men-Clothing-co-Logo-Online-Men-Fashion-Shop-In-Lekki-Boutique-in-Lekki-Lekki-Best-Clothing-Shop-Mens-Clothing-Shoes-In-Lekki-Clothing-.png"
          alt="Logo"
          width={300}
          height={300}
          className="h-40 w-auto object-contain"
        />
      </div>

      {/* PRODUCT */}
      <div>
        <h2 className="mb-4 text-sm font-semibold text-gray-900 uppercase dark:text-white">
          Product
        </h2>
        <ul className="space-y-2 text-gray-500">
          <li><a href="#">Overview</a></li>
          <li><a href="#">Pricing</a></li>
          <li><a href="#">Marketplace</a></li>
          <li><a href="#">Features</a></li>
          <li><a href="#">Integrations</a></li>
        </ul>
      </div>

      {/* COMPANY */}
      <div>
        <h2 className="mb-4 text-sm font-semibold text-gray-900 uppercase dark:text-white">
          Company
        </h2>
        <ul className="space-y-2 text-gray-500">
          <li><a href="#">About</a></li>
          <li><a href="#">Team</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Careers</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>

      {/* SUPPORT */}
      <div>
        <h2 className="mb-4 text-sm font-semibold text-gray-900 uppercase dark:text-white">
          Support
        </h2>
        <ul className="space-y-2 text-gray-500">
          <li><a href="#">Help Center</a></li>
          <li><a href="#">Documentation</a></li>
          <li><a href="#">Status</a></li>
          <li><a href="#">Community</a></li>
        </ul>
      </div>

    </div>

    <FooterDivider className="my-8" />

    {/* BOTTOM */}
    <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 gap-4">
      <span>© 2026 STAUNCH MEN™. All rights reserved.</span>

      <div className="flex gap-6">
        <a href="#" className="hover:underline">Terms & Conditions</a>
        <a href="#" className="hover:underline">Privacy Policy</a>
      </div>
    </div>

  </div>
</footer>
  );
}