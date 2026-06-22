"use client";

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
  SortingState,
} from "@tanstack/react-table";

import { useState } from "react";
import { useRouter } from "next/navigation";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export function DataTable<TData, TValue>({
  columns,
  data = [],
}: DataTableProps<TData, TValue>) {
  const router = useRouter();

  const [globalFilter, setGlobalFilter] = useState("");
  const [searchField, setSearchField] = useState("all");
  const [sorting, setSorting] = useState<SortingState>([]);

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
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),

    globalFilterFn: (row, _, value) => {
      const search = String(value).toLowerCase();
      const rowData = row.original as Record<string, unknown>;

      if (searchField === "all") {
        return Object.values(rowData).some((val) => {
          if (val == null) return false;

          if (typeof val === "object") {
            return JSON.stringify(val)
              .toLowerCase()
              .includes(search);
          }

          return String(val).toLowerCase().includes(search);
        });
      }

      const fieldValue = rowData[searchField];

      if (fieldValue == null) return false;

      if (typeof fieldValue === "object") {
        return JSON.stringify(fieldValue)
          .toLowerCase()
          .includes(search);
      }

      return String(fieldValue).toLowerCase().includes(search);
    },
  });

  return (
    <div className="space-y-4">
      {/* SEARCH */}
      <div className="flex gap-2">
        <Input
          placeholder="Search products..."
          value={globalFilter}
          onChange={(e) => setGlobalFilter(e.target.value)}
          className="w-full"
        />

        <select
          value={searchField}
          onChange={(e) => setSearchField(e.target.value)}
          className="border rounded-md px-3 py-2"
        >
          <option value="all">All</option>
          <option value="title">Product Name</option>
          <option value="id">ID</option>
          <option value="price">Price</option>
          <option value="product">Product</option>
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
                <TableRow
                  key={row.id}
                  className="cursor-pointer hover:bg-muted/50"
                  onClick={() => {
                    const original = row.original as { id?: number };

                    if (original.id) {
                      router.push(`/products/${original.id}`);
                    }
                  }}
                >
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
                <TableCell
                  colSpan={columns.length}
                  className="text-center p-6"
                >
                  No results
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {/* PAGINATION */}
      <div className="flex items-center justify-between">
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          Previous
        </Button>

        <span className="text-sm">
          Page{" "}
          <strong>
            {table.getState().pagination.pageIndex + 1}
          </strong>
        </span>

        <Button
          variant="outline"
          size="sm"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          Next
        </Button>
      </div>
    </div>
  );
}