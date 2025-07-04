import Features from "./components/Features/Features.jsx";
import Header from "./components/Header/Header.jsx";
import Hero from "./components/Hero/Hero.jsx";
import features from "./DATA/Features/data.json";
import advantages from "./DATA/Advantages/data.json";
import AdvantagesList from "./components/Advantage/AdvantagesList.jsx";
import ReviewList from "./components/Review/ReviewList.jsx";
import reviews from "./DATA/Reviews/data.json";
import PlanList from "./components/Plans/PlanList.jsx";
import plans from "./DATA/Plans/data.json";
import Ads from "./components/Ads/Ads.jsx";
import ads from "./DATA/Ads/data.json";
import Footer from "./components/Footer/Footer.jsx";

const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <Features data={features} />
      <AdvantagesList data={advantages} />
      <ReviewList data={reviews} />
      <PlanList data={plans} />
      <Ads data={ads} />
      <Footer />
    </>
  );
};

export default App;

/*
 🛠 TODO: Cyber Security Landing Page

 ✅ Setup
 - [x] Initialize project with Vite
 - [x] Set up Tailwind CSS
 - [x] Create basic structure (`components/`, `assets/`, `styles/`)

 🎨 Layout & Styling

 Header
 - [x] Add logo
 - [x] Navigation menu
 - [x] Responsive burger menu
 - [x] Style background and layout

 Hero Section

 - [x] Add title and subtitle
 - [x] CTA button
 - [x] Centered content
 - [x] Background image / gradient
 - [x] Make responsive

 Features Section
 - [x] Create 3 feature cards
 - [x] Add icons, titles, text
 - [x] Responsive grid

 Advantages Sections
 - [x] First content section
 - [x] Second content section
 - [x] Done with data from json file

 Reviews Section
 - [x] Review as a single component
 - [x] Responsive
 - [x] Slidebar

 Plans
 - [x] Plans as single components
 - [x] Data from .json file
 - [x] Hover styles

  Ads
 - [x] CTA button
 - [x] Hover style

  Footer
 - [x] Add logo and copyright
 - [x] Quick links menu
 - [x] Social media icons

 📱 Responsiveness
 - [x] Mobile-first styling
 - [x] Test breakpoints: 375px, 1600px only
 - [x] Smooth scroll for anchor links

 💡 UI Enhancements
 - [x] Hover effects for buttons
 - [x] Scroll animations (optional)

 🚀 Final Steps
 - [x] Final code cleanup and review
 - [x] Test on PageSpeed Insights
 - [x] Deploy to GitHub and Vercel
*/
