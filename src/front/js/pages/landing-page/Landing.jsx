import React from "react";
import Benefits from "../../components/benefits-and-advantages/Benefits.jsx";
import Hero from "../../components/hero/Hero.jsx";
import Navbar from "../../components/navbar/Navbar.jsx";

// images
import shapes from "../../../../../public/assets/3d-Shapes.png";
import InfoSectionRight from "../../components/info-section-right/InfoSectionRight.jsx";
import InfoSection from "../../components/info-section/InfoSection.jsx";
import Pricing from "../../components/pricing/Pricing.jsx";
import Footer from "../../components/footer/Footer.jsx";

const Landing = () => {
  return (
    <>
      <div
        className="m-0 p-0"
        style={{
          backgroundColor: "#F6F9FF",
          backgroundImage: `url(${shapes})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          backgroundPosition: "center",
        }}
      >
        <Navbar />
        <Hero />
      </div>
      <Benefits />
      <InfoSection />
      <InfoSectionRight />
      <Pricing />
      <Footer/>
    </>
  );
};

export default Landing;
