import PageBreadCrumbs from "@/components/global/PageBreadCrumbs";

import React from "react";

const page = () => {
  return (
    <section className="contact bg-neutral-300">
      <div className="bg-img">
        <div className="absolute top-0 left-0 opacity-30 bg-neutral-900 w-[100%] h-[100%] transition duration-300 ease-in z-[10]"></div>
        <h1 className="absolute top-[55%] left-[50%] translate-x-[-50%] translate-y-[-55%] flex items-center justify-center text-neutral-100 uppercase text-[3.5rem] w-[100%] tracking-[10px] leading-[1.3] pl-[1rem] z-10 font-[700]">
          Contact
        </h1>
      </div>
      <div className="px-[1rem] py-[5rem] max-w-[1300px] mx-auto">
        <PageBreadCrumbs />
        <div className="grid grid-cols-1 pt-[2rem] gap-[6rem] lg:grid-cols-2">
          <div className="">
            <form className="text-[1.1rem] text-neutral-400">
              <div className="mb-[1.5rem] text-[.9rem] mt-[.3rem]">
                <span className="text-[1.1rem] text-neutral-400 block capitalize mb-[.3rem]">
                  Name*
                </span>

                <div className="flex items-center justify-start gap-[.5rem]">
                  <div className="w-[100%]">
                    <input
                      type="text"
                      className="p-[.75rem] w-[100%] bg-[#fafafa] border-[1px] mb-[.3rem] border-[#ccc] rounded-[.3rem]"
                    />
                    <span>First Name</span>
                  </div>

                  <div className="w-[100%]">
                    <input
                      type="text"
                      className="p-[.75rem] w-[100%] mb-[.3rem] bg-[#fafafa] border-[1px] border-[#ccc] rounded-[.3rem]"
                    />
                    <span>Last Name</span>
                  </div>
                </div>
              </div>

              <div className="mb-[1.5rem] ">
                <span>Email Address*</span>

                <input
                  type="text"
                  className="p-[.75rem] w-[100%] bg-[#fafafa] border-[1px] border-[#ccc] rounded-[.3rem]"
                />
              </div>

              <div className="mb-[1.5rem]">
                <span>Subject*</span>

                <input
                  type="text"
                  className="p-[.75rem] w-[100%] bg-[#fafafa] border-[1px] border-[#ccc] rounded-[.3rem]"
                />
              </div>
              <div className="mb-[1.5rem]">
                <span>Message*</span>

                <textarea
                  className="p-[.75rem] w-[100%] bg-[#fafafa] border-[1px] border-[#ccc] rounded-[.3rem]"
                  cols="30"
                  rows="10"
                ></textarea>
              </div>

              <button
                type="submit"
                className="px-[1.8rem] py-[.7rem] bg-primary-400 text-neutral-100 text-[1.1rem] font-[600] rounded-[.6rem]"
              >
                submit
              </button>
            </form>
          </div>

          <div>
            <div className="lg:mt-[4rem] text-neutral-400">
              <div className="mb-[1rem]">
                <p className="tracking-[2px] text-[1.1rem] mb-[.2rem]">
                  FURNITURE HOUSE STUDIOS
                </p>
                <p className="tracking-[2px] text-[1.1rem] mb-[.2rem]">
                  1200 PARK AVE
                </p>
                <p className="tracking-[2px] text-[1.1rem] mb-[.2rem]">
                  EMERYVILLE, CA 94608
                </p>
              </div>

              <div className="mb-[3rem]">
                <p className="tracking-[2px] text-[1.1rem] mb-[.2rem]">
                  T (510) 922-3000
                </p>
                <p className="tracking-[2px] text-[1.1rem]">F (510) 922-3151</p>
              </div>
            </div>

            <hr />
            <div className="relative overflow-hidden pt-[3rem] h-[80vh]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2644.609902149685!2d-123.11622668431576!3d49.2827299793301!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5486717d99c1a8a7%3A0x9a383dd87b1aa184!2sStanley%20Park!5e0!3m2!1sen!2sca!4v1620121097528!5m2!1sen!2sca"
                width={200}
                height={450}
                className="w-[100%] h-[100%] border-none"
                allowFullScreen={true}
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
