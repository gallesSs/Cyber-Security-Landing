import Plan from "./Plan";

const PlanList = ({ data }) => {
  return (
    <section className="mb-5 md:mb-25">
      <h2 className="text-[#12141D] text-center font-bold text-[32px] leading-10 mb-5 max-w-86 mx-auto md:text-5xl md:leading-14 md:max-w-114">
        Affordable plans for our customers
      </h2>
      <p className="text-[#12141D] text-[18px] text-center leading-8 mb-8 md:mb-15">
        Try free for 30 Days
      </p>
      <ul className="flex flex-col gap-6 justify-center items-center mx-7 md:flex-row md:gap-10">
        {data.map((item) => {
          return (
            <li className="w-80 flex flex-col justify-center items-center border-[1px] border-[#E4E4E7] rounded-[5px] pt-8 gap-3 group cursor-pointer">
              <Plan
                title={item.title}
                subtitle={item.subtitle}
                price={item.price}
                cancelPolicy={item.cancelPolicy}
                billing={item.billing}
                buttonText={item.buttonText}
              />
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default PlanList;
