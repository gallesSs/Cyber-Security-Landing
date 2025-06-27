import img1 from "../../assets/Features/feature1.svg";
import img2 from "../../assets/Features/feature2.svg";
import img3 from "../../assets/Features/feature3.svg";

const Features = () => {
  return (
    <section className="md:px-30 md:mb-22.5">
      <ul className="p-8 flex flex-col justify-center items-center gap-7.5 md:flex-row md:p-0">
        <li className="p-7.5 flex flex-col justify-center items-center gap-4 text-[#12141D] border-b-1 border-b-[#E4E4E7] md:items-start md:border-b-0 md:border-r-1 md:border-r-[#E4E4E7] md:max-w-106.5">
          <img src={img1} alt="img1" className="w-15 mb-1" />
          <h2 className="font-bold text-lg leading-6">
            Solve Problems Real Time
          </h2>
          <p className="text-center font-normal text-base leading-6.5 opacity-70 md:text-start">
            Real-time problem solving is not just about time, it's about time.
            This allows you to solve problems within a specified time problem
            has a solution.
          </p>
        </li>
        <li className="p-7.5 flex flex-col justify-center items-center gap-4 text-[#12141D] border-b-1 border-b-[#E4E4E7] md:items-start md:border-b-0 md:border-r-1 md:border-r-[#E4E4E7]">
          <img src={img2} alt="img2" className="w-15 mb-1" />
          <h2 className="font-bold text-lg leading-6">
            Secured & Safe Payments
          </h2>
          <p className="text-center font-normal text-base leading-6.5 opacity-70 md:text-start">
            By and large, credit cards are easily the most secure and safe
            payment method to use when you shop online. credit cards most
            secure.
          </p>
        </li>
        <li className="p-7.5 flex flex-col justify-center items-center gap-4 text-[#12141D] md:items-start">
          <img src={img3} alt="img3" className="w-15 mb-1" />
          <h2 className="font-bold text-lg leading-6">
            24//7 Customer Support
          </h2>
          <p className="text-center font-normal text-base leading-6.5 opacity-70 md:text-start">
            The biggest benefit of offering 24/7 support is that you provide a
            more convenient service for your customers providing clock support.
          </p>
        </li>
      </ul>
    </section>
  );
};

export default Features;
