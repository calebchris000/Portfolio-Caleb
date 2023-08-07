import { useEffect } from "react";
import { FadeIn } from "../../app/miscellaneous/FadeIn";

const AboutMe = () => {
  useEffect(() => {
    FadeIn(".aboutme");
  }, []);

  return (
    <section className="aboutme mx-auto flex lg:w-[50%] flex-col gap-[4rem] justify-between items-center font-poppins mt-52 tracking-wide leading-relaxed">
      <h2 className="text-2xl">About Me</h2>

      <article className="text-[1.1rem] flex flex-col gap-6">
        <p>
          Hi, thanks for checking by. My full name is Caleb Chigozie Nwaizu, and I&apos;m a certified Full-Stack Web Developer. I developed my skill in a
          well-known and thorough bootcamp called{" "}
          <a className="text-purple-500" href="https://microverse.org">
            <b>Microverse</b>.
          </a>{" "}
        </p>

        <p>
          This institution taught me the values of learning as a team and by yourself. Unlike many average developers, I have an exceptional love for web
          development. My first love was JavaScript, which gently guided me on the concepts of programming.
        </p>
        <p>
          If you&apos;re on the lookout for a skilled and passionate developer, look no further! I&apos;ve got the hands and brains for the job, and I&apos;m
          more than excited to work with your company. How about we catch up over a cup of coffee and discuss your project in detail? Sounds like a plan, right?
          Don&apos;t hesitate to contact me using the Contact Me section below:
        </p>
      </article>

      <article></article>
    </section>
  );
};

export default AboutMe;
