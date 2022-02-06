import React from 'react';

import styles from '../styles/Projects.module.css';

interface Props {
  children: any
}

function ProjectsContainer({ children }: Props) {
  return (
    <div className={styles.projectsGridContainer}>
      {children}
    </div>
  );
}

export default ProjectsContainer;
