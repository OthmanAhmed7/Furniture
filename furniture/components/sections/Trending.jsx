import Card from "../product/Card";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { Loading } from "../global/Loading";
import useFetchData from "@/hooks/useFetchData";

const Trending = ({ title, showNotify }) => {
  const { data: products, loading, error } = useFetchData();

  return (
    <>
      <section className="pt-[5rem] max-w-[1300px] mx-auto">
        <div>
          <h2 className="font-[700] text-[2rem] mb-[2rem]">{title}</h2>
        </div>

        <Splide
          options={{
            perPage: 1,
            pagination: false,
            gap: "2rem",
            drag: true,
            mediaQuery: "min",
            speed: 1000,
            breakpoints: {
              768: {
                perPage: 2,
              },

              1200: {
                perPage: 4,
              },
            },
          }}
        >
          {loading ? (
            <Loading />
          ) : error ? (
            <p>Error: {error}</p>
          ) : (
            products.map((product) => {
              return (
                <SplideSlide key={product._id}>
                  <Card product={product} showNotify={showNotify} />
                </SplideSlide>
              );
            })
          )}
        </Splide>
      </section>
    </>
  );
};

export default Trending;
