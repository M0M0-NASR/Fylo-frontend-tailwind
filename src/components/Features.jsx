import { useState } from "react";

function Features() {
  const [features, setFeatures] = useState([
    {
      id: 1,
      icon: "icon-collaboration",
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
      icon: "icon-security",
      title: "Icon - collaboration",
      paragraph: `Fylo stores all your most important files in one secure location.Access them wherever you need, share and collaborate with friends, family and co-workers`,
    },
  ]);
  return (
    <section className="features container mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 justify-center items-center">
        {features.map((feature) => (
          <div
            key={feature.id}
            className="px-[10px] sm:px-[80px] flex flex-col  justify-center align-middle items-center m-[20px]"
          >
            <div>
              <img src={"src/assets/imgs/" + feature.icon + ".svg"}></img>
            </div>
            <h2 className="py-[20px]">{feature.title}</h2>
            <p className="text-center">{feature.paragraph}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;
