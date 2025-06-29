const Plan = ({
  title,
  price,
  subtitle,
  billing,
  cancelPolicy,
  buttonText,
}) => {
  return (
    <>
      <span className="text-[#71717A] text-[18px] font-medium leading-8">
        {title}
      </span>
      <span className="text-[#12141D] text-[58px] font-bold leading-18 mb-5.5">
        {price}
      </span>
      <div className="flex flex-col justify-center items-center mb-4.5">
        <span className="text-[18px] font-semibold leading-8 text-[#18181B]">
          {subtitle}
        </span>
        <span className="text-[#52525B] text-[18px] leading-8">{billing}</span>
        <span className="text-[#52525B] text-[18px] leading-8">
          {cancelPolicy}
        </span>
      </div>
      <button
        className="w-full text-white px-24 py-3 font-semibold leading-6 bg-black transition-all duration-300 group-active:bg-red-600 group-hover:bg-red-600"
        type="button">
        {buttonText}
      </button>
    </>
  );
};

export default Plan;
