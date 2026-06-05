"use client";

import React from "react";
import { Button } from "./ui/button";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { decrement, increment } from "@/features/countSlice/countSlice";



export default function ButtonComponent() {
  const dispatch = useAppDispatch();
  const count = useAppSelector((state) => state.count.value);
  return (
    <div>
      <p className="text-[100px] font-bold">Count: {count}</p>
      <Button onClick={() => dispatch(increment(1))}>Increment</Button>

      <Button onClick={() => dispatch(decrement(1))}>Decrement</Button>

      <Button onClick={() => dispatch(increment(-count))}>Reset</Button>
    </div>
  );
}