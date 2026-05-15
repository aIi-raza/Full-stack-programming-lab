import CartTable from "@/components/CartTable";

export default function CartPage() {
  return (
    <main className="container-rustik py-10">
      <h1 className="serif mb-7 text-[36px] font-bold">Shopping Cart</h1>
      <CartTable />
    </main>
  );
}
