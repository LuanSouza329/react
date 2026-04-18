import { useState, useEffect } from 'react';

interface Project {
  id: string | number;
  titulo: string;
  resumo: string;
  imagem: string;
  alt: string;
  descricao: string;
  demoUrl: string;
  tecnologias: string[];
}

function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('../../public/dados/projetos.json');
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        console.error('Erro ao buscar projetos:', error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div className="projects">
      <h2>Projetos</h2>

      <div className="project-list">
        {projects ? projects.map((project) => (
          <div key={project.id} className="project-item">
            <div className="project-info">
              <h3>{project.titulo}</h3>
              <p>{project.descricao}</p>
              <p>{project.tecnologias.join(', ')}</p>
              <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                Ver Demonstração
              </a>
            </div>
            <div className="project-image">
              <img src={project.imagem} alt={project.alt} />
            </div>
          </div>
        )) : <p>Carregando projetos...</p>}

      </div>
    </div>
  );
}

export default Projects;