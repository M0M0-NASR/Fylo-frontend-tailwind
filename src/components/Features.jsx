import { useState } from "react";

import feat1 from "../assets/imgs/icon-any-file.svg";

import feat2 from "../assets/imgs/icon-collaboration.svg";

import feat3 from "../assets/imgs/icon-security.svg";

import feat4 from "../assets/imgs/icon-access-anywhere.svg";

import bgCurvy from "../assets/imgs/bg-curvy-desktop.svg";

function Features() {
  const [features, setFeatures] = useState([
    {
      id: 1,
      icon: feat1,
      title: "Access your file, anywhere",
      paragraph: `The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.`,
    },
    {
      id: 2,
      icon: feat2,
      title: "Security you can trust",
      paragraph: `2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files.`,
    },
    {
      id: 3,
      icon: feat3,
      title: "Real-time collaboration",
      paragraph: `Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.`,
    },
    {
      id: 4,
      icon: feat4,
      title: "Store any type of file",
      paragraph: `Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.`,
    },
  ]);
  return (
    <section className="features py-[5px] pb-[100px] ">
      <div className=" w-full h-[200px] relative -top-[150px] z-[-100]">
        <img src={bgCurvy} className="w-full h-full"></img>
      </div>

      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 justify-center items-center ">
          {features.map((feature) => (
            <div
              key={feature.id}
              className=" hover:-translate-y-4 transition-transform duration-300 px-[10px] md:px-[80px] flex flex-col  justify-center align-middle items-center m-[20px]"
            >
              <div>
                <img src={feature.icon}></img>
              </div>
              <h2 className=" py-[20px] text-[1.4rem] sm:text-[1.5rem] font-bold">
                {feature.title}
              </h2>
              <p className="text-center">{feature.paragraph}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
