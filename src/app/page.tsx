"use client";
import ButtonComponent from "@/components/ButtonComponent";
import { addToCart } from "@/features/countSlice/cartSlice";
import { useDispatch } from "react-redux";

export default function Home() {
  const dispatch = useDispatch();

   return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
     

      <ButtonComponent />
      <button
        onClick={() =>
          dispatch(
            addToCart({
              id: 1,
              name: "Test Product",
              image: "",
              price: 10,
              quantity: 1,
            }),
          )
        }
      >
        Add To Cart
      </button>
    </div>
  );
}
