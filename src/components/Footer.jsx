function Footer() {
  return (
    <footer className=" bg-[#171f2a] text-white py-[50px] mt-[100px]">
      <div className="container mx-auto flex flex-col ">
        <div className="logo mb-[20px] sm:mb-0 w-[100px]">
          <img src="/src/assets/imgs/logo.svg" alt="Logo" />
        </div>
        <div className="holder grid grid-cols-4 items-start gap-[20px]">
          <div className="location flex items-start gap-[20px] my-[50px]">
            <img
              src="/src/assets/imgs/icon-location.svg"
              className="w-[15px] mt-[5px]"
              alt="Location"
            />
            <p>
              Fylo stores all your most important files in one secure location.
              Access them wherever you need, share and collaborate with friends
              , family and co-workers
            </p>
          </div>
          <div className="contacts flex flex-col items-start gap-[20px] my-[50px]">
            <div className="flex items-start gap-[20px]">
              <img
                src="/src/assets/imgs/icon-phone.svg"
                className="w-[15px] mt-[5px]"
                alt="phone"
              />
              <p>1-543-123-4567</p>
            </div>
            <div className="flex items-start gap-[20px]">
              <img
                src="/src/assets/imgs/icon-email.svg"
                className="w-[15px] mt-[5px]"
                alt="email"
              />
              <p>mohamednasrmahmod@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
