import { useEffect } from "react";
import { FadeIn } from "../../app/miscellaneous/FadeIn";

const AboutMe = () => {
  useEffect(() => {FadeIn('.aboutme')}, [])

  return (
    <section className="aboutme mx-auto flex flex-col gap-[4rem] justify-between items-center w-[30%] font-poppins mt-52 tracking-wide leading-relaxed">
        <h2 className="text-2xl">About Me</h2>

        <p className="text-[1.1rem]">
          Hi, thanks for checking by. My full name is Caleb Chigozie Nwaizu, and I&apos;m a certified Full-Stack Web Developer. I developed my skill in a
          well-known and thorough bootcamp called{" "}
          <a className="text-purple-500" href="https://microverse.org">
            <b>Microverse</b>.
          </a>{" "}
          This institution taught me the values of learning as a team and by yourself.
          <br />
          <br />
          Unlike many average developers, I have an exceptional love for web development. My first love was JavaScript, which gently guided me on the concepts
          of programming.
        </p>

     
    </section>
  );
};

export default AboutMe;
