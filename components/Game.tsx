import React from 'react';

interface Props {
  title: string,
  description: string
}

function Game({ title, description }: Props) {
  return (
    <div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default Game;
