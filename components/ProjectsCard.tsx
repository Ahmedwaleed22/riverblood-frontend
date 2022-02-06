import React from 'react';
import Image from 'next/image';
import styles from '../styles/Projects.module.css';

interface Props {
  GameImage: string
}

function ProjectsCard({ GameImage }: Props) {
  return (
    <div className={styles.projectsCard}>
      <Image src={GameImage} height={800} width={1000} />
    </div>
  );
}

export default ProjectsCard;
