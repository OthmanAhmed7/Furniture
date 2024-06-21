import { events } from "@/lib/data";
import EventCard from "./EventCard";

const Event = () => {
  return (
    <>
      <section className="pt-[5rem] max-w-[1300px] mx-auto">
        <div className="mx-auto text-center mb-[1.5rem] w-fit">
          <h2 className="font-[700] sm:mb-[0.5rem] mb-[0.3rem] text-[1.8rem] leading-[1.3] sm:leading-[1.1] md:text-[2rem]">
            Our Latest News
          </h2>
          <p className="text-[1.1rem] mb-[2rem]">
            Latest trends and inspiration in interior design.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[2rem]">
          {events.map((event) => {
            return <EventCard event={event} key={event.id} />;
          })}
        </div>
      </section>
    </>
  );
};

export default Event;
