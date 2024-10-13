import AboutUs from "@/components/UI/HomePage/AboutUs";
import CardSection from "@/components/UI/HomePage/CardSection";
import DonationProcess from "@/components/UI/HomePage/DonationProcess";
import HeroSection from "@/components/UI/HomePage/HeroSection";
import Network from "@/components/UI/HomePage/Network";
import SearchDonors from "@/components/UI/HomePage/SearchDonors";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <CardSection/>
      <AboutUs />
      <DonationProcess/>
      <SearchDonors />
      <Network/>
    </>
  );
};

export default HomePage;
