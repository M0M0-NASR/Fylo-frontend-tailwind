import hero from "../assets/imgs/illustration-intro.png";
function Home() {
  return (
    <section className="w-full home pt-[150px] ">
      <div className="container mx-auto flex flex-col sm:justify-center items-center">
        <div className="animate-updown ">
          <img src={hero}></img>
        </div>
        <h1 className=" text-[30px] font-bold py-[20px] text-center">
          All your files in one secure location,
          <br></br>
          accessible anywhere.
        </h1>
        <p className="text-center leading-[1.6]">
          Fylo stores all your most important files in one secure location.
          <br></br>
          Access them wherever you need, share and collaborate with
          <br></br>
          friends , family and co-workers.
        </p>
        <button className="my-[20px] py-[12px] px-[100px] main-btn">
          Get Started
        </button>
      </div>
    </section>
  );
}
export default Home;
