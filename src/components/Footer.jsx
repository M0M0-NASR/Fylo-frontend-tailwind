import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
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

          <ul className="grid justify-center grid-flow-col grid-rows-4 place-items-start gap-x-[50px] gap-[10px] my-[50px] opacity-[0.8]">
            <li>
              <a
                href="#"
                className="text-white opacity-[0.8] hover:opacity-[1] hover:underline transition-opacity duration-300 p-[20px]"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white opacity-[0.8] hover:opacity-[1] hover:underline transition-opacity duration-300 p-[20px]"
              >
                Jobs
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white opacity-[0.8] hover:opacity-[1] hover:underline transition-opacity duration-300 p-[20px]"
              >
                Press
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white opacity-[0.8] hover:opacity-[1] hover:underline transition-opacity duration-300 p-[20px]"
              >
                Blog
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white opacity-[0.8] hover:opacity-[1] hover:underline transition-opacity duration-300 p-[20px]"
              >
                Contact Us
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white opacity-[0.8] hover:opacity-[1] hover:underline transition-opacity duration-300 p-[20px]"
              >
                Terms
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white opacity-[0.8] hover:opacity-[1] hover:underline transition-opacity duration-300 p-[20px]"
              >
                Privacy
              </a>
            </li>
          </ul>
          <div className="socials flex items-center justify-end gap-[20px] my-[50px]">
            <a href="#">
              <FaFacebookF />
            </a>
            <a href="#">
              <FaTwitter />
            </a>
            <a href="#">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
