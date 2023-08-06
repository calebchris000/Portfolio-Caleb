import { useEffect } from "react";
import { FadeIn } from "../../app/miscellaneous/FadeIn";

const Contact = () => {
  useEffect(() => {FadeIn('.contact')}, [])

  return (
    <section id="contact" className="contact mx-auto mb-10 font-poppins mt-52 text-center">
      <h2 className="text-2xl mb-20">Contact Me</h2>

      <form action="" className="contact mx-auto border border-[#002d80] bg-[#00143a] lg:w-[50%] p-5 px-2">
        <div className="flex flex-col mx-10 justify-center my-10">
          <label className="text-sm text-left mb-4  font-semibold" htmlFor="name">
            NAME
          </label>
          <input
            className=" outline-none bg-[#59caff] placeholder:text-[#000a1d] border border-[#000a1d] text-[#000a1d] p-4"
            type="text"
            placeholder="Mark Rober"
            required
          />
        </div>
        <div className="flex flex-col mx-10 justify-center my-10">
          <label className="text-sm text-left mb-4  font-semibold" htmlFor="name">
            EMAIL
          </label>
          <input
            className=" outline-none bg-[#59caff] placeholder:text-[#000a1d] border border-[#000a1d] text-[#000a1d] p-4"
            type="email"
            placeholder="markrober@mail.com"
            required
          />
        </div>

        <div className="flex flex-col mx-10 justify-center my-10">
          <label className="text-sm text-left mb-4  font-semibold" htmlFor="name">
            CONTENT
          </label>
          <textarea
            className=" outline-none bg-[#59caff] placeholder:text-[#000a1d] border border-[#000a1d] text-[#000a1d] p-4 h-40"
            type="email"
            placeholder="E.g 'Hello Caleb...'"
            required
          ></textarea>
        </div>

        <button type="submit" className="contact-submit font-semibold w-fit mx-auto hover:bg-[#0a52da] text-[#103372] transition-colors bg-[#59caff] block p-6 px-24">
          Submit
        </button>
      </form>
    </section>
  );
};

export default Contact;
