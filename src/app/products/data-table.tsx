"use client"

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
  SortingState,
} from "@tanstack/react-table"

import { useState } from "react"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data?: TData[]
}

export function DataTable<TData, TValue>({
  columns,
  data = [],
}: DataTableProps<TData, TValue>) {

  const [globalFilter, setGlobalFilter] = useState("")
  const [searchField, setSearchField] = useState("all")
  const [sorting, setSorting] = useState<SortingState>([])

  const table = useReactTable({
    data,
    columns,

    state: {
      globalFilter,
      sorting,
    },

    onGlobalFilterChange: setGlobalFilter,
    onSortingChange: setSorting,

    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),   // SORTING
    getPaginationRowModel: getPaginationRowModel(), // PAGINATION

    globalFilterFn: (row, _, value) => {
      const search = String(value).toLowerCase()
      const data = row.original as Record<string, unknown>

      if (searchField === "all") {
        return Object.values(data).some((val) => {
          if (val == null) return false

          if (typeof val === "object") {
            return JSON.stringify(val)
              .toLowerCase()
              .includes(search)
          }

          return String(val).toLowerCase().includes(search)
        })
      }

      const fieldValue = data?.[searchField]

      if (fieldValue == null) return false

      if (typeof fieldValue === "object") {
        return JSON.stringify(fieldValue)
          .toLowerCase()
          .includes(search)
      }

      return String(fieldValue)
        .toLowerCase()
        .includes(search)
    },
  })

  return (
    <div className="space-y-3">

      {/* SEARCH + FIELD SELECT */}
      <div className="flex gap-2">

        <input
          value={globalFilter}
          onChange={(e) => setGlobalFilter(e.target.value)}
          placeholder="Search products..."
          className="border px-3 py-2 rounded w-full"
        />

        <select
          value={searchField}
          onChange={(e) => setSearchField(e.target.value)}
          className="border px-3 py-2 rounded"
        >
          <option value="all">All</option>
          <option value="title">Product Name</option>
          <option value="id">ID</option>
          <option value="price">Price</option>
          <option value="category">Category</option>
        </select>

      </div>

      {/* TABLE */}
      <div className="rounded-md border overflow-hidden">
        <Table>

          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>

          <TableBody>
            {table.getRowModel().rows.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow key={row.id}>
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className="text-center p-6">
                  No results
                </TableCell>
              </TableRow>
            )}
          </TableBody>

        </Table>
      </div>

      {/* PAGINATION  */}
      <div className="flex items-center justify-between">

        <button
          className="border px-3 py-1 rounded"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          Previous
        </button>

        <span className="text-sm">
          Page{" "}
          <strong>
            {table.getState().pagination?.pageIndex + 1 || 1}
          </strong>
        </span>

        <button
          className="border px-3 py-1 rounded"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          Next
        </button>

      </div>
    </div>
  )
}