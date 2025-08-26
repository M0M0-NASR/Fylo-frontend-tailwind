import { useState } from "react";

function Opinions() {
  const [opinions, setOpinions] = useState([
    {
      id: 1,
      text: `Fylo stores all your most important files in one secure location.Access them wherever you need, share and collaborate with friends, family and co-workers`,
      imgProfile: "profile-1.jpg",
      name: " Peter Mimie",
      job: "CEO & Founder",
    },
    {
      id: 2,
      text: `Fylo stores all your most important files in one secure location.Access them wherever you need, share and collaborate with friends, family and co-workers`,
      imgProfile: "profile-2.jpg",
      name: " Peter Mimie",
      job: "CEO & Founder",
    },
    {
      id: 3,
      text: `Fylo stores all your most important files in one secure location.Access them wherever you need, share and collaborate with friends, family and co-workers`,
      imgProfile: "profile-3.jpg",
      name: " Peter Mimie",
      job: "CEO & Founder",
    },
  ]);
  return (
    <section className="opinions bg-[--main-color] py-[100px]">
      <div className="container mx-auto">
        <div className="relative sm:top-[15px] sm:left-[0px] top-[60px] left-[20px]">
          <img className="w-[50px] " src="src/assets/imgs/bg-quotes.png"></img>
        </div>

        <div className="holder grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {opinions.map((opinion) => (
            <div className=" m-[40px] sm:m-[0px] py-[50px] px-[30px] bg-gray-800 rounded-[20px]">
              <p>{opinion.text}</p>
              <div className="info-holder flex flex-row pt-[10px]">
                <div className="  ">
                  <img
                    className="w-[50px]  rounded-full sm:mr-[20px]  "
                    src={"src/assets/imgs/" + opinion.imgProfile}
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
