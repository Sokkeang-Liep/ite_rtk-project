'use client'

import { useGetAllProductsQuery } from '@/service/productFakeStore'
import { DataTable } from './data-table';
import { columns } from './columns';

export default function ProductPage() {
  const { data, error, isLoading } = useGetAllProductsQuery();

  console.log("Error:", error);
  console.log("Loading:", isLoading);
  console.log("Data:", data);

  return <div className="p-6">
    <DataTable
        columns={columns}
        data={data}
      />
  </div>;
}