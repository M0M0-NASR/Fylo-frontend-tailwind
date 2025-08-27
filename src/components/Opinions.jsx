import { useState } from "react";

import profile1 from "../assets/imgs/profile-1.jpg";
import profile2 from "../assets/imgs/profile-2.jpg";
import profile3 from "../assets/imgs/profile-3.jpg";
import bgQuotes from "../assets/imgs/bg-quotes.png";

function Opinions() {
  const [opinions, setOpinions] = useState([
    {
      id: 1,
      text: `Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.`,
      imgProfile: profile1,
      name: " Peter Mimie",
      job: "CEO & Founder",
    },
    {
      id: 2,
      text: `Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.`,
      imgProfile: profile2,
      name: " Peter Mimie",
      job: "CEO & Founder",
    },
    {
      id: 3,
      text: `Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.`,
      imgProfile: profile3,
      name: "Iva Boyd",
      job: "CEO & Founder",
    },
  ]);
  return (
    <section className=" perspective-[800px] opinions bg-[--main-color] sm:py-[100px] sm:pb-[100px]">
      <div className="container perspective-[5000px]  mx-auto">
        <div className="relative sm:top-[25px] sm:left-[10px] w-[0px] sm:w-[40px]">
          <img className="w-[50px]" src={bgQuotes}></img>
        </div>

        <div className=" holder grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {opinions.map((opinion) => (
            <div
              key={opinion.id}
              className="  m-[10px] sm:m-[10px] py-[50px] px-[10px] bg-gray-800 rounded-[20px]"
            >
              <p>{opinion.text}</p>
              <div className="info-holder flex flex-row pt-[10px]">
                <div className="w-[20%]">
                  <img
                    className="w-[50px]  rounded-full sm:mr-[0px]  "
                    src={opinion.imgProfile}
                  ></img>
                </div>
                <div>
                  <h2>{opinion.name}</h2>
                  <h2 className="text-[12px] text-white opacity-60">
                    {opinion.job}
                  </h2>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Opinions;
