import { useNavigate } from 'react-router-dom';
import ProjectForm from '../project/ProjectForm';
import styles from './NewProject.module.css';

function NewProject() {

  const navigate = useNavigate();

  function createPost(project) {

    project.cost = 0;
    project.services = [];

    fetch("http://localhost:5000/projects", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(project)
    }).then((resp) => resp.json)
      .then((data) => navigate("/projects", { state: {message: 'Projeto criado com sucesso!'}}))
      .catch((err) => console.log(err));

  }

  return (
    <section className={styles.newProjectContainer}>
      <h1>Criar Projeto</h1>
      <p>Crie seu projeto para depois adicionar serviços</p>
      <ProjectForm handleSubmit={createPost} btnText="Criar Projeto"/>
    </section>
  );

}

export default NewProject;
