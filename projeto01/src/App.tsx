import { Topo } from "./components/topo/Topo";
import PerfilSection from "./components/PerfilSection";
import Skills from "./components/SkillSection";
import Education from "./components/Education";
import Projects from "./components/Projects";
import "./app.css";
function App() {
  return (
    <main className="App">
      <Topo />
        <PerfilSection />

        <section className="content">
          <Skills />
          <Education />
          <Projects />
        </section>

    </main>
  )
}

export default App