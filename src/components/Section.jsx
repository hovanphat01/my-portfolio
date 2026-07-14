import Hero from "../sections/Hero";
import AboutMe from "../sections/About";
import Skills from "../sections/Skills"
import Projects from "../sections/Projects";
import Stats from "../sections/Stats";
import Contact from "../sections/Contact"


function Section() {
    return(
        <main className="h-full bg-[#f4f7fd] py-12">
            <Hero/>
            <AboutMe/>
            <Skills/>
            <Projects/>
            <Stats/>
            <Contact/>
        </main>
    )
}

export default Section;