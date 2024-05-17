import aboutImage from "../assets/images/images/about.jpeg";
import Headings from "./Headings";
const About = () => {
  return (
    <>
      <section className="section" id="about">
        <Headings heading="ABOUT " subheading="US" />

        <div className="section-center about-center">
          <div className="about-img">
            <img src={aboutImage} className="about-photo" alt="awesome beach" />
          </div>
          <article className="about-info">
            <h3>explore the difference</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Aspernatur quisquam harum nam cumque temporibus explicabo dolorum
              sapiente odio unde dolor?
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Aspernatur quisquam harum nam cumque temporibus explicabo dolorum
              sapiente odio unde dolor?
            </p>
            <a href="#" className="btn">
              read more
            </a>
          </article>
        </div>
      </section>
    </>
  );
};
export default About;
