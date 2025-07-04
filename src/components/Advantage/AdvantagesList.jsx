import React from "react";
import Advantage from "./Advantage";

const AdvantagesList = ({ data }) => {
  return (
    <>
      {data.map((item) => (
        <section className="mb-15 scroll-mt-20" id="Advantages" key={item.id}>
          <Advantage
            url={item.url}
            h2={item.h2}
            p={item.p}
            reverse={item.id % 2 !== 0}
          />
        </section>
      ))}
    </>
  );
};

export default AdvantagesList;
