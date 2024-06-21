const Newsletter = () => {
  return (
    <>
      <section className="newsletter-img">
        <div className="max-w-[600px] mx-auto py-[3rem] px-[2rem]">
          <div className="mb-0 text-center">
            <h2 className="mb-[.5rem] font-[700] sm:mb-[0.5rem] text-[1.8rem] leading-[1.3] sm:leading-[1.1] md:text-[2rem]">
              Join Our Newsletter Now
            </h2>
            <p className="text-[1rem]">
              Subscribe to our newsletter and get 20% off your first purchase
            </p>
          </div>

          <form
            name="contact"
            action="/contact"
            method="POST"
            data-netlify="true"
            className="flex items-center justify-center flex-wrap gap-[.5rem] mt-[1rem]"
          >
            <input
              type="hidden"
              name="form-name"
              value="contact"
              className="h-[46px] w-[100%] pl-[.5rem] rounded-[.6rem] border-[1.5px] border-solid border-neutral-400"
            />
            <input
              type="email"
              name="email"
              required
              placeholder="Enter your email"
              className="h-[46px] w-[100%] pl-[.5rem] rounded-[.6rem] border-[1.5px] border-solid border-neutral-400"
            />
            <button
              className="w-[100%] bg-primary-400 text-neutral-100 py-[.7rem] px-[1.8rem] text-[1rem] rounded-[.6rem] font-[600] uppercase"
              type="submit"
            >
              subscribe
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Newsletter;
