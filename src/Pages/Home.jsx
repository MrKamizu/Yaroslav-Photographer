import React from "react";
import HeroSection from "../Components/main/HeroSection";
import PhotoTopics from "../Components/main/PhotoTopics";

const Home = () => (
  <>
    <HeroSection />
    <PhotoTopics displayAll={false} />
  </>
);

export default Home;
