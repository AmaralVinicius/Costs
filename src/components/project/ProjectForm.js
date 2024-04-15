import { useEffect, useState } from 'react';

import Input from '../form/Input';
import Select from '../form/Select';
import SubmitBtn from '../form/SubmitBtn';
import styles from './ProjectForm.module.css'

function ProjectForm({handleSubmit, projectData, btnText}) {

  const [categories, setCategories] = useState([]);
  const [project, setProject] = useState(projectData || {});

  useEffect(() => {
    fetch("http://localhost:5000/categories", {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    }).then((resp) => resp.json())
      .then((data) => setCategories(data))
      .catch((err) => console.log(err));
  }, []);

  const submit = (event) => {
    event.preventDefault();
    handleSubmit(project);
  }

  function handleChange(input) {
    setProject({
      ...project,
      [input.target.name]: input.target.value
    });
  }

  function handleSelect(input) {
    setProject({
      ...project,
      category: {
        id: input.target.value,
        name: input.target.options[input.target.selectedIndex].text
      }
    });
  }

  return (
    <form onSubmit={submit} className={styles.form}>
      <Input
        type="text"
        text="Nome do projeto"
        name="name"
        placeholder="Digite o nome do projeto"
        handleOnChange={handleChange}
        value={project.name ? project.name : ""}
      />
      <Input
        type="number"
        text="Orçamento do projeto"
        name="budget"
        placeholder="Digite o orçamento total"
        handleOnChange={handleChange}
        value={project.budget ? project.budget : ""}
      />
      <Select
        text="Selecione a categoria"
        name="category_id"
        options={categories}
        handleOnChange={handleSelect}
        value={project.category ? project.category.id : ""}
      />
      <SubmitBtn text={btnText}/>
    </form>
  );

}

export default ProjectForm;
