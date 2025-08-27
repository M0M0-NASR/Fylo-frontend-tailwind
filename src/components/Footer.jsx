import { useState } from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import iconPhone from "../assets/imgs/icon-phone.svg";
import iconEmail from "../assets/imgs/icon-email.svg";
import logo from "../assets/imgs/logo.svg";

import iconLocation from "../assets/imgs/icon-location.svg";
function Footer() {
  const [contacts, setContacts] = useState([
    { id: 1, icon: iconPhone, data: "201279639639" },
    { id: 2, icon: iconEmail, data: "mohamednasrmahmod@gmail.com" },
  ]);

  const [links, setLinks] = useState([
    { id: 1, default: "#", link: "about", data: "About us" },
    { id: 2, default: "#", link: "jobs", data: "Jobs" },
    { id: 3, default: "#", link: "press", data: "Press" },
    { id: 4, default: "#", link: "blog", data: "Blog" },
    { id: 5, default: "#", link: "contact", data: "Contact Us" },
    { id: 6, default: "#", link: "terms", data: "Terms" },
    { id: 7, default: "#", link: "privacy", data: "Privacy" },
  ]);
  return (
    <footer className=" bg-[#0c1524] text-white py-[300px] mt-[0px] px-[20px]">
      <div className="container mx-auto flex flex-col ">
        <div className="logo mb-[20px] sm:mb-0 w-[100px]">
          <img src={logo} alt="Logo" />
        </div>

        <div
          className="holder grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4
         items-start gap-[50px] "
        >
          <div className="location flex items-start gap-[20px] my-[50px] ">
            <img
              src={iconLocation}
              className="w-[15px] mt-[5px]"
              alt="Location"
            />
            <p>
              Fylo stores all your most important files in one secure location.
              Access them wherever you need, share and collaborate with friends
              , family and co-workers
            </p>
          </div>
          <div className="contacts flex flex-col gap-[30px] my-[50px]">
            {contacts.map((contact) => (
              <div
                key={contact.id}
                className="flex items-center justify-center md:justify-start gap-[10px]"
              >
                <img
                  src={contact.icon}
                  className="w-[15px] mt-[5px]"
                  alt={contact.icon}
                />
                <a
                  href={
                    contact.id == 1
                      ? "https://wa.me/201279639639"
                      : "mailto:mohamednasrmahmood@gmail.com"
                  }
                  target="parent"
                  className=" text-[.9rem] text-white opacity-[0.8] hover:opacity-[1] hover:underline transition-opacity duration-300 p-[1px]"
                >
                  {contact.data}
                </a>
              </div>
            ))}
          </div>
          <ul className="grid justify-center grid-flow-col grid-rows-4 place-items-start gap-x-[50px] gap-[10px] my-[50px] opacity-[0.8]">
            {links.map((link) => (
              <li key={link.id}>
                <a
                  key={link.id}
                  href={link.default}
                  className=" whitespace-nowrap text-white bg-transparent  hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] hover:underline  duration-300 m-[20px]"
                >
                  {link.data}
                </a>
              </li>
            ))}
          </ul>
          <div className="socials flex items-center justify-center gap-[20px] my-[50px]">
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
