import { Link } from 'react-router-dom';
import styles from './ProjectCard.module.css';
import { BsFillTrashFill, BsPencil } from 'react-icons/bs';

function ProjectCard({id, name, budget, category, handleRemove}) {

  const remove = (event) => {
    event.preventDefault();
    handleRemove(id)
  }

  return (
    <div className={styles.projectCard}>
      <h4>{name}</h4>
      <p>
        <span>Orçamento:</span> R${budget}
      </p>
      <p className={styles.categoryText}>
        <span className={`${styles[category.toLowerCase()]}`}></span> {category}
      </p>
      <div className={styles.projectCardActions}>
        <Link to={`/project/${id}`}>
          <BsPencil /> Editar
        </Link>
        <button onClick={remove}>
          <BsFillTrashFill /> Excluir
        </button>
      </div>
    </div>
  );
  
}

export default ProjectCard;
