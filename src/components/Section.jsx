import Hero from "../sections/Hero";
import AboutMe from "../sections/About";
import Skills from "../sections/Skills"
import Projects from "../sections/Projects";


function Section() {
    return(
        <main className="h-full bg-[#f4f7fd] py-12">
            <Hero/>
            <AboutMe/>
            <Skills/>
            <Projects/>
        </main>
    )
}

export default Section;