import PageBreadCrumbs from "@/components/global/PageBreadCrumbs";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";

const About = () => {
  return (
    <section className="about bg-neutral-300">
      <div className="bg-img">
        <div className="absolute top-0 left-0 opacity-30 bg-neutral-900 w-[100%] h-[100%] transition duration-300 ease-in z-[10]"></div>
        <h1 className="absolute top-[55%] left-[50%] translate-x-[-50%] translate-y-[-55%] flex items-center justify-center text-neutral-100 uppercase text-[3.5rem] w-[100%] tracking-[10px] leading-[1.3] pl-[1rem] z-10 font-[700]">
          About
        </h1>
      </div>
      <div className="px-[1rem] py-[5rem] max-w-[1300px] mx-auto">
        <PageBreadCrumbs />
        <div className="flex flex-col lg:flex-row items-start md:items-center lg:items-start justify-between mt-[3rem] gap-[3rem]">
          <div className="flex-1">
            <h2 className="text-[2rem] font-[700] capitalize mb-[1.5rem]">
              about us
            </h2>
            <p className="leading-[30px] text-[1.2rem] mb-[1.9rem] text-neutral-700 max-w-[700px]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque,
              nisi Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Odit nobis magni eaque velit eum, id rem eveniet dolor possimus
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
              explicabo necessitatibus ex rem facere obcaecati eius maiores
              facilis eos voluptatum? voluptas..
            </p>
            <a
              href="#"
              className="py-[.7rem] px-[1.8rem] bg-primary-400 rounded-[.6rem] flex items-center justify-start w-fit text-neutral-100 gap-[.5rem] uppercase font-[600]"
            >
              <span>read more</span>
              <FaArrowRight />
            </a>
          </div>

          <div className="flex-1">
            <Image
              aria-label="couch"
              src="/img/couch10.webp"
              width={700}
              height={700}
              alt="couch"
              className="rounded-[.8rem]"
            />
          </div>
        </div>

        <div className="flex lg:flex-row-reverse flex-col items-start md:items-center lg:items-start justify-between mt-[3rem] gap-[3rem]">
          <div className="flex-1">
            <h2 className="text-[2rem] font-[700] capitalize mb-[1.5rem]">
              our mission
            </h2>
            <p className="leading-[30px] text-[1.2rem] mb-[1.9rem] text-neutral-700 max-w-[700px]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque,
              nisi Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Odit nobis magni eaque velit eum, id rem eveniet dolor possimus
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
              explicabo necessitatibus ex rem facere obcaecati eius maiores
              facilis eos voluptatum? voluptas..
            </p>
            <a
              href="#"
              className="py-[.7rem] px-[1.8rem] bg-primary-400 rounded-[.6rem] flex items-center justify-start w-fit text-neutral-100 gap-[.5rem] uppercase font-[600]"
            >
              <span>read more</span>
              <FaArrowRight />
            </a>
          </div>

          <div className="flex-1">
            <Image
              aria-label="chair"
              src="/img/chair10.webp"
              width={700}
              height={700}
              alt="chair"
              className="rounded-[.8rem]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
