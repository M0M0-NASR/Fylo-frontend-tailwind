function Home() {
  return (
    <section className="w-full home py-[150px] ">
      <div className="container mx-auto flex flex-col sm:justify-center items-center">
        <div className="animate-updown ">
          <img src="/src/assets/imgs/illustration-intro.png"></img>
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
        <button className="my-[20px] py-[12px] px-[100px] bg-[var(--main-btn-color)] text-white rounded-full hover:bg-[#8bd9e3] hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] transition duration-500">
          Get Started
        </button>
      </div>
    </section>
  );
}
export default Home;
