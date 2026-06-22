import { useGetAllProductsQuery } from "@/service/productFakeStore";
import { DataTable } from "./data-table";
import { columns } from "./columns";

export default function ProductPage() {
  const { data, error, isLoading } = useGetAllProductsQuery();

  if (isLoading) {
    return <div className="p-6">Loading...</div>;
  }

  if (error) {
    return <div className="p-6 text-red-500">Failed to load products</div>;
  }

  return (
    <div className="p-6">
      <DataTable columns={columns} data={data ?? []} />
    </div>
  );
}