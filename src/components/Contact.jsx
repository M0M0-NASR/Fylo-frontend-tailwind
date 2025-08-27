function Contact() {
  return (
    <div className="contact ">
      <div className="container translate-y-[50%] flex flex-col gap-y-[30px] w-[90%] mx-auto text-center py-[70px] px-[20px] rounded-[10px]  bg-gray-800">
        <h2 className="text-[40px]  font-bold ">Get Early Access Today</h2>
        <p>
          it only takes a miute to sign up and our free starter tier is
          extremely generous. If you have any questions, our support team would
          be happy to help you.
        </p>
        <form className="contact-form">
          <input
            className="bg-white rounded-full text-black py-[12px] px-[20px] w-[80%]  sm:w-[70%] mx-[20px] my-[10px]"
            type="email"
            placeholder="Your Email"
            required
          />
          <button
            className="main-btn text-white py-[12px] px-[20px] rounded-full"
            type="submit"
          >
            Get free access Today
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
