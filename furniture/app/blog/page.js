import Link from "next/link";
import PageBreadCrumbs from "@/components/global/PageBreadCrumbs";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";

const Blog = () => {
  return (
    <section className="blog bg-neutral-300">
      <div className="bg-img">
        <div className="absolute top-0 left-0 opacity-30 bg-neutral-900 w-[100%] h-[100%] transition duration-300 ease-in z-[10]"></div>
        <h1 className="absolute top-[55%] left-[50%] translate-x-[-50%] translate-y-[-55%] flex items-center justify-center text-neutral-100 uppercase text-[3.5rem] w-[100%] tracking-[10px] leading-[1.3] pl-[1rem] z-10 font-[700]">
          Blog
        </h1>
      </div>
      <div className="py-[5rem]">
        <div className="px-[1rem] max-w-[1300px] mx-auto">
          <PageBreadCrumbs />
        </div>
        <div className="lg:border-t-[#d9d9d9] lg:border-t-[1px]"></div>
        <div className="px-[1rem] max-w-[1300px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3">
            {/* COLUMN 1 */}
            <div className="lg:col-span-2 lg:mr-[4rem] mr-0">
              <div className="lg:mt-[4rem] mb-[3rem]">
                <div className="relative overflow-hidden rounded-[.6rem] group">
                  <Link href={"#"}>
                    <Image
                      aria-label="man-reading"
                      src="/img/hero-bg4.webp"
                      width={700}
                      height={700}
                      alt="man-reading"
                      className="rounded-[.6rem] group-hover:scale-[1.1] w-full transition duration-500 ease-in-out"
                    />
                  </Link>
                  <span className="absolute text-center top-[1rem] left-[1rem] bg-primary-400 text-neutral-100 rounded-[.6rem] px-[.5rem] py-[.1rem]">
                    <strong className="text-[2.5rem] font-[700]">28</strong>
                    <br />
                    <p className="text-[.8rem] font-[500]">Jan, 2024</p>
                  </span>
                </div>
                <div className="py-[2rem]">
                  <h3 className="uppercase text-[1.5rem]">
                    <Link href="#">6 Must-Have Modern Home Furniture</Link>
                  </h3>
                  <ul className="flex items-center text-neutral-600 text-[.8rem] py-[1rem]">
                    <span>
                      by Admin
                      <span className="ml-[.5rem]">|</span>
                    </span>
                    <span className="ml-[.5rem]">
                      28 January, 2024
                      <span className="ml-[.5rem]">|</span>
                    </span>
                    <span className="ml-[.5rem]">
                      Furniture&apos;s<span className="ml-[.5rem]">|</span>
                    </span>
                    <span className="ml-[.5rem]">8 Comments</span>
                  </ul>
                  <p className="text-[1.1rem] text-neutral-700 leading-[30px]">
                    Embark on a journey of transforming your living space with
                    these six essential furniture pieces designed to infuse your
                    home with a perfect blend of contemporary style and
                    functional practicality
                  </p>
                  <Link
                    href="#"
                    className="flex items-center gap-[.5rem] text-[1.1rem] uppercase text-neutral-100 bg-primary-400 py-[.7rem] px-[1.8rem] w-fit rounded-[.6rem] mt-[1.5rem]"
                  >
                    <span>continue reading</span>
                    <FaArrowRight />
                  </Link>
                </div>
              </div>
              <div className="mt-[4rem] mb-[3rem]">
                <div className="relative overflow-hidden rounded-[.6rem] group">
                  <a href="#">
                    <Image
                      aria-label="table"
                      src="/img/newsletter.webp"
                      width={700}
                      height={700}
                      alt="table"
                      className="rounded-[.6rem] group-hover:scale-[1.1] w-full transition duration-500 ease-in-out"
                    />
                  </a>
                  <span className="absolute text-center top-[1rem] left-[1rem] bg-primary-400 text-neutral-100 rounded-[.6rem] px-[.5rem] py-[.1rem]">
                    <strong className="text-[2.5rem] font-[700]">20</strong>
                    <br />
                    <p className="text-[.8rem] font-[500]">Feb, 2024</p>
                  </span>
                </div>
                <div className="py-[2rem]">
                  <h3 className="uppercase text-[1.5rem]">
                    <Link href="#">Space-Saving Ideas for Small Furniture</Link>
                  </h3>
                  <ul className="flex items-center text-neutral-600 text-[.8rem] py-[1rem]">
                    <span>
                      by Admin
                      <span className="ml-[.5rem]">|</span>
                    </span>
                    <span className="ml-[.5rem]">
                      20 February, 2023
                      <span className="ml-[.5rem]">|</span>
                    </span>
                    <span className="ml-[.5rem]">
                      Table, Couch
                      <span className="ml-[.5rem]">|</span>
                    </span>
                    <span className="ml-[.5rem]">8 Comments</span>
                  </ul>
                  <p className="text-[1.1rem] text-neutral-700 leading-[30px]">
                    Embrace the challenge of limited space with these ingenious
                    space-saving ideas designed to optimize every inch of your
                    compact living area
                  </p>
                  <Link
                    href="#"
                    className="flex items-center gap-[.5rem] text-[1.1rem] uppercase text-neutral-100 bg-primary-400 py-[.7rem] px-[1.8rem] w-fit rounded-[.6rem] mt-[1.5rem]"
                  >
                    <span>continue reading</span>
                    <FaArrowRight />
                  </Link>
                </div>
              </div>
              <div className="mt-[4rem] mb-[3rem]">
                <div className="relative overflow-hidden rounded-[.6rem] group">
                  <a href="#">
                    <Image
                      aria-label="cart"
                      src="/img/shopping.webp"
                      width={700}
                      height={700}
                      alt="cart"
                      className="rounded-[.6rem] group-hover:scale-[1.1] w-full transition duration-500 ease-in-out"
                    />
                  </a>
                  <span className="absolute text-center top-[1rem] left-[1rem] bg-primary-400 text-neutral-100 rounded-[.6rem] px-[.5rem] py-[.1rem]">
                    <strong className="text-[2.5rem] font-[700]">18</strong>
                    <br />
                    <p className="text-[.8rem] font-[500]">Mar, 2024</p>
                  </span>
                </div>
                <div className="py-[2rem]">
                  <h3 className="uppercase text-[1.5rem]">
                    <a href="#">Impress Guests: 6 Stunning Dining Sets</a>
                  </h3>
                  <ul className="flex items-center text-neutral-600 text-[.8rem] py-[1rem]">
                    <span>
                      by Admin
                      <span className="ml-[.5rem]">|</span>
                    </span>
                    <span className="ml-[.5rem]">
                      18 March, 2024
                      <span className="ml-[.5rem]">|</span>
                    </span>
                    <span className="ml-[.5rem]">
                      Shopping
                      <span className="ml-[.5rem]">|</span>
                    </span>
                    <span className="ml-[.5rem]">8 Comments</span>
                  </ul>
                  <p className="text-[1.1rem] text-neutral-700 leading-[30px]">
                    Elevate your dining experience to new heights of
                    sophistication and allure with these six stunning dining
                    room furniture sets. From elegant formal designs to chic
                    contemporary styles, each set exudes its own unique
                    character and charm.
                  </p>
                  <Link
                    href="#"
                    className="flex items-center gap-[.5rem] text-[1.1rem] uppercase text-neutral-100 bg-primary-400 py-[.7rem] px-[1.8rem] w-fit rounded-[.6rem] mt-[1.5rem]"
                  >
                    <span>continue reading</span>
                    <FaArrowRight />
                  </Link>
                </div>
              </div>
              <div className="mt-[4rem] mb-[3rem]">
                <div className="relative overflow-hidden rounded-[.6rem] group">
                  <a href="#">
                    <Image
                      aria-label="couch"
                      src="/img/couch10.webp"
                      width={700}
                      height={700}
                      alt="couch"
                      className="rounded-[.6rem] group-hover:scale-[1.1] w-full transition duration-500 ease-in-out"
                    />
                  </a>
                  <span className="absolute text-center top-[1rem] left-[1rem] bg-primary-400 text-neutral-100 rounded-[.6rem] px-[.5rem] py-[.1rem]">
                    <strong className="text-[2.5rem] font-[700]">24</strong>
                    <br />
                    <p className="text-[.8rem] font-[500]">Mar, 2024</p>
                  </span>
                </div>
                <div className="py-[2rem]">
                  <h3 className="uppercase text-[1.5rem]">
                    <a href="#">Eco-Friendly Brands</a>
                  </h3>
                  <ul className="flex items-center text-neutral-600 text-[.8rem] py-[1rem]">
                    <span>
                      by Admin
                      <span className="ml-[.5rem]">|</span>
                    </span>
                    <span className="ml-[.5rem]">
                      24 March, 2024
                      <span className="ml-[.5rem]">|</span>
                    </span>
                    <span className="ml-[.5rem]">
                      Couch
                      <span className="ml-[.5rem]">|</span>
                    </span>
                    <span className="ml-[.5rem]">8 Comments</span>
                  </ul>
                  <p className="text-[1.1rem] text-neutral-700 leading-[30px]">
                    Embrace a conscious approach to furnishing your home with
                    these six commendable eco-friendly furniture brands. Each
                    brand is committed to sustainable practices, utilizing
                    environmentally friendly materials, reducing carbon
                    footprint, and promoting ethical manufacturing processes.
                  </p>
                  <Link
                    href="#"
                    className="flex items-center gap-[.5rem] text-[1.1rem] uppercase text-neutral-100 bg-primary-400 py-[.7rem] px-[1.8rem] w-fit rounded-[.6rem] mt-[1.5rem]"
                  >
                    <span>continue reading</span>
                    <FaArrowRight />
                  </Link>
                </div>
              </div>
              <div className="mt-[4rem] mb-[3rem]">
                <div className="relative overflow-hidden rounded-[.6rem] group">
                  <a href="#">
                    <Image
                      aria-label="chair"
                      src="/img/chair9.webp"
                      width={700}
                      height={700}
                      alt="chair"
                      className="rounded-[.6rem] group-hover:scale-[1.1] w-full transition duration-500 ease-in-out"
                    />
                  </a>
                  <span className="absolute text-center top-[1rem] left-[1rem] bg-primary-400 text-neutral-100 rounded-[.6rem] px-[.5rem] py-[.1rem]">
                    <strong className="text-[2.5rem] font-[700]">28</strong>
                    <br />
                    <p className="text-[.8rem] font-[500]">Jan, 2024</p>
                  </span>
                </div>
                <div className="py-[2rem]">
                  <h3 className="uppercase text-[1.5rem]">
                    <a href="#">Cozy and Stylish: 6 Comfortable Picks</a>
                  </h3>
                  <ul className="flex items-center text-neutral-600 text-[.8rem] py-[1rem]">
                    <span>
                      by Admin
                      <span className="ml-[.5rem]">|</span>
                    </span>
                    <span className="ml-[.5rem]">
                      24 January, 2024
                      <span className="ml-[.5rem]">|</span>
                    </span>
                    <span className="ml-[.5rem]">
                      chair
                      <span className="ml-[.5rem]">|</span>
                    </span>
                    <span className="ml-[.5rem]">8 Comments</span>
                  </ul>
                  <p className="text-[1.1rem] text-neutral-700 leading-[30px]">
                    Indulge in the luxurious comfort and impeccable style
                    offered by these carefully curated furniture picks. Dive
                    into plush sofas, ergonomic chairs, and sumptuous bedding
                    that invite you to unwind and relax in utmost tranquility.
                  </p>
                  <Link
                    href="#"
                    className="flex items-center gap-[.5rem] text-[1.1rem] uppercase text-neutral-100 bg-primary-400 py-[.7rem] px-[1.8rem] w-fit rounded-[.6rem] mt-[1.5rem]"
                  >
                    <span>continue reading</span>
                    <FaArrowRight />
                  </Link>
                </div>
              </div>
            </div>
            {/* COLUMN 2 */}
            <div className="lg:border-l-[1px] lg:border-l-[#d9d9d9] lg:pl-[4rem] lg:py-[4rem]">
              <div className="mb-[3rem]">
                <form
                  className="relative flex items-center justify-start"
                  netlify="true"
                >
                  <input
                    type="text"
                    className="w-[100%] pl-[1rem] h-[43px] relative outline-none border-[1.5px] border-[#d9d9d9] placeholder:capitalize placeholder:text-neutral-400"
                    placeholder="search"
                  />
                  <div className="absolute right-0 cursor-pointer bg-primary-400 px-[1rem] h-[100%]">
                    <IoSearch className="leading-[43px] text-neutral-100 mt-[50%] text-[1.3rem]" />
                  </div>
                </form>
              </div>
              {/* CATEGORIES */}
              <div className="mb-[4rem]">
                <h3 className="mb-[2rem]">categories</h3>
                <ul>
                  <li className="border-t-[1px] border-t-[#d9d9d9] py-[.7rem]">
                    <Link href="#">Table</Link>
                  </li>
                  <li className="border-t-[1px] border-t-[#d9d9d9] py-[.7rem]">
                    <Link href="#">Chair</Link>
                  </li>
                  <li className="border-t-[1px] border-t-[#d9d9d9] py-[.7rem]">
                    <Link href="#">Couch</Link>
                  </li>
                  <li className="border-y-[1px] border-y-[#d9d9d9] py-[.7rem]">
                    <Link href="#">Bed</Link>
                  </li>
                </ul>
              </div>
              {/* POPULAR */}
              <div className="mb-[4rem]">
                <h3 className="mb-[2rem]">most popular</h3>
                <div className="flex items-center justify-start mb-[1.5rem]">
                  <Link href="#" className="capitalize text-neutral-350">
                    <Image
                      src="/img/newsletter.webp"
                      width={700}
                      height={700}
                      alt="newsletter"
                      className="w-[70px] h-[70px] rounded-[.6rem] object-cover"
                    />
                  </Link>
                  <div className="self-start ml-[1rem] mt-[-.3rem]">
                    <Link href="#" className="mb-[.5rem]">
                      style your home
                    </Link>
                    <p className="text-[.75rem]">3 days ago</p>
                  </div>
                </div>
                <div className="flex items-center justify-start mb-[1.5rem]">
                  <Link href="#" className="capitalize text-neutral-350">
                    <Image
                      src="/img/table11.webp"
                      width={700}
                      height={700}
                      alt="table"
                      className="w-[70px] h-[70px] rounded-[.6rem] object-cover"
                    />
                  </Link>
                  <div className="self-start ml-[1rem] mt-[-.3rem]">
                    <Link href="#" className="mb-[.5rem]">
                      Couch and chairs
                    </Link>
                    <p className="text-[.75rem]">3 days ago</p>
                  </div>
                </div>
                <div className="flex items-center justify-start mb-[1.5rem]">
                  <Link href="#" className="capitalize text-neutral-350">
                    <Image
                      src="/img/chair9.webp"
                      width={700}
                      height={700}
                      alt="chair"
                      className="w-[70px] h-[70px] rounded-[.6rem] object-cover"
                    />
                  </Link>
                  <div className="self-start ml-[1rem] mt-[-.3rem]">
                    <Link href="#" className="mb-[.5rem]">
                      style your home
                    </Link>
                    <p className="text-[.75rem]">3 days ago</p>
                  </div>
                </div>
                <div className="flex items-center justify-start mb-[1.5rem]">
                  <Link href="#" className="capitalize text-neutral-350">
                    <Image
                      src="/img/shopping.webp"
                      width={700}
                      height={700}
                      alt="shopping"
                      className="w-[70px] h-[70px] rounded-[.6rem] object-cover"
                    />
                  </Link>
                  <div className="self-start ml-[1rem] mt-[-.3rem]">
                    <Link href="#" className="mb-[.5rem]">
                      Couch and chairs
                    </Link>
                    <p className="text-[.75rem]">5 days ago</p>
                  </div>
                </div>
                <div className="flex items-center justify-start mb-[1.5rem]">
                  <Link href="#" className="capitalize text-neutral-350">
                    <Image
                      src="/img/couch10.webp"
                      width={700}
                      height={700}
                      alt="couch"
                      className="w-[70px] h-[70px] rounded-[.6rem] object-cover"
                    />
                  </Link>
                  <div className="self-start ml-[1rem] mt-[-.3rem]">
                    <Link href="#" className="mb-[.5rem]">
                      Couch and chairs
                    </Link>
                    <p className="text-[.75rem]">10 days ago</p>
                  </div>
                </div>
              </div>
              {/* ARCHIVE */}
              <div className="mb-[4rem]">
                <h3 className="mb-[2rem]">archive</h3>
                <ul>
                  <div className="flex items-center justify-between mb-[.9rem]">
                    <Link href="#" className="capitalize text-neutral-350">
                      july 2024
                    </Link>
                    <p className="text-neutral-350 text-[.75rem]">(9)</p>
                  </div>
                  <div className="flex items-center justify-between mb-[.9rem]">
                    <Link href="#" className="capitalize text-neutral-350">
                      june 2024
                    </Link>
                    <p className="text-neutral-350 text-[.75rem]">(39)</p>
                  </div>
                  <div className="flex items-center justify-between mb-[.9rem]">
                    <Link href="#" className="capitalize text-neutral-350">
                      may 2024
                    </Link>
                    <p className="text-neutral-350 text-[.75rem]">(29)</p>
                  </div>
                  <div className="flex items-center justify-between mb-[.9rem]">
                    <Link href="#" className="capitalize text-neutral-350">
                      april 2024
                    </Link>
                    <p className="text-neutral-350 text-[.75rem]">(35)</p>
                  </div>
                  <div className="flex items-center justify-between mb-[.9rem]">
                    <Link href="#" className="capitalize text-neutral-350">
                      march 2024
                    </Link>
                    <p className="text-neutral-350 text-[.75rem]">(22)</p>
                  </div>
                  <div className="flex items-center justify-between mb-[.9rem]">
                    <Link href="#" className="capitalize text-neutral-350">
                      february 2024
                    </Link>
                    <p className="text-neutral-350 text-[.75rem]">(32)</p>
                  </div>
                  <div className="flex items-center justify-between mb-[.9rem]">
                    <Link href="#" className="capitalize text-neutral-350">
                      january 2024
                    </Link>
                    <p className="text-neutral-350 text-[.75rem]">(21)</p>
                  </div>
                  <div className="flex items-center justify-between mb-[.9rem]">
                    <Link href="#" className="capitalize text-neutral-350">
                      december 2023
                    </Link>
                    <p className="text-neutral-350 text-[.75rem]">(26)</p>
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
