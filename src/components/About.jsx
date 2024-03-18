import aboutSvg from "../assets/about.svg";
import SectionTitle from "./SectionTitle";
const About = () => {
  return (
    <section className="bg-white py-20" id="about">
      <div className="align-element grid md:grid-cols-2 items-center gap-16">
        <img src={aboutSvg} className="w-full h-64" alt="img" />
        <article>
          <SectionTitle text="code and coffee" />
          <p className="text-slate-600 mt-8 leading-loose">


            Greetings! I'm Aleksandar, a Front-End Developer from Macedonia, driven by a passion for coding and innovation. My journey into the world of web development began with a focus on Front-End languages, and I've since broadened my skill set to include various DevOps segments. Through continuous learning and exploration, I've enriched my knowledge and expertise, constantly striving to refine my craft. My GitHub profile showcases projects that demonstrate my proficiency in JavaScript, among other languages. I'm excited about the opportunity to contribute my skills and dedication to new projects and teams, and I'm eager to explore fresh challenges and opportunities in the field
          </p>
        </article>
      </div>
    </section>
  );
};
export default About;
