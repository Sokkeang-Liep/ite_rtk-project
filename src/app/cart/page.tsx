"use client";
import { FaShoppingCart } from "react-icons/fa";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";

import { IoIosAddCircle } from "react-icons/io";
import { FaMinus } from "react-icons/fa6";
import { addToCart, removeFromCart } from "@/features/countSlice/cartSlice";

export default function CartPage() {
  const cart = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  const products = [
    {
      id: 1,
      name: "Nike Air Max 270",
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500",
      price: 100,
    },
    {
      id: 2,
      name: "Adidas Ultraboost",
      image:
        "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=500",
      price: 180,
    },
    {
      id: 3,
      name: "Puma RS-X",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnhwnl43WuYPEn0XCOwBvEOHf1d1yaFlmYkw&s",
      price: 220,
    },
    {
      id: 4,
      name: "Nike Jordan Retro",
      image:
        "https://m.media-amazon.com/images/G/01/zappos/2026/Homepage/June/06.03.26/HP-VIS-NAV-SUMMER-MILES-ON-444X555-FRAME1._FMwebp_QL85_.jpg",
      price: 150,
    },
    {
      id: 5,
      name: "Sneaker Shoes",
      image:
        "https://starlet.pk/cdn/shop/articles/457096566_816328697331693_5537305557894720667_n_70e662a9-a9f4-4b2b-8ba7-3217aa6dd055.jpg?v=1740545518",
      price: 70,
    },
    {
      id: 6,
      name: "Vans Old Skool",
      image:
        "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=500",
      price: 100,
    },
    {
      id: 7,
      name: "LEVEL White Men's Sneakers",
      image:
        "https://www.campusshoes.com/cdn/shop/files/LEVEL_LEVEL_WHT-L.GRY_07_831c7a2c-ff1b-4011-9268-b11f984219c6.webp?v=1757580207",
      price: 200,
    },
    {
      id: 8,
      name: "Athletic Shoes",
      image:
        "https://underarmour.scene7.com/is/image/Underarmour/SS26_Q1_Velociti_Elite3_Launch_COG_ATT_Bucket_1_1?qlt=85&wid=767&hei=767",
      price: 90,
    },
    {
      id: 9,
      name: "Dark Grey Faux Suede",
      image:
        "https://offlimits.co.in/cdn/shop/files/OCM-64305_1_1200x1200.jpg?v=1720259294",
      price: 24,
    },
    {
      id: 10,
      name: "Asics Gel-Kayano",
      image:
        "https://images.unsplash.com/photo-1605408499391-6368c628ef42?w=500",
      price: 190,
    },
  ];

  return (
    <div className="max-w-7xl py-20 container mx-auto">
      <div className="flex gap-6  items-center mb-6">
        <Link href="/carts" className="relative z-100">
          <div className="text-xl flex justify-center items-center gap-4 font-bold">
            Product Cart : <FaShoppingCart className="inline text-2xl" />
          </div>
          <div className=" absolute -top-0 -right-2  text-white ">
            {totalItems > 0 && (
              <span className="bg-red-500 w-5 h-5  rounded-full flex items-center justify-center  text-white">
                {totalItems}
              </span>
           
            )}
          </div>
        </Link>
      </div>
      <div className="grid grid-cols-5 gap-y-4 container mx-auto max-w-7xl">
        {products.map((product) => {
  const inCart = cart.find((item) => item.id === product.id);

  return (
    <div
      key={product.id}
      className="group bg-white border rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 w-60"
    >
      {/* Image */}
      <div className="relative h-40 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />

        {/* price badge */}
        <div className="absolute top-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded-full">
          ${product.price}
        </div>
      </div>

      {/* Content */}
      <div className="p-3 flex flex-col gap-2">
        <h3 className="font-semibold text-gray-800 truncate">
          {product.name}
        </h3>

        <p className="text-xs text-gray-500">
          Indoor plant • Fresh & natural
        </p>

        {/* Buttons */}
        <div className="flex items-center justify-between mt-2">
          <button
            onClick={() =>
              dispatch(
                addToCart({
                  ...product,
                  quantity: 1,
                })
              )
            }
            className="flex items-center gap-1 bg-green-600 hover:bg-green-700 text-white text-xs px-3 py-1.5 rounded-full transition"
          >
            <IoIosAddCircle className="text-lg" />
            Add
          </button>

          {inCart && (
            <button
              onClick={() => dispatch(removeFromCart(product.id))}
              className="flex items-center gap-1 bg-red-500 hover:bg-red-600 text-white text-xs px-3 py-1.5 rounded-full transition"
            >
              <FaMinus />
              Remove
            </button>
          )}
        </div>
      </div>
    </div>
  );
})}
      </div>
    </div>
  );







}