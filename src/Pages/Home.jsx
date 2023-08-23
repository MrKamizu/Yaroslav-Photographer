import React from "react";
import HeroSection from "../components/main/HeroSection";
import PhotoTopics from "../components/main/PhotoTopics";

const Home = () => (
  <>
    <HeroSection />
    <PhotoTopics displayAll={false} />
  </>
);

export default Home;
