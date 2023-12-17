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
            Greetings! I'm Aleksandar, a Front-End Developer hailing from Macedonia, equipped with a year of experience. My enthusiasm and passion drive me to pursue continuous learning and growth.
            My journey commenced with a focus on Front-End languages, expanding into diverse DevOps segments. I've enriched my skills through various courses, persistently dedicated to refining my craft.

            My career's been adorned with several projects, showcased on my GitHub profile. JavaScript takes the spotlight in most, showcasing my proficiency in this primary language.

            I'm keen to explore new opportunities within your company, aiming to contribute my expertise and dedication to the team's and organization's success.

          </p>
        </article>
      </div>
    </section>
  );
};
export default About;
