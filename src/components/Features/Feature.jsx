const Feature = ({ url, title, info }) => {
  return (
    <div className="flex flex-col justify-center items-center gap-4 lg:text-start lg:items-start">
      <img src={url} alt="feature" className="mb-1" />
      <h3 className="text-center text-[#12141d] text-[18px] font-bold leading-[133%] lg:text-start">
        {title}
      </h3>
      <p className="text-center leading-[162%] text-[#12141d] lg:text-start">
        {info}
      </p>
    </div>
  );
};

export default Feature;
