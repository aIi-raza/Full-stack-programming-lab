import CategoryCards from "@/components/CategoryCards";
import HeroSlider from "@/components/HeroSlider";
import HotDeal from "@/components/HotDeal";
import LatestUpdates from "@/components/LatestUpdates";
import ProductGrid from "@/components/ProductGrid";
import StorePickup from "@/components/StorePickup";
import { getProducts } from "@/lib/products";

export default async function HomePage() {
  const products = await getProducts();
  const heroProduct = products[0];

  return (
    <main>
      <HeroSlider product={heroProduct} />
      <CategoryCards />
      <ProductGrid products={products} />
      <HotDeal />
      <StorePickup />
      <LatestUpdates />
    </main>
  );
}
