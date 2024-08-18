import AboutUs from "@/components/UI/HomePage/AboutUs";
import DonationProcess from "@/components/UI/HomePage/DonationProcess";
import HeroSection from "@/components/UI/HomePage/HeroSection";
import Network from "@/components/UI/HomePage/Network";
import SearchDonors from "@/components/UI/HomePage/SearchDonors";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <AboutUs />
      <DonationProcess />
      <SearchDonors />
      <Network/>
    </>
  );
};

export default HomePage;
