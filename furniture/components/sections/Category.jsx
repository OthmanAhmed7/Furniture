import Link from "next/link";
import React from "react";
import useFetchData from "@/hooks/useFetchData";
import Image from "next/image";

const Category = () => {
  const { data: products } = useFetchData();

  const tableQuantity = products?.filter(
    (product) => product.category === "tables"
  ).length;
  const chairQuantity = products?.filter(
    (product) => product.category === "chairs"
  ).length;
  const bedQuantity = products?.filter(
    (product) => product.category === "beds"
  ).length;
  const couchQuantity = products?.filter(
    (product) => product.category === "couches"
  ).length;

  return (
    <>
      <section className="pt-[5rem]">
        <div className="max-w-[1300px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:grid-rows-2 grid-rows-4 gap-[1rem]">
          <Link
            href="/category/table"
            className="relative overflow-hidden lg:col-span-2 lg:row-span-2 category-hover"
          >
            <div className="category-overlay"></div>
            <Image
              src="/img/table8.webp"
              width={700}
              height={700}
              alt="table"
              className="rounded-[0.8rem] h-[100%] w-[100%]"
            />

            <span className="description">tables</span>
            <p className="quantity">{tableQuantity} Products</p>
          </Link>

          <Link
            href="/category/chair"
            className="relative overflow-hidden lg:row-span-2 lg:col-start-3 lg:col-end-4 category-hover"
          >
            <div className="category-overlay"></div>
            <Image
              src="/img/chair8.webp"
              width={700}
              height={700}
              alt="chair"
              className="rounded-[0.8rem] aspect-[1/1.38] h-[100%] w-[100%]"
            />

            <span className="description">chairs</span>
            <p className="quantity">{chairQuantity} Products</p>
          </Link>

          <Link
            href="/category/bed"
            className="relative overflow-hidden lg:col-start-4 lg:col-end-5 lg:row-start-1 lg:row-end-2 category-hover"
          >
            <div className="category-overlay"></div>
            <Image
              src="/img/bed10.webp"
              width={700}
              height={700}
              alt="bed"
              className="h-[100%] rounded-[0.8rem] w-[100%]"
            />

            <span className="description-bed">beds</span>
            <p className="quantity-bed">{bedQuantity} Products</p>
          </Link>

          <Link
            href="/category/couch"
            className="relative overflow-hidden lg:col-start-4 lg:col-end-5 lg:row-start-2 lg:row-end-3 category-hover"
          >
            <div className="category-overlay"></div>
            <Image
              src="/img/couch8.webp"
              width={700}
              height={700}
              alt="couch"
              className="rounded-[0.8rem] h-[100%] w-[100%]"
            />

            <span className="description">couches</span>
            <p className="quantity">{couchQuantity} Products</p>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Category;
