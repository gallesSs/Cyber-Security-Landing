import Features from "./components/Features/Features.jsx";
import Header from "./components/Header/Header.jsx";
import Hero from "./components/Hero/Hero.jsx";
import data from "./DATA/Advantages/data.json";
import AdvantagesList from "./components/Advantage/AdvantagesList.jsx";
import ReviewList from "./components/Review/ReviewList.jsx";
import reviewData from "./DATA/Reviews/data.json";
import PlanList from "./components/Plans/PlanList.jsx";
import plans from "./DATA/Plans/data.json";

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Features />
      <AdvantagesList data={data} />
      <ReviewList data={reviewData} />
      <PlanList data={plans} />
    </div>
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

FIXME: Plans
 - [ ] Plans as single components
 - [ ] Data from .json file
 - [ ] Hover styles

  Footer
 - [ ] Add logo and copyright
 - [ ] Quick links menu
 - [ ] Social media icons

 📱 Responsiveness
 - [ ] Mobile-first styling
 - [ ] Test breakpoints: 375px, 1600px only
 - [ ] Smooth scroll for anchor links

 💡 UI Enhancements
 - [ ] Hover effects for buttons
 - [ ] Scroll animations (optional)

 🚀 Final Steps
 - [ ] Final code cleanup and review
 - [ ] Test on PageSpeed Insights
 - [ ] Deploy to GitHub and Vercel
*/
