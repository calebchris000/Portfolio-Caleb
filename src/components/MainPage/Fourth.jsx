import { Icon } from "./Third";

const AboutMe = () => {
  return (
    <section className="mx-auto flex gap-[10rem] justify-between items-center mb-10 w-[60%] font-poppins mt-52 tracking-wide leading-relaxed text-left">
      <div className="w-[50%]">
        <h2 className="text-2xl mb-10">About Me</h2>

        <p className="text-[1.1rem]">
          Hi, thanks for checking by. My full name is Caleb Chigozie Nwaizu, and I&apos;m a certified Full-Stack Web Developer. I developed my skill in a
          well-known and thorough bootcamp called{" "}
          <a href="https://microverse.org">
            <b>Microverse</b>.
          </a>{" "}
          This institution taught me the values of learning as a team and by yourself.
          <br />
          <br />
          Unlike many average developers, I have an exceptional love for web development. My first love was JavaScript, which gently guided me on the concepts
          of programming.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <Icon
          className="devicon-github-original scale-[1.4]"
          containerClasses="w-[5rem!important] h-[5rem!important] cursor-pointer"
          onClick={() => (window.location.href = "https://github.com/calebchris000")}
        />
        <Icon
          className="devicon-linkedin-plain scale-[1.4]"
          containerClasses="w-[5rem!important] h-[5rem!important] cursor-pointer"
          onClick={() => (window.location.href = "https://linkedin.com/in/calebchris000")}
        />
        <Icon
          className="devicon-twitter-plain scale-[1.4]"
          containerClasses="w-[5rem!important] h-[5rem!important] cursor-pointer"
          onClick={() => (window.location.href = "https://twitter.com/calebchris000")}
        />
      </div>
    </section>
  );
};

export default AboutMe;
