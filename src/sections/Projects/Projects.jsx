import styles from './ProjectsStyles.module.css';
import viberr from '../../assets/viberr.png';
import freshBurger from '../../assets/fresh-burger.png';
import hipsster from '../../assets/hipsster.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={viberr}
          link="https://bccl-project-using-react.vercel.app/"
          h3="BCCL"
          p="Website and Registraion form"
        />
        <ProjectCard
          src={freshBurger}
          link="http://food-delivery-app-nu-ivory.vercel.app/"
          h3="Tomato"
          p="Food-Delivery App"
        />
        <ProjectCard
          src={hipsster}
          link="https://csi-project.onrender.com/"
          h3="EDUNEXA"
          p="Course Platform"
        />
        <ProjectCard
          src={viberr}
          link="https://github.com/shashankchourasia01/Sorting-Algo-Visualizer.git"
          h3="Sorting Visualizer"
          p="Sorting Algorithm Visualizer"
        />
      </div>
    </section>
  );
}

export default Projects;
