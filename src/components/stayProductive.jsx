function stayProductive() {
  return (
    <section className="stayProductive  pb-[100px]">
      <div className="container mx-auto">
        <div className="holder w-full flex flex-col md:flex-row py-[50px] px-[20px]">
          <div className="w-full animate-updown ">
            <img src="src/assets/imgs/illustration-stay-productive.png"></img>
          </div>
          <div className="info flex flex-col justify-center gap-y-[10px] my-[20px]">
            <h1 className="text-[40px]">
              Stay productive,
              <br></br>
              Wherever you are
            </h1>
            <div className=" text-white opacity-60 flex flex-col gap-y-[30px]">
              <p>
                Fylo stores all your most important files in one secure
                location. Access them wherever you need, share and collaborate
                with friends , family and co-workers
              </p>

              <p>
                Fylo stores all your most important files in one secure
                location. Access them wherever you need, share and collaborate
                with friends , family and co-workers
              </p>
            </div>
            <a
              href="#"
              className=" w-[180px] inline-block text-[20px] pb-[10px] border-b-2   border-transparent hover:border-b-2  hover:[text-shadow:_0_0_4px_rgba(255,255,255,0.6),_0_0_8px_rgba(255,255,255,0.4)]    hover:border-white transition-all duration-300 text-white opacity-80 hover:opacity-100"
            >
              Stay Productive
              <img
                className="inline ml-2 w-[25px] animate-left-right"
                src="src/assets/imgs/icon-arrow.svg"
              ></img>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default stayProductive;
