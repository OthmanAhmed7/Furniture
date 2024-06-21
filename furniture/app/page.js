"use client";

import { useContext } from "react";
import NotificationContext from "@/context/NotificationContext";
import Image from "next/image";
import Link from "next/link";
import Category from "@/components/sections/Category";
import FeaturedProducts from "@/components/product/FeaturedProducts";
import Trending from "@/components/sections/Trending";
import Event from "@/components/sections/Event";
import Newsletter from "@/components/sections/NewsLetter";

export default function Home() {
  const { showNotify } = useContext(NotificationContext);

  return (
    <>
      <section className="relative bg-neutral-300">
        <div className="z-[1] home-img">
          <div className="h-[100%] max-w-[1350px] mx-auto pl-[2rem]">
            <div className="max-w-[600px] pt-[18rem] text-neutral-900">
              <h1 className="text-[2.5rem] leading-[1.2] font-[700] mb-[0.5rem] sm:text-[2rem] xl:text-[3.5rem]">
                Discover the Perfect Furniture Pieces for Your Home
              </h1>
              <p className="mb-[2rem] max-w-[400px] mr-auto">
                Experience Quality Craftsmanship and Timeless Designs for Every
                Room in Your Home.
              </p>

              <Link
                className="bg-primary-400 text-neutral-100 py-[0.8rem] px-[2rem] text-[1rem] rounded-[0.6rem] font-[600] uppercase cta"
                onClick={() => window.scrollTo(0, 0)}
                href="/shop"
              >
                Shop Now
              </Link>
            </div>
          </div>
        </div>

        <div className="px-[1rem]">
          {/* Category */}
          <Category />
          {/* Featured Products */}
          <FeaturedProducts showNotify={showNotify} />

          {/* Banner Section */}
          <section className="pt-[5rem] max-w-[1300px] mx-auto">
            <div className="h-[100%] flex flex-col lg:flex-row items-start lg:items-center rounded-[.8rem] bg-neutral-100">
              <div className="h-[100%] py-0 lg:px-[2.5rem] px-[1.5rem] pt-[1.5rem] lg:pt-0 flex justify-center items-start flex-col">
                <h2 className="mb-[1.2rem] leading-[1.3] font-[700] text-[2.5rem]">
                  Creative harmonious living
                </h2>
                <p className="mb-[1.2rem] leading-[1.3] text-[1.3rem] max-w-[600px] lg:mr-[2rem]">
                  Furniture Products are all made to standard sizes so that you
                  can mix and match them freely.
                </p>
                <Link
                  className="bg-primary-400 text-neutral-100 py-[.8rem] px-[1.9rem] text-[1.1rem] rounded-[.6rem] font-[600] uppercase mt-[1rem]"
                  onClick={() => window.scrollTo(0, 0)}
                  href="/shop"
                >
                  Shop Now
                </Link>
              </div>

              <div>
                <Image
                  src="/img/hero-bg4.webp"
                  width={700}
                  height={700}
                  alt="sofa"
                  className="lg:rounded-tr-[.8rem] w-full rounded-br-[.8rem] rounded-bl-[.8rem] lg:rounded-bl-none mt-[2.5rem] lg:mt-0"
                />
              </div>
            </div>
          </section>

          {/* Trending Section */}
          <Trending title="Trending Now" showNotify={showNotify} />

          {/* Services */}
          <div className="pt-[5rem]">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 text-center max-w-[1300px] mx-auto">
              {/* Service card */}
              <div className="mb-[2.5rem] md:mb-0 group">
                <Image
                  src="/img/services1.svg"
                  width={700}
                  height={700}
                  alt="Fast & Free Delivery"
                  className="bg-transparent h-[90px] w-[90px] py-[.7rem] px-[1rem] mx-auto mb-[.5rem] transition duration-300 ease-in-out group-hover:scale-[1.1] group-hover:bg-neutral-100 group-hover:rounded-[50%]"
                />
                <h3 className="text-[1.2rem] font-[500]">
                  Fast & Free Delivery
                </h3>
              </div>

              {/* Service card */}
              <div className="mb-[2.5rem] md:mb-0 group">
                <Image
                  src="/img/services2.svg"
                  width={700}
                  height={700}
                  alt="Secure Payment"
                  className="bg-transparent h-[90px] w-[90px] py-[.7rem] px-[1rem] mx-auto mb-[.5rem] transition duration-300 ease-in-out group-hover:scale-[1.1] group-hover:bg-neutral-100 group-hover:rounded-[50%]"
                />
                <h3 className="text-[1.2rem] font-[500]">Secure Payment</h3>
              </div>

              {/* Service card */}
              <div className="mb-[2.5rem] md:mb-0 group">
                <Image
                  src="/img/services3.svg"
                  width={700}
                  height={700}
                  alt="Money Back Guarantee"
                  className="bg-transparent h-[90px] w-[90px] py-[.7rem] px-[1rem] mx-auto mb-[.5rem] transition duration-300 ease-in-out group-hover:scale-[1.1] group-hover:bg-neutral-100 group-hover:rounded-[50%]"
                />
                <h3 className="text-[1.2rem] font-[500]">
                  Money Back Guarantee
                </h3>
              </div>

              {/* Service card */}
              <div className="mb-[2.5rem] md:mb-0 group">
                <Image
                  src="/img/services4.svg"
                  width={700}
                  height={700}
                  alt="online supports"
                  className="bg-transparent h-[90px] w-[90px] py-[.7rem] px-[1rem] mx-auto mb-[.5rem] transition duration-300 ease-in-out group-hover:scale-[1.1] group-hover:bg-neutral-100 group-hover:rounded-[50%]"
                />
                <h3 className="text-[1.2rem] font-[500]">Online Support</h3>
              </div>
            </div>
          </div>

          {/* Events Section */}
          <Event />
        </div>

        {/* Newsletter Section */}
        <div className="pb-[5rem]">
          <Newsletter />
        </div>
      </section>
    </>
  );
}
