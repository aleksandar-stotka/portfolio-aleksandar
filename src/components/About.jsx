import aboutSvg from "../assets/about.svg";
import SectionTitle from "./SectionTitle";
const About = () => {
  return (
    <section className="bg-white py-20" id="about">
      <div className="align-element grid md:grid-cols-2 items-center gap-16">
        <img src={aboutSvg} className="w-full h-64" />
        <article>
          <SectionTitle text="code and coffee" />
          <p className="text-slate-600 mt-8 leading-loose">
            Hello, my name is Aleksandar, and I am a Front-End Developer from
            Macedonia with one year of experience. I am an enthusiastic and
            passionate individual who is committed to continuous learning and
            growth. I began my programming journey by focusing on Front-End
            programming languages and have also gained valuable experience in
            various DevOps segments. To enhance my programming knowledge, I have
            pursued various courses, and I remain dedicated to ongoing learning
            and skill improvement. Throughout my career, I have had the
            opportunity to work on several projects, some of which are available
            on my GitHub profile. These projects predominantly feature
            JavaScript as the primary programming language
          </p>
        </article>
      </div>
    </section>
  );
};
export default About;
