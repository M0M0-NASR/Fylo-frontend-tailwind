function Contact() {
  return (
    <div className="contact">
      <div className="container flex flex-col gap-y-[30px] w-[70%] mx-auto text-center py-[70px] px-[20px] rounded-[10px]  bg-gray-800">
        <h2>Get Early Access Today</h2>
        <p>If you have any questions, feel free to reach out!</p>
        <form className="contact-form">
          <input
            className="bg-white rounded-full text-black py-[12px] px-[20px]  w-[60%] mx-[20px] my-[10px]"
            type="email"
            placeholder="Your Email"
            required
          />
          <button
            className="main-btn text-white py-[12px] px-[20px] rounded-full"
            type="submit"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
