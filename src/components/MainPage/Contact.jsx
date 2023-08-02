const Contact = () => {
  return (
    <section className="mx-auto mb-10 w-[100%] font-poppins mt-52 text-center">
      <h2 className="text-2xl mb-20">Contact Me</h2>

      <form action="" className="mx-auto bg-[#002d80] w-[30%] p-5">
        <div className="flex flex-col mx-10 justify-center my-10">
          <label className="text-sm text-left mb-4  font-semibold" htmlFor="name">
            NAME
          </label>
          <input className=" outline-none bg-white placeholder:text-[#000a1d] border border-[#000a1d] text-white p-4" type="text" placeholder="Mark Rober" required />
        </div>
        <div className="flex flex-col mx-10 justify-center my-10">
          <label className="text-sm text-left mb-4  font-semibold" htmlFor="name">
            EMAIL
          </label>
          <input className=" outline-none bg-white placeholder:text-[#000a1d] border border-[#000a1d] text-white p-4" type="email" placeholder="markrober@mail.com" required />
        </div>

        <div className="flex flex-col mx-10 justify-center my-10">
          <label className="text-sm text-left mb-4  font-semibold" htmlFor="name">
            EMAIL
          </label>
          <textarea
            className=" outline-none bg-white placeholder:text-[#000a1d] border border-[#000a1d] text-white p-4 h-40"
            type="email"
            placeholder="markrober@mail.com"
            required
          ></textarea>
        </div>

        <button type="submit" className="border border-[#002d80] font-semibold w-fit mx-auto hover:bg-[#0a52da] transition-colors bg-[#00143a] block p-6 px-24">
          Submit
        </button>
      </form>
    </section>
  );
};

export default Contact;
