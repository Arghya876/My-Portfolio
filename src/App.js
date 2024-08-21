import styleApp from './App.module.css';

import Home from './components/home/Home';
import About from './components/about/About';
import Service from './components/services/Service';
import Skills from './components/skills/Skills';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

function App() {
  return (
    <>
      <div className={styleApp.appStyle}>
         <div className={styleApp.mainHome}>
            <Home/>
         </div>
         <div className={styleApp.mainAbout}>
            <About/>
         </div>
         <div className={styleApp.mainServices}>
            <Service/>
         </div>
         <div className={styleApp.mainSkills}>
            <Skills/>
         </div>
         <div className={styleApp.mainProjects}>
            <Projects/>
         </div>
         <div className={styleApp.mainContact}>
            <Contact/>
         </div>
         <div className={styleApp.mainFooter}>
            <Footer/>
         </div>
      </div>
    </>
  );
}

export default App;
