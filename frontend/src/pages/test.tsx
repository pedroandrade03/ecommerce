import RelatedProducts from "@/components/RelatedProducts";
import Layout from "@/components/Layout";

export default function Test() {
  return (
    <Layout>
      <div className="flex flex-col gap-4">
        <RelatedProducts />
      </div>
    </Layout>
  );
}
