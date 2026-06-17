"use client"

import { ColumnDef } from "@tanstack/react-table"
import { Category, ProductsResponse } from "@/lib/ProductFakeStoreType"
import { Button } from "flowbite-react"
import { ArrowUpDown } from "lucide-react"

export const columns: ColumnDef<ProductsResponse>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },


  {
    accessorKey: "title",
    header: ({ column }) => {
      return (
        <Button
           variant="ghost"
          className="text-black"
          onClick={() =>
            column.toggleSorting(column.getIsSorted() === "asc")
          }
        >
          Product Name
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
  },

  
  {
    accessorKey: "category",
    header: "Category",
    cell: ({ row }) => {
      const category = row.getValue("category") as Category
      return <span>{category.name}</span>
    },
  },

 
  {
    accessorKey: "price",
    header: "Price",
    cell: ({ row }) => {
      const price = row.getValue("price") as number
      return <span>${price.toFixed(2)}</span>
    },
  },
]