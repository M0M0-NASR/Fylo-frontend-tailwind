import StayProductive from "../assets/imgs/illustration-stay-productive.png";
import iconArrow from "../assets/imgs/icon-arrow.svg";

function stayProductive() {
  return (
    <section className="stayProductive  sm:pb-[100px]">
      <div className="container mx-auto">
        <div className="holder w-full flex flex-col md:flex-row py-[50px] px-[20px]">
          <div className="w-full animate-updown ">
            <img src={StayProductive} alt="Stay Productive" />
          </div>
          <div className="info flex flex-col justify-center gap-y-[10px] my-[20px]">
            <h1 className=" text-[1.5rem] sm:text-[40px] font-bold">
              Stay productive,
              <br></br>
              Wherever you are
            </h1>
            <div className=" text-white opacity-60 flex flex-col gap-y-[30px]">
              <p>
                Never let location be an issue when accessing your files. Fylo
                has you covered for all off your file storage needs.
              </p>

              <p>
                Securely share files and folders with friends, famliy and
                colleagues for live collaboration. No email attachments
                required.
              </p>
            </div>
            <a
              href="#"
              className=" w-[220px] inline-block text-[20px] pb-[10px] border-b-2   border-transparent hover:border-b-2  hover:[text-shadow:_0_0_4px_rgba(255,255,255,0.6),_0_0_8px_rgba(255,255,255,0.4)]    hover:border-white transition-all duration-300 text-white opacity-80 hover:opacity-100"
            >
              See how Fylo works
              <img
                className="inline ml-2 w-[25px] animate-left-right"
                src={iconArrow}
              ></img>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default stayProductive;
