"use client";

import { useContext, useState, Suspense } from "react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import Card from "@/components/product/Card";
import NotificationContext from "@/context/NotificationContext";
import { MdOutlineExpandMore } from "react-icons/md";
import ShopCategory from "@/components/global/ShopCategory";
import Pagination from "@/components/global/Pagination";
import useFetchData from "@/hooks/useFetchData";
import { Loading } from "@/components/global/Loading";
import PageBreadCrumbs from "@/components/global/PageBreadCrumbs";
import Image from "next/image";

const Shop = () => {
  const { data: products } = useFetchData();

  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const searchQuery = searchParams.get("query");

  const [sortOption, setSortOption] = useState("Sort by latest");
  const [selectedProduct, setSelectedProduct] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(6);

  const { showNotify } = useContext(NotificationContext);

  if (!Array.isArray(products)) {
    return (
      <section className="shop">
        <div className="bg-img">
          <div className="absolute top-0 left-0 opacity-0 bg-neutral-900 w-[100%] h-[100%] transition duration-300 ease-in z-[10]"></div>
          <h1 className="absolute top-[55%] left-[50%] translate-x-[-50%] translate-y-[-55%] flex items-center justify-center text-neutral-100 uppercase text-[3.5rem] w-[100%] tracking-[10px] leading-[1.3] pl-[1rem] z-10 font-[700]">
            Shop
          </h1>
        </div>
        <Loading />
      </section>
    );
  }

  let sortedData = [...products];

  const handleSortChange = (event) => {
    setSortOption(event.target.value);
    setCurrentPage(1);
  };

  if (sortOption === "hightolow") {
    sortedData.sort((a, b) => b.price - a.price);
  }

  if (sortOption === "lowtohigh") {
    sortedData.sort((a, b) => a.price - b.price);
  }

  if (sortOption === "sortbynewest") {
    sortedData = sortedData.filter((product) => product.isNew === true);
  }

  const filteredProducts = searchQuery
    ? sortedData.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : selectedProduct === "all"
    ? sortedData
    : sortedData.filter((product) => product.category === selectedProduct);

  const handleFilterChange = (category) => {
    setSelectedProduct(category);
    setCurrentPage(1);
    const newSearchParams = new URLSearchParams(searchParams.toString());
    newSearchParams.delete("query");

    router.push(`${pathname}?${newSearchParams.toString()}`);
  };

  // Logic for pagination
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // get total length of search results
  const totalLength = filteredProducts.length;

  return (
    <section className="shop bg-neutral-300">
      <div className="bg-img">
        <div className="absolute top-0 left-0 opacity-30 bg-neutral-900 w-[100%] h-[100%] transition duration-300 ease-in z-[10]"></div>
        <h1 className="absolute top-[55%] left-[50%] translate-x-[-50%] translate-y-[-55%] flex items-center justify-center text-neutral-100 uppercase text-[3.5rem] w-[100%] tracking-[10px] leading-[1.3] pl-[1rem] z-10 font-[700]">
          Shop
        </h1>
      </div>
      <div className="px-[1rem] pt-[5rem] max-w-[1300px] mx-auto">
        <PageBreadCrumbs />
        {searchQuery && (
          <p>
            {totalLength} search results for{" "}
            <strong className="uppercase">&quot;{searchQuery}&quot;</strong>
          </p>
        )}
        <div className="flex flex-col lg:flex-row items-center justify-between mt-[2rem] mb-[3rem]">
          <div className="text-left mb-[1rem] lg:mb-0 text-[2rem] font-[700]">
            <h2>All products</h2>
          </div>

          <div className="md:w-[30%] w-[70%] h-[44px] relative">
            <select
              name="sort"
              id="sort"
              value={sortOption}
              onChange={handleSortChange}
              className="w-[100%] h-[100%] p-[8px] border-[1.5px] border-neutral-900 rounded-[.3rem] bg-transparent text-[#333] cursor-pointer outline-none appearance-none text-[.875rem]"
            >
              <option value="sortbylatest">Sort by latest</option>
              <option value="hightolow">Sort by price: High to Low</option>
              <option value="lowtohigh">Sort by price: Low to High</option>
              <option value="sortbynewest">Sort by newest</option>
            </select>
            <MdOutlineExpandMore className="absolute right-[.5rem] top-[50%] translate-y-[-50%] pointer-events-none" />
          </div>
        </div>
        <div className="shop-container">
          <div className="grid lg:grid-cols-3 grid-cols-1 gap-[2rem]">
            <ShopCategory
              selectedProduct={selectedProduct}
              handleFilterChange={handleFilterChange}
            />
            {currentProducts.length === 0 ? (
              <div>
                <Image
                  src="/img/Empty-pana.svg"
                  width={700}
                  height={700}
                  alt="empty page"
                />
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:col-span-2 gap-[2rem]">
                {currentProducts.map((product) => (
                  <Card
                    product={product}
                    key={product._id}
                    showNotify={showNotify}
                  />
                ))}
              </div>
            )}
          </div>

          <Pagination
            productsPerPage={productsPerPage}
            totalProducts={filteredProducts.length}
            paginate={paginate}
            currentPage={currentPage}
          />
        </div>
      </div>
    </section>
  );
};

const ShopPage = () => (
  <Suspense fallback={<Loading />}>
    <Shop />
  </Suspense>
);

export default ShopPage;
