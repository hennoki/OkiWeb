import { useEffect } from "react";
// import Aos from "aos";
import AOS from "aos";
import "aos/dist/aos.css";
import BannerDetails from "./components/bannerDetails/BannerDetails";
import Blog from "./components/blog/Blog";
import Footer from "./components/footer/Footer";
import Hero from "./components/hero/Hero";
import Navba from "./components/navbar/Navba";
import OverviewCounter from "./components/overview-counter/OverviewCounter";
import SimpleBanner from "./components/simpleBanner/SimpleBanner";

function App() {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 500,
      easing: "ease-in-out-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="dark:bg-slate-900 bg-white">
      <Navba />
      <Hero />
      <OverviewCounter />
      <BannerDetails />
      <BannerDetails reverse={true} />
      <SimpleBanner />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
