import Link from "next/link";
import { IoLogoFacebook } from "react-icons/io";
import { FaTwitter } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { FaYoutube } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <section className="bg-neutral-400 pt-[5rem] pb-[2rem] px-[16px]">
        <div className="max-w-[1300px] mx-auto">
          <div className="flex flex-col items-center justify-center md:grid md:grid-cols-2 lg:grid-cols-4 lg:items-start">
            <div className="mb-[2rem] text-center lg:text-left">
              <h3 className="text-[1.3rem] text-neutral-100 font-[700] mb-[1rem]">
                Furniture
              </h3>
              <p className="mb-[2rem] text-neutral-100">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Repellat quos rem ullam, placeat amet.
              </p>
              <Link
                href={"/"}
                className="py-[.7rem] px-[1.8rem] bg-primary-400 rounded-[.6rem] text-neutral-100 font-[600]"
              >
                read more
              </Link>
            </div>
            <div className="text-center lg:text-left lg:pl-[6rem] mb-[2rem]">
              <h3 className="text-[1.3rem] text-neutral-100 font-[700] mb-[1rem] capitalize">
                quick menu
              </h3>
              <ul>
                <li className="mb-[.5rem]">
                  <Link
                    href={"/"}
                    className="transition duration-200 ease-in-out hover:text-primary-400 text-neutral-100"
                  >
                    Customer Reviews
                  </Link>
                </li>
                <li className="mb-[.5rem]">
                  <Link
                    href={"/"}
                    className="transition duration-200 ease-in-out hover:text-primary-400 text-neutral-100"
                  >
                    Wholesale or Trade
                  </Link>
                </li>
                <li className="mb-[.5rem]">
                  <Link
                    href={"/"}
                    className="transition duration-200 ease-in-out hover:text-primary-400 text-neutral-100"
                  >
                    Careers
                  </Link>
                </li>
                <li className="mb-[.5rem]">
                  <Link
                    href={"/"}
                    className="transition duration-200 ease-in-out hover:text-primary-400 text-neutral-100"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div className="text-center lg:text-left lg:pl-[5rem] mb-[2rem]">
              <h3 className="text-[1.3rem] text-neutral-100 font-[700] mb-[1rem] capitalize">
                other links
              </h3>
              <ul>
                <li className="mb-[.5rem]">
                  <Link
                    href={"/"}
                    className="transition duration-200 ease-in-out hover:text-primary-400 text-neutral-100"
                  >
                    Shipping & Delivery
                  </Link>
                </li>
                <li className="mb-[.5rem]">
                  <Link
                    href={"/"}
                    className="transition duration-200 ease-in-out hover:text-primary-400 text-neutral-100"
                  >
                    Returns & Exchanges
                  </Link>
                </li>
                <li className="mb-[.5rem]">
                  <Link
                    href={"/"}
                    className="transition duration-200 ease-in-out hover:text-primary-400 text-neutral-100"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li className="mb-[.5rem]">
                  <Link
                    href={"/"}
                    className="transition duration-200 ease-in-out hover:text-primary-400 text-neutral-100"
                  >
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
            <div className="mb-[2rem] text-center flex flex-col items-center">
              <h3 className="text-[1.3rem] text-neutral-100 font-[700] mb-[1rem] capitalize">
                social icons
              </h3>
              <div className="flex gap-[1rem] text-[1.5rem]">
                <Link
                  href={"/"}
                  className="transition duration-200 ease-in-out hover:text-primary-400 text-neutral-100"
                >
                  <IoLogoFacebook />
                </Link>
                <Link
                  href={"/"}
                  className="transition duration-200 ease-in-out hover:text-primary-400 text-neutral-100"
                >
                  <FaTwitter />
                </Link>
                <Link
                  href={"/"}
                  className="transition duration-200 ease-in-out hover:text-primary-400 text-neutral-100"
                >
                  <FiInstagram />
                </Link>
                <Link
                  href={"/"}
                  className="transition duration-200 ease-in-out hover:text-primary-400 text-neutral-100"
                >
                  <FaYoutube />
                </Link>
              </div>
            </div>
          </div>
          <div className="text-center text-[1rem] font-[500] text-neutral-100 mt-[2rem]">
            <p>Copyright © 2024 All Rights Reserved</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
