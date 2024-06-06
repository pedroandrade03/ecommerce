import FeaturedCategory from "@/components/FeaturedCategory";
import Footer from "@/components/Footer";

export default function Test() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-grow">{/* Conteúdo principal aqui */}</div>
      <FeaturedCategory />
      <Footer />
    </div>
  );
}
