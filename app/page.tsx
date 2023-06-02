import Clients from "./clients";
import Contact from "./contact";
import Header from "./header";
import LastWorks from "./last-works";
import Skills from "./skills";
import Testimonial from "./testimonial";

export default function Home() {
  return (
    <>
      <Header />
      <Clients />
      <Skills />
      <LastWorks />
      <Testimonial />
      <Contact />
    </>
  );
}
