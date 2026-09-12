import About from "./component/about";
import Footer from "./component/Footer";
import Labs from "./component/Labs";
import ProjectCards from "./component/ProjectCards";
import Seprator from "./component/seprator";
import Skills from "./component/skills";
import SocialMedia from "./component/socialMedia";
import LiveClock from "./component/timeLocation";
import WorkExperiance from "./component/workExperiance";
// import BlogsSection from "./component/Blogs";
// import FreeLanceProject from './component/FreeLanceProject'

function App() {
  return (
    <div>
      <LiveClock />
      <div className="w-full md:w-1/2 mx-auto">
        <About />
        <Seprator />
        <SocialMedia />
        <Seprator />
        <Skills />
        <Seprator />
        <WorkExperiance />
        <Seprator />
        <ProjectCards />
        <Seprator />
        <Labs />
        {/* <FreeLanceProject /> */}
        <Seprator />
        {/* <BlogsSection /> */}
        <Footer />
      </div>
    </div>
  )
}

export default App;

