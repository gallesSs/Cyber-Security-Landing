import AdsCard from "./AdsCard";

const Ads = ({ data }) => {
  return (
    <section className="px-4 mb-10 md:px-[9.5%] justify-center items-center flex flex-col gap-7.5 lg:flex-row lg:justify-between lg:mb-30">
      <div className="flex flex-col gap-4 justify-center items-center lg:items-start max-w-[388px]">
        <h2 className="font-bold text-center text-[28px] text-[#12141d] leading-[121%] lg:text-left">
          Ready to get started?
        </h2>
        <p className="text-[#12141d] leading-[161%] text-center lg:text-left">
          Create custom landing pages with Rareblocks that converts more
          visitors than any website. With lots of unique blocks, you can easily
          build a page.
        </p>
        <button className="mt-3.5 bg-[#ef4444] w-[170px] h-[50px] text-white font-bold leading-[175%] transition-all duration-300 hover:bg-red-600 active:bg-red-600 hover:scale-102 cursor-pointer">
          Try 14 Days Free
        </button>
      </div>
      <ul className="flex flex-col gap-4 justify-center items-center lg:flex-row">
        {data.map((item) => {
          return (
            <li
              className="flex flex-col gap-4 justify-center items-center p-7.5 rounded-[5px] border-[1px] border-[#E4E4E7] max-w-[336px]"
              key={item.id}>
              <AdsCard
                title={item.title}
                subtitle={item.subtitle}
                url={item.url}
              />
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Ads;
