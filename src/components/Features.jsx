import { useState } from "react";

function Features() {
  const [features, setFeatures] = useState([
    {
      id: 1,
      icon: "icon-any-file",
      title: "Icon - collaboration",
      paragraph: `Fylo stores all your most important files in one secure location.Access them wherever you need, share and collaborate with friends, family and co-workers`,
    },
    {
      id: 2,
      icon: "icon-collaboration",
      title: "Icon - collaboration",
      paragraph: `Fylo stores all your most important files in one secure location.Access them wherever you need, share and collaborate with friends, family and co-workers`,
    },
    {
      id: 3,
      icon: "icon-security",
      title: "Icon - collaboration",
      paragraph: `Fylo stores all your most important files in one secure location.Access them wherever you need, share and collaborate with friends, family and co-workers`,
    },
    {
      id: 4,
      icon: "icon-access-anywhere",
      title: "Icon - collaboration",
      paragraph: `Fylo stores all your most important files in one secure location.Access them wherever you need, share and collaborate with friends, family and co-workers`,
    },
  ]);
  return (
    <section className="features py-[5px] ">
      <div className=" w-full h-[200px] relative -top-[150px] z-[-100]">
        <img
          src="src/assets/imgs/bg-curvy-desktop.svg"
          className="w-full h-full"
        ></img>
      </div>

      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 justify-center items-center ">
          {features.map((feature) => (
            <div
              key={feature.id}
              className=" hover:-translate-y-4 transition-transform duration-300 px-[10px] md:px-[80px] flex flex-col  justify-center align-middle items-center m-[20px]"
            >
              <div>
                <img src={"src/assets/imgs/" + feature.icon + ".svg"}></img>
              </div>
              <h2 className="py-[20px]">{feature.title}</h2>
              <p className="text-center">{feature.paragraph}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
