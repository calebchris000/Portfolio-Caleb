import Profile from "../../assets/112436618.jpeg";
const Top = () => {
  return (
    <section className="mx-auto w-[100%] font-poppins relative mt-52 ">
      <div className="flex flex-col justify-center w-[60%] mx-auto text-center gap-10">
        <img className="w-48 rounded-full mx-auto" src={Profile} alt="" />
        <h3 className="text-2xl">Hi, I&apos;m Caleb</h3>
        <h1 className="text-7xl tracking-normal leading-tight">Build Enterprise Products, brands and experience.</h1>

        <button className="border border-[#002d80] font-semibold w-fit mx-auto hover:bg-[#0a52da] transition-colors bg-[#00143a] block p-6 px-24">Let&apos;s Start</button>
      </div>
    </section>
  );
};

export default Top;
