import Header from "../components/Header";
import Landing from "../components/Landing";
import Footer from "../components/Footer";
import Features from "../components/Features";
import StayProductive from "../components/stayProductive";
import Opinions from "../components/Opinions";
import Contact from "../components/Contact";

function Home() {
  return (
    <>
      <Header />
      <Landing />
      <Features />
      <StayProductive />
      <Opinions />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;
