import React, { useEffect } from "react";
import { useState } from "react";
import ProductCard from "@/components/ProductCard";
import Layout from "@/components/Layout";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Product } from "@/types/Product";
import api from "@/api";
import { useRouter } from "next/router";
import ProductGrid from "@/components/ProductGrid";

export default function CategoryProducts() {
  const router = useRouter();

  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(8);

  const [categoryProducts, setCategoryProducts] = useState<Product[]>([]);

  useEffect(() => {
    const getCategoryProducts = async () => {
      try {
        const { data } = await api.get(`/products/category/${router.query.id}`);

        setCategoryProducts(data);
      } catch (error) {
        console.error(error);
      }
    };

    getCategoryProducts();
  }, [router]);

  return (
    <Layout>
      <ProductGrid
        products={categoryProducts}
        productsPerPage={productsPerPage}
      />
      <PaginationSection
        totalProducts={16}
        productsPerPage={productsPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </Layout>
  );
}

function PaginationSection({
  totalProducts,
  productsPerPage,
  currentPage,
  setCurrentPage,
}: {
  totalProducts: any;
  productsPerPage: any;
  currentPage: any;
  setCurrentPage: any;
}) {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumbers.push(i);
  }

  const maxPageNum = 5;
  const pageNumLimit = Math.floor(maxPageNum / 2);

  let activePages = pageNumbers.slice(
    Math.max(0, currentPage - 1 - pageNumLimit),
    Math.min(currentPage - 1 + pageNumLimit + 1, pageNumbers.length)
  );

  const handleNextPage = () => {
    if (currentPage < pageNumbers.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Function to render page numbers with ellipsis
  const renderPages = () => {
    const renderedPages = activePages.map((page, idx) => (
      <PaginationItem
        key={idx}
        className={currentPage === page ? "bg-neutral-100 rounded-md" : ""}
      >
        <PaginationLink onClick={() => setCurrentPage(page)}>
          {page}
        </PaginationLink>
      </PaginationItem>
    ));

    // Add ellipsis at the start if necessary
    if (activePages[0] > 1) {
      renderedPages.unshift(
        <PaginationEllipsis
          key="ellipsis-start"
          onClick={() => setCurrentPage(activePages[0] - 1)}
        />
      );
    }

    // Add ellipsis at the end if necessary
    if (activePages[activePages.length - 1] < pageNumbers.length) {
      renderedPages.push(
        <PaginationEllipsis
          key="ellipsis-end"
          onClick={() =>
            setCurrentPage(activePages[activePages.length - 1] + 1)
          }
        />
      );
    }

    return renderedPages;
  };

  return (
    <div>
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious onClick={handlePrevPage} />
          </PaginationItem>

          {renderPages()}

          <PaginationItem>
            <PaginationNext onClick={handleNextPage} />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}
