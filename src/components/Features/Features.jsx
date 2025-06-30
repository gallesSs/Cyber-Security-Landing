import Feature from "./Feature";

const Features = ({ data }) => {
  return (
    <section className="px-8 lg:px-[9.5%] mb-10 lg:mb-20">
      <ul className="w-full flex flex-col gap-15 items-center lg:flex-row lg:justify-center xl:gap-26">
        {data.map((item, i) => {
          const isLast = i === data.length - 1;

          return (
            <li
              key={item.id}
              className={`relative w-[312px] md:max-w-[372px] after:content-[''] after:absolute after:bottom-[-30px] after:left-1/2 after:-translate-x-1/2 after:w-[211px] after:h-[1px] after:bg-[#e4e4e7] ${
                isLast ? "after:content-none" : ""
              } lg:after:bottom-auto lg:after:right-[-30px] lg:after:left-auto lg:after:top-1/2 lg:after:-translate-y-1/2
    lg:after:w-[1px] lg:after:h-[211px] xl:lg:after:right-[-54px]`}>
              <Feature title={item.title} info={item.info} url={item.url} />
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Features;
