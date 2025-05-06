import Achievements from "./components/Achievements";
import Blog from "./components/Blog";
import Calender from "./components/Calender";
import Community from "./components/Community";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import OurClients from "./components/OurClients";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <OurClients />
      <Community />
      <Experience />
      <Achievements/>
      <Calender />
      <Blog/>
      <Footer />
    </>
  );
}
