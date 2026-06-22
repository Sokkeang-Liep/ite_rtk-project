"use client";
import { useRouter } from "next/navigation";


import { Button } from "@/components/ui/button";
import Image from "next/image";
import { use } from "react";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { useGetProductByIdQuery } from "@/service/productFakeStore";




export default function ProductModal({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const router = useRouter();
  const { data, isLoading } = useGetProductByIdQuery(Number(id));


  return (
    <Dialog open onOpenChange={() => router.back()}>
      <DialogContent>
        <DialogTitle>{data?.title ? data.title : "Loading product..."}</DialogTitle>
        <DialogDescription>{data?.description}</DialogDescription>

        {isLoading && <p>Loading...</p>}

        {data && (
          <>
            <div className="relative h-64 w-full rounded-lg bg-gray-100 dark:bg-gray-800">
              <Image
                fill
                src={data.images?.[0] ?? "/placeholder.png"}
                alt={data.title}
                className="object-cover rounded-lg"
              />
            </div>
            <div className="mr-4">
              <span className="font-bold text-gray-700 dark:text-gray-300">
                Price:
              </span>
              <span className="text-gray-600 dark:text-gray-300">
                {data?.price}
              </span>
            </div>

            <Button
              variant="link"
              onClick={() => {
                window.location.href = `/categories/${id}`;
              }}
            >
              View full details
            </Button>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}









