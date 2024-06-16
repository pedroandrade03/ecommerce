import { Product } from "@/types/Product";
import ProductCard from "./ProductCard";

type ProductGridProps = {
  products: Product[];
  productsPerPage: number;
};

export default function ProductGrid({
  products,
  productsPerPage,
}: ProductGridProps) {
  return (
    <div className="py-8 px-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {products.slice(0, productsPerPage).map((product, i) => (
          <ProductCard key={i} product={product} />
        ))}
      </div>
    </div>
  );
}
